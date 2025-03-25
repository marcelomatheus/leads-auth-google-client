# Leads Register

Leads Register é um projeto avançado de cadastro e login, desenvolvido com **Next.js** e **TypeScript**.
A aplicação permite fazer login via **OAuth2 do Google**, utilizando as credenciais configuradas no **Google Cloud Console**.

## Screenshots
<img src="https://github.com/user-attachments/assets/fcc9774b-d990-49fa-882f-2cfae4af207f" style="width: 500px" />
<img src="https://github.com/user-attachments/assets/c26b5200-5dea-4fdd-a367-2837df25f896" style="width: 500px" />



O projeto segue boas práticas de desenvolvimento, como:

- 🔐 Persistência de autenticação com **useContext**
- 📑 Gerenciamento de formulários com **react-hook-form**
- ✅ Validação de dados com **zod**
- 🎨 Estilização com **Tailwind CSS**

---

## 📂 Estrutura de Pastas

```plaintext
src/
│── app/
│   ├── _api/                # Configuração do servidor e chamadas HTTP
│   │   └── server.ts
│   ├── _providers/          # Providers globais (ex: autenticação)
│   │   └── AuthProvider.tsx
│   ├── _reducers/           # Reducers para gerenciamento de estado
│   │   └── authReducer.ts
│   ├── auth/                # Módulo de autenticação
│   │   ├── _service/        # Serviços de autenticação
│   │   ├── login/           # Páginas e componentes de login
│   │   │   ├── form-login.tsx
│   │   │   ├── page.tsx
│   │   ├── not-logged/      # Página de usuário não autenticado
│   │   │   ├── page.tsx
│   │   ├── register/        # Páginas e componentes de cadastro
│   │       ├── form-register.tsx
│   │       ├── page.tsx
│   ├── context/             # Contexto de autenticação
│   │   ├── Auth-Context.tsx
│── public/                  # Arquivos estáticos
│   ├── favicon.ico
│── styles/                  # Estilos globais
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.module.css
│   ├── page.tsx
```

---

## 🚀 Tecnologias Utilizadas

- **Next.js** - Framework React para SSR e SSG
- **TypeScript** - Tipagem estática para segurança e melhor manutenção
- **OAuth2 Google** - Autenticação segura com credenciais do Google
- **useContext** - Gerenciamento global do token de usuário
- **react-hook-form** - Manipulação eficiente de formulários
- **zod** - Validação de dados flexível e segura
- **Tailwind CSS** - Estilização moderna e otimizada

---

## 🔧 Configuração e Execução

### 1️⃣ Pré-requisitos:
Antes de iniciar, você precisa ter instalado:

- Node.js (recomendado: versão LTS)
- Gerenciador de pacotes (**pnpm** ou **npm**)

### 2️⃣ Clonar o Repositório:
```bash
git clone https://github.com/marcelomatheus/leads-register.git
cd leads-register
```

### 3️⃣ Instalar Dependências:
```bash
npm install
# ou
yarn install
```

### 4️⃣ Configurar Variáveis de Ambiente:
Crie um arquivo **.env** na raiz do projeto e defina suas credenciais do Google OAuth:

```env
GOOGLE_CLIENT_ID=SEU_CLIENT_ID
GOOGLE_CLIENT_SECRET=SEU_CLIENT_SECRET
```

A **API que gerencia os usuários está em um repositório separado**. Certifique-se de configurá-la corretamente antes de executar o frontend.

### 5️⃣ Executar o Projeto:
```bash
npm run dev
# ou
yarn dev
```

Acesse **[http://localhost:3000](http://localhost:3000)** no seu navegador.

---

## 🛠️ Funcionalidades

✔ Cadastro de novos usuários  
✔ Login via Google OAuth2  
✔ Persistência de autenticação com useContext  
✔ Validação de dados com zod  
✔ Formulários otimizados com react-hook-form  
✔ UI responsiva e estilizada com Tailwind CSS  

---

## 📜 Licença
Este projeto está sob a licença **MIT**.

---

Feito com 💙 por [marcelomatheus](https://github.com/seu-usuario)
