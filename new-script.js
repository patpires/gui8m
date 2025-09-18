// Banco de dados de pessoas da família - NOVA VERSÃO
// Agora o jogo tenta adivinhar QUEM ESTÁ JOGANDO!
let familyDatabase = [
    {
        name: "Papai",
        guiResponse: "Você é o meu papai! 👨 O homem mais forte e corajoso que eu conheço! Te amo, papai! 💙",
        attributes: {
            genero: "masculino",
            idade: "adulto",
            parentesco: "pai",
            personalidade: "forte",
            trabalha: "sim",
            mora_aqui: "sim",
            cuida_de_mim: "sim",
            brinca_comigo: "sim"
        }
    },
    {
        name: "Mamãe", 
        guiResponse: "Você é a minha mamãe! 👩 A pessoa mais carinhosa do mundo inteiro! Te amo muito, mamãe! 💕",
        attributes: {
            genero: "feminino",
            idade: "adulta", 
            parentesco: "mae",
            personalidade: "carinhosa",
            trabalha: "sim",
            mora_aqui: "sim",
            cuida_de_mim: "sim",
            brinca_comigo: "sim"
        }
    },
    {
        name: "Vovô",
        guiResponse: "Você é o meu vovô! 👴 O contador de histórias mais divertido! Conta uma história pra mim, vovô! 📚✨",
        attributes: {
            genero: "masculino",
            idade: "idoso",
            parentesco: "avo",
            personalidade: "sabio",
            trabalha: "nao",
            mora_aqui: "sim",
            cuida_de_mim: "sim",
            brinca_comigo: "sim"
        }
    },
    {
        name: "Vovó",
        guiResponse: "Você é a minha vovó! 👵 A cozinheira mais talentosa da família! Seus docinhos são os melhores! 🍪💕",
        attributes: {
            genero: "feminino",
            idade: "idosa",
            parentesco: "avo", 
            personalidade: "doce",
            trabalha: "nao",
            mora_aqui: "sim",
            cuida_de_mim: "sim",
            brinca_comigo: "sim"
        }
    },
    {
        name: "Tio Carlos",
        guiResponse: "Você é o meu tio Carlos! 👨 O tio mais engraçado que sempre me faz rir! Conta uma piada, tio! 😄",
        attributes: {
            genero: "masculino",
            idade: "adulto",
            parentesco: "tio",
            personalidade: "engracado",
            trabalha: "sim",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "sim"
        }
    },
    {
        name: "Tia Ana",
        guiResponse: "Você é a minha tia Ana! 👩 A tia artista que faz desenhos lindos! Faz um desenho pra mim, tia! 🎨",
        attributes: {
            genero: "feminino",
            idade: "adulta",
            parentesco: "tia",
            personalidade: "artistica",
            trabalha: "sim",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "sim"
        }
    },
    {
        name: "Amigo do Papai",
        guiResponse: "Você é um amigo querido do meu papai! 👨‍🤝‍👨 Que legal que você veio brincar comigo! Meu papai tem amigos muito legais! 😊",
        attributes: {
            genero: "masculino",
            idade: "adulto",
            parentesco: "amigo",
            personalidade: "legal",
            trabalha: "sim",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "nao"
        }
    },
    {
        name: "Amiga da Mamãe",
        guiResponse: "Você é uma amiga especial da minha mamãe! 👩‍🤝‍👩 Que bom que você está aqui! Minha mamãe sempre fala bem de você! 💕",
        attributes: {
            genero: "feminino",
            idade: "adulta",
            parentesco: "amigo",
            personalidade: "especial",
            trabalha: "sim",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "nao"
        }
    },
    {
        name: "Amigo do Vovô",
        guiResponse: "Você é um amigo do meu vovô! 👴‍🤝‍👴 Vocês devem ter muitas histórias pra contar juntos! Que divertido! 📖",
        attributes: {
            genero: "masculino",
            idade: "idoso",
            parentesco: "amigo",
            personalidade: "experiente",
            trabalha: "nao",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "nao"
        }
    },
    {
        name: "Amiga da Vovó",
        guiResponse: "Você é uma amiga querida da minha vovó! 👵‍🤝‍👵 Aposto que vocês cozinham coisas deliciosas juntas! 🍰",
        attributes: {
            genero: "feminino",
            idade: "idosa",
            parentesco: "amigo",
            personalidade: "querida",
            trabalha: "nao",
            mora_aqui: "nao",
            cuida_de_mim: "nao",
            brinca_comigo: "nao"
        }
    }
];

// Perguntas adaptadas para descobrir QUEM ESTÁ JOGANDO
const questions = [
    {
        text: "🚹🚺 Você é do sexo masculino?",
        attribute: "genero",
        value: "masculino"
    },
    {
        text: "👶 Você cuida de mim todos os dias?",
        attribute: "cuida_de_mim", 
        value: "sim"
    },
    {
        text: "🏠 Você mora na mesma casa que eu?",
        attribute: "mora_aqui",
        value: "sim"
    },
    {
        text: "💼 Você trabalha fora de casa?",
        attribute: "trabalha",
        value: "sim"
    },
    {
        text: "👨‍👩‍👧‍👦 Você é meu papai ou minha mamãe?",
        attribute: "parentesco",
        value: "pai"
    },
    {
        text: "👴👵 Você é meu vovô ou minha vovó?",
        attribute: "parentesco",
        value: "avo"
    },
    {
        text: "👨‍👩‍👧‍👦 Você é meu tio ou minha tia?",
        attribute: "parentesco",
        value: "tio"
    },
    {
        text: "🤝 Você é amigo de alguém da minha família?",
        attribute: "parentesco",
        value: "amigo"
    },
    {
        text: "🎮 Você brinca comigo quando está aqui?",
        attribute: "brinca_comigo",
        value: "sim"
    },
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
        text: "🎨 Você gosta de fazer coisas artísticas?",
        attribute: "personalidade",
        value: "artistica"
    },
    {
        text: "🍪 Você é conhecido por cozinhar coisas deliciosas?",
        attribute: "personalidade",
        value: "doce"
    },
    {
        text: "📚 Você gosta de contar histórias?",
        attribute: "personalidade",
        value: "sabio"
    },
    {
        text: "👶 Você é uma pessoa mais velha (idosa)?",
        attribute: "idade",
        value: "idoso"
    },
    {
        text: "👨👩 Você é uma pessoa adulta?",
        attribute: "idade",
        value: "adulto"
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
    const progress = (gameState.currentQuestionIndex / questions.length) * 100;
    elements.progressFill.style.width = `${Math.min(progress, 100)}%`;
    elements.currentQuestion.textContent = gameState.currentQuestionIndex + 1;
    elements.totalQuestions.textContent = questions.length;
}

function getNextQuestion() {
    // Encontrar a pergunta que melhor divide as possibilidades restantes
    let bestQuestion = null;
    let bestScore = -1;

    for (let i = 0; i < questions.length; i++) {
        if (gameState.askedQuestions.includes(i)) continue;

        const question = questions[i];
        const yesCount = gameState.possiblePeople.filter(person => 
            person.attributes[question.attribute] === question.value ||
            (question.attribute === "parentesco" && question.value === "pai" && 
             (person.attributes[question.attribute] === "pai" || person.attributes[question.attribute] === "mae"))
        ).length;
        
        const noCount = gameState.possiblePeople.length - yesCount;
        const score = Math.min(yesCount, noCount);

        if (score > bestScore) {
            bestScore = score;
            bestQuestion = i;
        }
    }

    return bestQuestion;
}

function filterPeopleByAnswer(questionIndex, answer) {
    const question = questions[questionIndex];
    
    gameState.possiblePeople = gameState.possiblePeople.filter(person => {
        const personValue = person.attributes[question.attribute];
        
        switch (answer) {
            case 'sim':
                if (question.attribute === "parentesco" && question.value === "pai") {
                    return personValue === "pai" || personValue === "mae";
                }
                return personValue === question.value;
            
            case 'nao':
                if (question.attribute === "parentesco" && question.value === "pai") {
                    return personValue !== "pai" && personValue !== "mae";
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
    if (gameState.possiblePeople.length <= 1 || gameState.currentQuestionIndex >= questions.length) {
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
    elements.guessDescription.textContent = guess.guiResponse; // NOVA: Usa a resposta personalizada do Gui
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

// NOVA FUNÇÃO: Adicionar pessoa com sistema melhorado
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

// NOVA FUNÇÃO: Criar pessoa baseada nas respostas
function createNewPersonFromAnswers(name, guiResponse, userAnswers) {
    const attributes = {
        genero: "nao-definido",
        idade: "nao-definido", 
        parentesco: "nao-definido",
        personalidade: "nao-definido",
        trabalha: "nao-definido",
        mora_aqui: "nao-definido",
        cuida_de_mim: "nao-definido",
        brinca_comigo: "nao-definido"
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

// NOVA FUNÇÃO: Salvar no localStorage
function saveToLocalStorage(newPerson) {
    try {
        const savedPeople = JSON.parse(localStorage.getItem('guiFamilyMembers') || '[]');
        savedPeople.push(newPerson);
        localStorage.setItem('guiFamilyMembers', JSON.stringify(savedPeople));
    } catch (e) {
        console.log('Erro ao salvar no localStorage:', e);
    }
}

// NOVA FUNÇÃO: Carregar do localStorage
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
