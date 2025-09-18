// Banco de dados da família Barbosa Pires Santa Bárbara - VERSÃO MELHORADA
// Gui: Guilherme Barbosa Pires Santa Bárbara (8 meses)
// Papai: Ciro Pires Santa Barbara  
// Mamãe: Cristiane Barbosa de Paula Oliveira

let familyDatabase = [
    {
        name: "Papai",
        guiResponse: "Você é o meu papai! 👨 O Ciro mais forte e corajoso do mundo! Te amo, papai! 💙",
        attributes: {
            genero: "masculino",
            idade: "adulto",
            parentesco: "pai",
            lado_familia: "nucleo",
            cidade: "sao-paulo",
            personalidade: "forte",
            trabalha: "sim",
            mora_aqui: "sim",
            cuida_de_mim: "sim",
            brinca_comigo: "sim",
            frequencia_visita: "sempre"
        }
    },
    {
        name: "Mamãe", 
        guiResponse: "Você é a minha mamãe! 👩 A Cristiane mais carinhosa do universo! Te amo muito, mamãe! 💕",
        attributes: {
            genero: "feminino",
            idade: "adulta", 
            parentesco: "mae",
            lado_familia: "nucleo",
            cidade: "sao-paulo",
            personalidade: "carinhosa",
            trabalha: "sim",
            mora_aqui: "sim",
            cuida_de_mim: "sim",
            brinca_comigo: "sim",
            frequencia_visita: "sempre"
        }
    },
    {
        name: "Vovô do Papai",
        guiResponse: "Você é meu vovô do lado do papai! 👴 Que saudade de Salvador! Quando você vem me visitar? 🌴💕",
        attributes: {
            genero: "masculino",
            idade: "idoso",
            parentesco: "avo",
            lado_familia: "paterno",
            cidade: "salvador",
            personalidade: "sabio",
            trabalha: "nao",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "sim",
            frequencia_visita: "pouco"
        }
    },
    {
        name: "Vovó do Papai",
        guiResponse: "Você é minha vovó do lado do papai! 👵 A vovó de Salvador que faz os melhores quitutes! 🍪💕",
        attributes: {
            genero: "feminino",
            idade: "idosa",
            parentesco: "avo",
            lado_familia: "paterno", 
            cidade: "salvador",
            personalidade: "doce",
            trabalha: "nao",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "sim",
            frequencia_visita: "pouco"
        }
    },
    {
        name: "Vovô da Mamãe",
        guiResponse: "Você é meu vovô do lado da mamãe! 👴 O vovô de Salvador que sempre me manda beijinhos! 😘💕",
        attributes: {
            genero: "masculino",
            idade: "idoso",
            parentesco: "avo",
            lado_familia: "materno",
            cidade: "salvador",
            personalidade: "carinhoso",
            trabalha: "nao",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "sim",
            frequencia_visita: "pouco"
        }
    },
    {
        name: "Vovó da Mamãe",
        guiResponse: "Você é minha vovó do lado da mamãe! 👵 A vovó mais especial de Salvador! Que saudade! 🌴💕",
        attributes: {
            genero: "feminino",
            idade: "idosa",
            parentesco: "avo",
            lado_familia: "materno",
            cidade: "salvador",
            personalidade: "especial",
            trabalha: "nao",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "sim",
            frequencia_visita: "pouco"
        }
    },
    {
        name: "Tio do Papai",
        guiResponse: "Você é meu tio do lado do papai! 👨 O tio de Salvador que sempre me faz rir nas videochamadas! 📱😄",
        attributes: {
            genero: "masculino",
            idade: "adulto",
            parentesco: "tio",
            lado_familia: "paterno",
            cidade: "salvador",
            personalidade: "engracado",
            trabalha: "sim",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "sim",
            frequencia_visita: "pouco"
        }
    },
    {
        name: "Tia do Papai",
        guiResponse: "Você é minha tia do lado do papai! 👩 A tia de Salvador que sempre pergunta como eu estou! 💕",
        attributes: {
            genero: "feminino",
            idade: "adulta",
            parentesco: "tia",
            lado_familia: "paterno",
            cidade: "salvador",
            personalidade: "cuidadosa",
            trabalha: "sim",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "sim",
            frequencia_visita: "pouco"
        }
    },
    {
        name: "Tio da Mamãe",
        guiResponse: "Você é meu tio do lado da mamãe! 👨 O tio de Salvador que manda fotos lindas da cidade! 📸🌴",
        attributes: {
            genero: "masculino",
            idade: "adulto",
            parentesco: "tio",
            lado_familia: "materno",
            cidade: "salvador",
            personalidade: "fotografo",
            trabalha: "sim",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "sim",
            frequencia_visita: "pouco"
        }
    },
    {
        name: "Tia da Mamãe",
        guiResponse: "Você é minha tia do lado da mamãe! 👩 A tia de Salvador que sempre liga para saber de mim! 📞💕",
        attributes: {
            genero: "feminino",
            idade: "adulta",
            parentesco: "tia",
            lado_familia: "materno",
            cidade: "salvador",
            personalidade: "atenciosa",
            trabalha: "sim",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "sim",
            frequencia_visita: "pouco"
        }
    },
    {
        name: "Amiga da Mamãe",
        guiResponse: "Você é uma amiga especial da minha mamãe! 👩‍🤝‍👩 Que bom que trabalham juntas e você me conhece! 💕",
        attributes: {
            genero: "feminino",
            idade: "adulta",
            parentesco: "amigo",
            lado_familia: "amigo",
            cidade: "sao-paulo",
            personalidade: "especial",
            trabalha: "sim",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "nao",
            frequencia_visita: "frequente"
        }
    },
    {
        name: "Amigo do Papai",
        guiResponse: "Você é um amigo querido do meu papai! 👨‍🤝‍👨 Que legal que você veio me conhecer! Meu papai tem amigos muito legais! 😊",
        attributes: {
            genero: "masculino",
            idade: "adulto",
            parentesco: "amigo",
            lado_familia: "amigo",
            cidade: "sao-paulo",
            personalidade: "legal",
            trabalha: "sim",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "nao",
            frequencia_visita: "frequente"
        }
    },
    {
        name: "Vovó Administradora",
        guiResponse: "Você é minha vovó especial! 👵 A vovó que criou este joguinho para mim e cuida de tudo! Te amo, vovó! 💕🎮",
        attributes: {
            genero: "feminino",
            idade: "idosa",
            parentesco: "avo",
            lado_familia: "especial",
            cidade: "sao-paulo",
            personalidade: "tecnologica",
            trabalha: "sim",
            mora_aqui: "nao",
            cuida_de_mim: "sim",
            brinca_comigo: "sim",
            frequencia_visita: "frequente"
        }
    }
];

// Perguntas otimizadas com novos atributos
const questions = [
    // Perguntas de divisão principal (lado da família)
    {
        text: "👨‍👩‍👧‍👦 Você é da família do meu papai (lado Pires Santa Barbara)?",
        attribute: "lado_familia",
        value: "paterno"
    },
    {
        text: "👩‍👧‍👦 Você é da família da minha mamãe (lado Barbosa de Paula)?",
        attribute: "lado_familia", 
        value: "materno"
    },
    {
        text: "🏠 Você faz parte do nosso núcleo familiar (papai, mamãe e eu)?",
        attribute: "lado_familia",
        value: "nucleo"
    },
    {
        text: "🤝 Você é amigo de alguém da minha família?",
        attribute: "lado_familia",
        value: "amigo"
    },
    
    // Perguntas de localização
    {
        text: "🏙️ Você mora em São Paulo como eu?",
        attribute: "cidade",
        value: "sao-paulo"
    },
    {
        text: "🌴 Você mora em Salvador?",
        attribute: "cidade",
        value: "salvador"
    },
    
    // Perguntas de gênero
    {
        text: "🚹 Você é do sexo masculino?",
        attribute: "genero",
        value: "masculino"
    },
    
    // Perguntas de parentesco
    {
        text: "👨‍👩‍👧‍👦 Você é meu papai ou minha mamãe?",
        attribute: "parentesco",
        value: "pai"
    },
    {
        text: "👴👵 Você é meu avô ou minha avó?",
        attribute: "parentesco",
        value: "avo"
    },
    {
        text: "👨‍👩‍👧‍👦 Você é meu tio ou minha tia?",
        attribute: "parentesco",
        value: "tio"
    },
    
    // Perguntas de idade
    {
        text: "👴👵 Você é uma pessoa idosa?",
        attribute: "idade",
        value: "idoso"
    },
    {
        text: "👨👩 Você é uma pessoa adulta?",
        attribute: "idade",
        value: "adulto"
    },
    
    // Perguntas de convivência
    {
        text: "🏠 Você mora na mesma casa que eu?",
        attribute: "mora_aqui",
        value: "sim"
    },
    {
        text: "👶 Você cuida de mim todos os dias?",
        attribute: "cuida_de_mim", 
        value: "sim"
    },
    {
        text: "💼 Você trabalha fora de casa?",
        attribute: "trabalha",
        value: "sim"
    },
    {
        text: "🎮 Você brinca comigo quando me vê?",
        attribute: "brinca_comigo",
        value: "sim"
    },
    
    // Perguntas de frequência
    {
        text: "🔄 Você me vê sempre ou quase todos os dias?",
        attribute: "frequencia_visita",
        value: "sempre"
    },
    {
        text: "✈️ Você mora longe e me visita poucas vezes?",
        attribute: "frequencia_visita",
        value: "pouco"
    },
    
    // Perguntas de personalidade específicas
    {
        text: "😄 Você é conhecido por ser muito engraçado?",
        attribute: "personalidade",
        value: "engracado"
    },
    {
        text: "💪 Você é conhecido por ser forte e corajoso?",
        attribute: "personalidade",
        value: "forte"
    },
    {
        text: "🤗 Você é conhecido por ser muito carinhoso?",
        attribute: "personalidade",
        value: "carinhosa"
    },
    {
        text: "🍪 Você é conhecido por fazer coisas deliciosas?",
        attribute: "personalidade",
        value: "doce"
    },
    {
        text: "📚 Você é conhecido por ser sábio e experiente?",
        attribute: "personalidade",
        value: "sabio"
    },
    {
        text: "🎮 Você é a pessoa que criou este joguinho para mim?",
        attribute: "personalidade",
        value: "tecnologica"
    }
];

// Estado do jogo (mantém a mesma estrutura)
let gameState = {
    currentQuestionIndex: 0,
    possiblePeople: [...familyDatabase],
    askedQuestions: [],
    userAnswers: {}
};

// Elementos DOM (mantém os mesmos)
const screens = {
    welcome: document.getElementById('welcome-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen'),
    success: document.getElementById('success-screen'),
    addPerson: document.getElementById('add-person-screen')
};

const elements = {
    startGame: document.getElementById('start-game'),
    questionText: document.getElementById('question-text'),
    currentQuestion: document.getElementById('current-question'),
    totalQuestions: document.getElementById('total-questions'),
    progressFill: document.querySelector('.progress-fill'),
    answerButtons: document.querySelectorAll('.answer-btn'),
    guessName: document.getElementById('guess-name'),
    guessDescription: document.getElementById('guess-description'),
    correctGuess: document.getElementById('correct-guess'),
    wrongGuess: document.getElementById('wrong-guess'),
    playAgain: document.getElementById('play-again'),
    addPerson: document.getElementById('add-person'),
    skipAdd: document.getElementById('skip-add'),
    personName: document.getElementById('person-name'),
    personDescription: document.getElementById('person-description')
};

// Funções utilitárias (mantém as mesmas)
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function resetGame() {
    gameState = {
        currentQuestionIndex: 0,
        possiblePeople: [...familyDatabase],
        askedQuestions: [],
        userAnswers: {}
    };
    elements.progressFill.style.width = '0%';
}

function updateProgress() {
    const progress = (gameState.currentQuestionIndex / Math.min(questions.length, 8)) * 100;
    elements.progressFill.style.width = `${Math.min(progress, 100)}%`;
    elements.currentQuestion.textContent = gameState.currentQuestionIndex + 1;
    elements.totalQuestions.textContent = Math.min(questions.length, 8);
}

// ALGORITMO MELHORADO: Seleção inteligente da próxima pergunta
function getNextQuestion() {
    // Se restam poucas pessoas, fazer pergunta mais específica
    if (gameState.possiblePeople.length <= 2) {
        return findMostSpecificQuestion();
    }
    
    // Encontrar a pergunta que melhor divide as possibilidades
    let bestQuestion = null;
    let bestScore = -1;

    for (let i = 0; i < questions.length; i++) {
        if (gameState.askedQuestions.includes(i)) continue;

        const question = questions[i];
        const yesCount = gameState.possiblePeople.filter(person => {
            const personValue = person.attributes[question.attribute];
            
            // Lógica especial para perguntas combinadas
            if (question.attribute === "parentesco" && question.value === "pai") {
                return personValue === "pai" || personValue === "mae";
            }
            if (question.attribute === "parentesco" && question.value === "tio") {
                return personValue === "tio" || personValue === "tia";
            }
            if (question.attribute === "parentesco" && question.value === "avo") {
                return personValue === "avo";
            }
            
            return personValue === question.value;
        }).length;
        
        const noCount = gameState.possiblePeople.length - yesCount;
        
        // Priorizar perguntas que dividem mais igualmente
        const score = Math.min(yesCount, noCount);
        
        // Bônus para perguntas de alto nível (lado da família, localização)
        let bonus = 0;
        if (question.attribute === "lado_familia") bonus = 2;
        if (question.attribute === "cidade") bonus = 1.5;
        if (question.attribute === "parentesco") bonus = 1;
        
        const finalScore = score + bonus;

        if (finalScore > bestScore) {
            bestScore = finalScore;
            bestQuestion = i;
        }
    }

    return bestQuestion;
}

// Função para encontrar pergunta mais específica quando restam poucas pessoas
function findMostSpecificQuestion() {
    for (let i = 0; i < questions.length; i++) {
        if (gameState.askedQuestions.includes(i)) continue;
        
        const question = questions[i];
        const matchingPeople = gameState.possiblePeople.filter(person => {
            return person.attributes[question.attribute] === question.value;
        });
        
        // Se a pergunta identifica exatamente uma pessoa, é perfeita
        if (matchingPeople.length === 1) {
            return i;
        }
    }
    
    // Se não encontrou pergunta específica, usar algoritmo normal
    return getNextQuestion();
}

function filterPeopleByAnswer(questionIndex, answer) {
    const question = questions[questionIndex];
    
    gameState.possiblePeople = gameState.possiblePeople.filter(person => {
        const personValue = person.attributes[question.attribute];
        
        switch (answer) {
            case 'sim':
                // Lógica especial para perguntas combinadas
                if (question.attribute === "parentesco" && question.value === "pai") {
                    return personValue === "pai" || personValue === "mae";
                }
                if (question.attribute === "parentesco" && question.value === "tio") {
                    return personValue === "tio" || personValue === "tia";
                }
                return personValue === question.value;
            
            case 'nao':
                if (question.attribute === "parentesco" && question.value === "pai") {
                    return personValue !== "pai" && personValue !== "mae";
                }
                if (question.attribute === "parentesco" && question.value === "tio") {
                    return personValue !== "tio" && personValue !== "tia";
                }
                return personValue !== question.value;
            
            case 'nao-sei':
            case 'provavelmente':
            case 'provavelmente-nao':
                // Para respostas incertas, mantemos todas as possibilidades
                return true;
            
            default:
                return true;
        }
    });
}

function makeGuess() {
    if (gameState.possiblePeople.length === 1) {
        return gameState.possiblePeople[0];
    } else if (gameState.possiblePeople.length > 1) {
        // Retorna a pessoa mais provável (primeira da lista)
        return gameState.possiblePeople[0];
    } else {
        // Nenhuma pessoa restante, retorna uma pessoa aleatória
        return familyDatabase[Math.floor(Math.random() * familyDatabase.length)];
    }
}

function askQuestion() {
    // Limitar a 6 perguntas para não cansar
    if (gameState.possiblePeople.length <= 1 || gameState.currentQuestionIndex >= 6) {
        showGuess();
        return;
    }

    const questionIndex = getNextQuestion();
    if (questionIndex === null) {
        showGuess();
        return;
    }

    gameState.askedQuestions.push(questionIndex);
    elements.questionText.textContent = questions[questionIndex].text;
    updateProgress();

    // Adicionar animação ao gênio
    const genie = document.querySelector('.genie');
    genie.classList.add('thinking');
    playThinkingSound();
    setTimeout(() => genie.classList.remove('thinking'), 1000);
}

function showGuess() {
    const guess = makeGuess();
    elements.guessName.textContent = guess.name;
    elements.guessDescription.textContent = guess.guiResponse;
    showScreen('result');

    // Animação do gênio animado
    const genie = document.querySelector('.genie');
    genie.classList.add('excited');
}

// Event Listeners (mantém os mesmos)
elements.startGame.addEventListener('click', () => {
    resetGame();
    showScreen('game');
    askQuestion();
});

elements.answerButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const answer = e.target.dataset.answer;
        const currentQuestionIndex = gameState.askedQuestions[gameState.askedQuestions.length - 1];
        
        gameState.userAnswers[currentQuestionIndex] = answer;
        filterPeopleByAnswer(currentQuestionIndex, answer);
        gameState.currentQuestionIndex++;
        
        // Adicionar efeito visual ao botão clicado
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = 'scale(1)';
        }, 150);
        
        setTimeout(() => {
            askQuestion();
        }, 500);
    });
});

elements.correctGuess.addEventListener('click', () => {
    playSuccessSound();
    addConfettiEffect();
    setTimeout(() => {
        showScreen('success');
    }, 500);
});

elements.wrongGuess.addEventListener('click', () => {
    showScreen('addPerson');
});

elements.playAgain.addEventListener('click', () => {
    showScreen('welcome');
});

// FUNÇÃO MELHORADA: Adicionar pessoa com novos atributos
elements.addPerson.addEventListener('click', () => {
    const name = elements.personName.value.trim();
    const description = elements.personDescription.value.trim();
    
    if (name && description) {
        // Criar nova pessoa baseada nas respostas
        const newPerson = createNewPersonFromAnswers(name, description, gameState.userAnswers);
        
        // Adicionar ao banco de dados (temporariamente)
        familyDatabase.push(newPerson);
        
        // Salvar no localStorage para persistir
        saveToLocalStorage(newPerson);
        
        alert(`Obrigado! Agora eu conheço ${name}! 🎉 Da próxima vez vou conseguir reconhecer!`);
        elements.personName.value = '';
        elements.personDescription.value = '';
        showScreen('welcome');
    } else {
        alert('Por favor, me conte o nome e como eu devo responder quando for essa pessoa! 😊');
    }
});

elements.skipAdd.addEventListener('click', () => {
    showScreen('welcome');
});

// FUNÇÃO MELHORADA: Criar pessoa com novos atributos
function createNewPersonFromAnswers(name, guiResponse, userAnswers) {
    const attributes = {
        genero: "nao-definido",
        idade: "nao-definido", 
        parentesco: "nao-definido",
        lado_familia: "nao-definido",
        cidade: "nao-definido",
        personalidade: "nao-definido",
        trabalha: "nao-definido",
        mora_aqui: "nao-definido",
        cuida_de_mim: "nao-definido",
        brinca_comigo: "nao-definido",
        frequencia_visita: "nao-definido"
    };
    
    // Analisar respostas para inferir atributos
    Object.keys(userAnswers).forEach(questionIndex => {
        const question = questions[questionIndex];
        const answer = userAnswers[questionIndex];
        
        if (answer === 'sim') {
            attributes[question.attribute] = question.value;
        } else if (answer === 'nao') {
            // Definir valores opostos quando necessário
            if (question.attribute === 'genero' && question.value === 'masculino') {
                attributes.genero = 'feminino';
            }
            if (question.attribute === 'cidade' && question.value === 'sao-paulo') {
                attributes.cidade = 'salvador';
            }
            if (question.attribute === 'lado_familia' && question.value === 'paterno') {
                attributes.lado_familia = 'materno';
            }
            // Adicionar mais lógica conforme necessário
        }
    });
    
    return {
        name: name,
        guiResponse: guiResponse,
        attributes: attributes,
        addedBy: 'user',
        dateAdded: new Date().toISOString()
    };
}

// Funções de localStorage (mantém as mesmas)
function saveToLocalStorage(newPerson) {
    try {
        const savedPeople = JSON.parse(localStorage.getItem('guiFamilyMembers') || '[]');
        savedPeople.push(newPerson);
        localStorage.setItem('guiFamilyMembers', JSON.stringify(savedPeople));
    } catch (e) {
        console.log('Erro ao salvar no localStorage:', e);
    }
}

function loadFromLocalStorage() {
    try {
        const savedPeople = JSON.parse(localStorage.getItem('guiFamilyMembers') || '[]');
        familyDatabase = [...familyDatabase, ...savedPeople];
    } catch (e) {
        console.log('Erro ao carregar do localStorage:', e);
    }
}

// Funções de animação e efeitos (mantém as mesmas)
function addSparkleEffect(element) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
    sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

function addConfettiEffect() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = 'confettiFall 3s linear forwards';
            confetti.style.zIndex = '1000';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

function shakeElement(element) {
    element.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

function pulseElement(element) {
    element.style.animation = 'pulse 0.6s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 600);
}

// Adicionar sons (usando Web Audio API para sons simples)
function playSound(frequency, duration) {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    } catch (e) {
        // Silenciosamente ignora erros de áudio
    }
}

function playClickSound() {
    playSound(800, 0.1);
}

function playSuccessSound() {
    playSound(523, 0.2);
    setTimeout(() => playSound(659, 0.2), 100);
    setTimeout(() => playSound(784, 0.3), 200);
}

function playThinkingSound() {
    playSound(400, 0.1);
    setTimeout(() => playSound(450, 0.1), 150);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Carregar pessoas salvas anteriormente
    loadFromLocalStorage();
    
    showScreen('welcome');
    
    // Adicionar animações aos olhos do gênio
    setInterval(() => {
        const eyes = document.querySelectorAll('.eye');
        eyes.forEach(eye => {
            eye.style.transform = 'scaleY(0.1)';
            setTimeout(() => {
                eye.style.transform = 'scaleY(1)';
            }, 150);
        });
    }, 3000);
    
    // Adicionar efeitos de hover aos botões
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            addSparkleEffect(button);
        });
        
        button.addEventListener('click', () => {
            playClickSound();
            pulseElement(button);
        });
    });
    
    // Adicionar movimento dos olhos do gênio seguindo o mouse
    document.addEventListener('mousemove', (e) => {
        const eyes = document.querySelectorAll('.eye');
        eyes.forEach(eye => {
            const rect = eye.getBoundingClientRect();
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;
            
            const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
            const distance = Math.min(3, Math.sqrt(Math.pow(e.clientX - eyeCenterX, 2) + Math.pow(e.clientY - eyeCenterY, 2)) / 10);
            
            const pupilX = Math.cos(angle) * distance;
            const pupilY = Math.sin(angle) * distance;
            
            eye.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });
    });
    
    // Adicionar efeito de digitação para o título
    const title = document.querySelector('.title');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
    
    // Adicionar partículas flutuantes
    setInterval(() => {
        const particle = document.createElement('div');
        particle.innerHTML = ['🎈', '🎉', '⭐', '💫', '🌟'][Math.floor(Math.random() * 5)];
        particle.style.position = 'fixed';
        particle.style.fontSize = '20px';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.animation = 'floatUp 8s linear forwards';
        particle.style.zIndex = '1';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }, 2000);
});
