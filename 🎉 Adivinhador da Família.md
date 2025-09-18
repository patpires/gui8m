# 🎉 Adivinhador da Família

Um jogo interativo inspirado no Akinator, mas focado exclusivamente em familiares e amigos próximos! Criado especialmente para comemorar os 8 meses do nosso pequeno tesouro! 👶✨

## 🎮 Como Jogar

1. **Pense em alguém especial** da sua família ou amigos próximos
2. **Responda às perguntas** do Gênio da Família com sinceridade
3. **Veja a mágica acontecer** quando ele adivinhar em quem você estava pensando!
4. **Divirta-se** com as animações e efeitos especiais

## 🌟 Características

- **Interface alegre e divertida** com cores vibrantes e animações
- **Linguagem coloquial** e carinhosa, perfeita para toda a família
- **Gênio animado** com olhos que seguem o mouse e expressões divertidas
- **Efeitos sonoros** e visuais (confete, estrelinhas, partículas flutuantes)
- **Sistema inteligente** de perguntas que se adapta às respostas
- **Responsivo** - funciona em computadores, tablets e celulares

## 🎯 Funcionalidades

### ✨ Efeitos Visuais
- Fundo com estrelas cintilantes
- Partículas flutuantes (balões, estrelas, etc.)
- Animações suaves de transição entre telas
- Efeito de confete quando acertar
- Brilhos e sparkles nos botões

### 🎵 Efeitos Sonoros
- Sons de clique nos botões
- Som de "pensamento" quando o gênio está processando
- Melodia de sucesso quando acertar

### 🧠 Inteligência do Jogo
- Banco de dados personalizável de familiares
- Sistema de eliminação baseado em atributos
- Perguntas inteligentes que se adaptam às respostas
- Possibilidade de adicionar novos familiares

## 🚀 Como Usar

### Opção 1: Abrir Diretamente
1. Baixe todos os arquivos (`index.html`, `style.css`, `script.js`)
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Comece a jogar!

### Opção 2: Servidor Local
1. Coloque os arquivos em uma pasta
2. Execute um servidor HTTP simples:
   ```bash
   python3 -m http.server 8080
   ```
3. Acesse `http://localhost:8080` no navegador

### Opção 3: GitHub Pages
1. Faça upload dos arquivos para um repositório no GitHub
2. Ative o GitHub Pages nas configurações
3. Compartilhe o link com a família!

## 👨‍👩‍👧‍👦 Personalizando para Sua Família

Para personalizar o jogo com os membros da sua família:

1. **Edite o arquivo `script.js`**
2. **Encontre a seção `familyDatabase`**
3. **Substitua os exemplos pelos seus familiares:**

```javascript
let familyDatabase = [
    {
        name: "Vovô João",
        description: "O patriarca carinhoso que adora contar histórias",
        attributes: {
            genero: "masculino",
            idade: "idoso",
            parentesco: "avo",
            personalidade: "carinhoso",
            hobby: "contar-historias",
            mora_aqui: "sim",
            trabalha: "nao"
        }
    },
    // Adicione mais familiares aqui...
];
```

### 🏷️ Atributos Disponíveis

- **genero**: "masculino" ou "feminino"
- **idade**: "bebe", "crianca", "adolescente", "adulto", "idoso"
- **parentesco**: "pai", "mae", "avo", "tio", "primo", "neto", etc.
- **personalidade**: "carinhoso", "engracado", "serio", "artistica", etc.
- **hobby**: "cozinhar", "contar-historias", "pintar", "esportes", etc.
- **mora_aqui**: "sim" ou "nao"
- **trabalha**: "sim" ou "nao"

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Animações e design responsivo
- **JavaScript** - Lógica do jogo e interatividade
- **Web Audio API** - Efeitos sonoros
- **Google Fonts** - Tipografia (Fredoka One + Poppins)

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge (versões modernas)
- ✅ Dispositivos móveis (iOS e Android)
- ✅ Tablets e desktops
- ✅ Funciona offline após o primeiro carregamento

## 🎊 Comemorando os 8 Meses

Este jogo foi criado especialmente para celebrar os 8 meses do nosso pequeno tesouro! É uma forma divertida de reunir a família e criar momentos especiais juntos. 

**Que a diversão e o amor familiar sempre estejam presentes em nossas vidas!** 💕

---

*Feito com muito ❤️ para nossa família querida!*
