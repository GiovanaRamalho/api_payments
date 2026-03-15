# Multi-Gateway Payment API

API RESTful para gerenciamento de pagamentos utilizando múltiplos gateways.
O sistema tenta processar pagamentos seguindo uma **ordem de prioridade de gateways**, garantindo fallback automático caso um gateway falhe.

Este projeto foi desenvolvido como parte de um **teste técnico para backend**.

---

# Tecnologias Utilizadas

* Node.js
* TypeScript
* Express
* MySQL / MariaDB
* mysql2
* express-validator
* JWT
* Docker (para mock dos gateways)

---

# Arquitetura do Projeto

O projeto segue uma arquitetura organizada em camadas:

```
src
│
controllers    → recebem as requisições HTTP
services       → regras de negócio
repositories   → acesso ao banco de dados
models         → tipagens e entidades
gateways       → integração com gateways externos
validators     → validação de dados da API
routes         → definição das rotas
config         → configurações (ex: banco de dados)
```

Fluxo da aplicação:

```
Request → Routes → Controller → Service → Repository → Database
```

Para pagamentos:

```
Request → PurchaseController → PaymentService → Gateways → Database
```

---

# Estrutura do Banco de Dados

O banco contém as seguintes tabelas:

### users

| campo    | descrição           |
| -------- | ------------------- |
| id       | identificador       |
| email    | email do usuário    |
| password | senha criptografada |
| role     | role do usuário     |

---

### clients

| campo | descrição     |
| ----- | ------------- |
| id    | identificador |
| name  | nome          |
| email | email         |

---

### gateways

| campo     | descrição              |
| --------- | ---------------------- |
| id        | identificador          |
| name      | nome do gateway        |
| is_active | gateway ativo          |
| priority  | prioridade de execução |

---

### products

| campo  | descrição        |
| ------ | ---------------- |
| id     | identificador    |
| name   | nome do produto  |
| amount | valor do produto |

---

### transactions

| campo             | descrição                 |
| ----------------- | ------------------------- |
| id                | identificador             |
| client_id         | cliente                   |
| gateway_id        | gateway utilizado         |
| external_id       | id retornado pelo gateway |
| status            | status da transação       |
| amount            | valor da compra           |
| card_last_numbers | últimos números do cartão |

---

### transaction_products

| campo          | descrição        |
| -------------- | ---------------- |
| transaction_id | id da transação  |
| product_id     | produto comprado |
| quantity       | quantidade       |

---

# Instalação

Clone o repositório:

```
git clone <repo_url>
cd payment-api
```

Instale as dependências:

```
npm install
```

---

# Configuração de Ambiente

Crie um arquivo `.env` na raiz do projeto.

Exemplo:

```
# SERVER
PORT=3000

# DATABASE
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=payment_manager

# JWT
JWT_SECRET=your_jwt_secret

# GATEWAY 1
GATEWAY1_URL=http://localhost:3001
GATEWAY1_EMAIL=dev@betalent.tech
GATEWAY1_TOKEN=FEC9BB078BF338F464F96B48089EB498

# GATEWAY 2
GATEWAY2_URL=http://localhost:3002
GATEWAY2_TOKEN=tk_f2198cc671b5289fa856
GATEWAY2_SECRET=3d15e8ed6131446ea7e3456728b1211f
```

---

# Rodando o Projeto

Execute a aplicação:

```
npm run dev
```

A API ficará disponível em:

```
http://localhost:3000
```

---

# Mock dos Gateways

Os gateways são simulados via Docker.

Com autenticação:

```
docker run -p 3001:3001 -p 3002:3002 matheusprotzen/gateways-mock
```

Sem autenticação:

```
docker run -p 3001:3001 -p 3002:3002 -e REMOVE_AUTH='true' matheusprotzen/gateways-mock
```

---

# Funcionamento do Sistema de Pagamento

Ao realizar uma compra:

1. O sistema calcula o valor total baseado no produto e quantidade
2. O cliente é criado ou reutilizado
3. Os gateways ativos são buscados no banco
4. A tentativa de pagamento segue a prioridade definida
5. Se um gateway falhar, o próximo é tentado
6. Ao obter sucesso, a transação é salva no banco

Fluxo:

```
Compra
 ↓
Gateway 1
 ↓ falha
Gateway 2
 ↓
Sucesso
 ↓
Salvar transaction
```

---

# Rotas da API

## Públicas

### Login

```
POST /api/auth/login
```

---

### Realizar Compra

```
POST /api/purchase
```

Exemplo:

```
{
  "name": "Cliente Teste",
  "email": "cliente@email.com",
  "product_id": 1,
  "quantity": 2,
  "cardNumber": "5569000000006063",
  "cvv": "010"
}
```

---

# Rotas Privadas

### Produtos

```
GET /api/products
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
```

---

### Usuários

```
GET /api/users
POST /api/users
GET /api/users/:id
PUT /api/users/:id
DELETE /api/users/:id
```

---

### Clientes

```
GET /api/clients
GET /api/clients/:id
```

---

### Gateways

```
PATCH /api/gateways/:id/toggle
PATCH /api/gateways/:id/priority
```

---

# Segurança

* Senhas armazenadas com **hash**
* Autenticação baseada em **JWT**
* Validação de dados nas requisições
* Dados sensíveis não são retornados pela API

---

# Melhorias Futuras

* Implementação completa de TDD
* Docker Compose para API + banco + gateways
* Middleware de autenticação
* Sistema de roles e permissões
* Logs estruturados

---

# Autor

Projeto desenvolvido por **Giovana Ramalho** como parte de um teste técnico backend.
