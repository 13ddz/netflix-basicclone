# 📚 Como Enviar o PetLar para o GitHub

Siga este guia passo a passo para fazer upload do projeto PetLar para o GitHub.

## 🔧 Pré-requisitos

1. Ter uma conta no [GitHub](https://github.com)
2. Ter o Git instalado no seu computador
   - Windows: [Download Git](https://git-scm.com/download/win)
   - Mac: `brew install git`
   - Linux: `sudo apt-get install git`

## 📝 Passo a Passo

### 1️⃣ Baixar os Arquivos do Projeto

Se você está no Figma Make, você pode:
- Fazer download de todos os arquivos do projeto
- Ou copiar manualmente cada arquivo para seu computador

Crie uma pasta chamada `petlar` no seu computador e coloque todos os arquivos lá.

### 2️⃣ Abrir o Terminal

- **Windows**: Git Bash ou PowerShell
- **Mac/Linux**: Terminal

### 3️⃣ Navegar até a Pasta do Projeto

```bash
cd caminho/para/petlar
```

### 4️⃣ Inicializar o Repositório Git

```bash
git init
```

### 5️⃣ Adicionar Todos os Arquivos

```bash
git add .
```

### 6️⃣ Fazer o Primeiro Commit

```bash
git commit -m "Initial commit: PetLar - Site completo de pet shop"
```

### 7️⃣ Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name**: `petlar`
   - **Description**: `Site completo de pet shop com adoção, doações e agendamento de visitas`
   - **Visibility**: Public (ou Private se preferir)
   - **NÃO** marque "Initialize with README" (já temos um)
5. Clique em **"Create repository"**

### 8️⃣ Conectar o Repositório Local ao GitHub

Copie os comandos que o GitHub mostra (algo como):

```bash
git remote add origin https://github.com/SEU-USUARIO/petlar.git
git branch -M main
git push -u origin main
```

**Substitua `SEU-USUARIO`** pelo seu nome de usuário do GitHub.

### 9️⃣ Fazer o Push

Se pedir credenciais:
- **Username**: seu nome de usuário do GitHub
- **Password**: use um [Personal Access Token](https://github.com/settings/tokens) ao invés da senha

## ✅ Pronto!

Seu projeto agora está no GitHub! Acesse:
```
https://github.com/SEU-USUARIO/petlar
```

## 🔄 Atualizações Futuras

Quando você fizer mudanças no projeto:

```bash
# Verificar mudanças
git status

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Enviar para o GitHub
git push
```

## 🌐 Fazer Deploy (Opcional)

Você pode hospedar o site gratuitamente em:

### Vercel (Recomendado)
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "Import Project"
4. Selecione o repositório `petlar`
5. Clique em "Deploy"

### Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Faça login com sua conta GitHub
3. Clique em "Add new site"
4. Selecione "Import from Git"
5. Escolha o repositório `petlar`
6. Clique em "Deploy site"

### GitHub Pages
1. No repositório do GitHub, vá em **Settings**
2. Na barra lateral, clique em **Pages**
3. Em "Source", selecione a branch `main`
4. Clique em **Save**
5. Seu site estará em `https://SEU-USUARIO.github.io/petlar`

## 🆘 Problemas Comuns

### "Permission denied"
- Use um Personal Access Token ao invés da senha
- Gere em: GitHub → Settings → Developer settings → Personal access tokens

### "Repository not found"
- Verifique se o nome do repositório está correto
- Certifique-se de que está logado na conta correta

### "Nothing to commit"
- Verifique se os arquivos estão na pasta correta
- Use `git status` para ver o que está acontecendo

## 📞 Precisa de Ajuda?

- [Documentação do Git](https://git-scm.com/doc)
- [Guia do GitHub](https://guides.github.com)
- [Suporte do GitHub](https://support.github.com)

---

Boa sorte com seu projeto! 🐾
