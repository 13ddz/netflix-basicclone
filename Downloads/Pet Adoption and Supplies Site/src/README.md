# 🐾 PetLar - Pet Shop & Adoção

Um site completo para venda de produtos pet, adoção de animais, doações e agendamento de visitas às ONGs parceiras.

![PetLar](https://img.shields.io/badge/Status-Ativo-success)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4.x-38bdf8)

## 🎨 Características

- **Design Coral Moderno**: Interface intuitiva com tema coral (#FF6B6B)
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Acessibilidade Completa**: Menu de acessibilidade com:
  - Controle de tamanho de fonte (3 níveis)
  - Modo de alto contraste
  - Audiodescrição
  - Atalhos de teclado (Alt+A)
  - Navegação por teclado
- **Animações Suaves**: GIFs de pets brincando para tornar a experiência mais agradável
- **Sistema de Recompensas**: Doadores ganham descontos escalonados (10%, 15% ou 20%)

## 📋 Funcionalidades

### 🛍️ Loja de Produtos
- Catálogo de rações premium
- Variedade de brinquedos
- Sistema de carrinho de compras
- Notificações toast

### 🏠 Adoção de Pets
- Galeria de animais disponíveis
- Filtros por tipo, raça e idade
- Informações detalhadas de cada pet
- Localização das ONGs

### 💝 Sistema de Doação
- Formulário completo de doação
- Programa de descontos para doadores:
  - **10% OFF** - Doações até R$ 100
  - **15% OFF** - Doações de R$ 101 a R$ 300
  - **20% OFF** - Doações acima de R$ 300
- Agendamento de coleta

### 📅 Agendamento de Visitas
- 3 ONGs parceiras com endereços completos
- Sistema de controle de vagas
- Visualização em tempo real da disponibilidade
- Seleção de data e horário
- Validação de limites de visitantes

## 🚀 Tecnologias

- **React 18** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS
- **Shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **date-fns** - Manipulação de datas
- **Sonner** - Notificações toast
- **React Hook Form** - Gerenciamento de formulários

## 📦 Estrutura do Projeto

```
petlar/
├── App.tsx                          # Componente principal
├── components/
│   ├── Header.tsx                   # Cabeçalho com navegação
│   ├── Hero.tsx                     # Seção hero com GIF
│   ├── Products.tsx                 # Lista de produtos
│   ├── Adoption.tsx                 # Galeria de pets
│   ├── Donation.tsx                 # Formulário de doação
│   ├── VisitScheduling.tsx          # Agendamento de visitas
│   ├── Footer.tsx                   # Rodapé
│   ├── AccessibilityButton.tsx      # Botão flutuante
│   ├── AccessibilityMenu.tsx        # Menu de acessibilidade
│   └── ui/                          # Componentes Shadcn
├── styles/
│   └── globals.css                  # Estilos globais (Tailwind v4)
└── README.md
```

## 🎨 Paleta de Cores

```css
--primary: #FF6B6B         /* Coral */
--secondary: #FFE5E0       /* Coral claro */
--accent: #FFA69E          /* Coral médio */
--background: #FFF5F3      /* Bege suave */
--foreground: #2C1810      /* Marrom escuro */
```

## ⚡ Como Usar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/petlar.git

# Entre na pasta
cd petlar

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Build para Produção

```bash
# Gera build otimizado
npm run build

# Preview do build
npm run preview
```

## ♿ Acessibilidade

O PetLar foi desenvolvido pensando em inclusão:

- **Alt + A**: Abre o menu de acessibilidade
- **Tab**: Navega entre elementos
- **Enter**: Ativa elemento focado
- **Esc**: Fecha menus e modais

### Recursos de Acessibilidade

- ✅ Contraste WCAG AAA
- ✅ Navegação por teclado completa
- ✅ Labels e ARIA attributes
- ✅ Foco visual destacado
- ✅ Textos alternativos em imagens
- ✅ Tamanhos de fonte ajustáveis

## 🌐 ONGs Parceiras

1. **ONG Amigos dos Animais**
   - Rua das Flores, 123 - Centro
   - Capacidade: 10 visitantes

2. **ONG Patinhas Felizes**
   - Av. Principal, 456 - Vila Nova
   - Capacidade: 8 visitantes

3. **ONG Lar dos Bichos**
   - Rua Verde, 789 - Jardim Europa
   - Capacidade: 15 visitantes

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

- **Email**: contato@petlar.com.br
- **Telefone**: (11) 98765-4321
- **Endereço**: São Paulo, SP

## 🎯 Roadmap

- [ ] Sistema de carrinho de compras funcional
- [ ] Integração com gateway de pagamento
- [ ] Painel administrativo para ONGs
- [ ] Sistema de notificações por email
- [ ] Chat ao vivo com suporte
- [ ] App mobile (React Native)
- [ ] Blog sobre cuidados com pets
- [ ] Sistema de avaliações de produtos

## 🙏 Agradecimentos

- Imagens: [Unsplash](https://unsplash.com)
- GIFs: [Giphy](https://giphy.com)
- Ícones: [Lucide](https://lucide.dev)
- Componentes UI: [Shadcn/ui](https://ui.shadcn.com)

---

Feito com ❤️ e 🐾 por PetLar Team
