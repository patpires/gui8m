// Banco de dados da família Barbosa Pires Santa Bárbara - VERSÃO CORRIGIDA
// Gui: Guilherme Barbosa Pires Santa Bárbara (8 meses)
// Papai: Ciro Pires Santa Barbara  
// Mamãe: Cristiane Barbosa de Paula Oliveira

(function() {
    'use strict';
    
    // Verificar se o DOM está carregado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeGame);
    } else {
        initializeGame();
    }
    
    function initializeGame() {
        console.log('Inicializando jogo...');
        
        // Banco de dados da família
        window.familyDatabase = [
            {
                name: "Papai",
                guiResponse: "Você é o meu papai! O Ciro mais forte e corajoso do mundo! Te amo, papai!",
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
                guiResponse: "Você é a minha mamãe! A Cristiane mais carinhosa do universo! Te amo muito, mamãe!",
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
                guiResponse: "Você é meu vovô do lado do papai! Que saudade de Salvador! Quando você vem me visitar?",
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
                guiResponse: "Você é minha vovó do lado do papai! A vovó de Salvador que faz os melhores quitutes!",
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
                guiResponse: "Você é meu vovô do lado da mamãe! O vovô de Salvador que sempre me manda beijinhos!",
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
                guiResponse: "Você é minha vovó do lado da mamãe! A vovó mais especial de Salvador! Que saudade!",
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
                guiResponse: "Você é meu tio do lado do papai! O tio de Salvador que sempre me faz rir nas videochamadas!",
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
                guiResponse: "Você é minha tia do lado do papai! A tia de Salvador que sempre pergunta como eu estou!",
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
                guiResponse: "Você é meu tio do lado da mamãe! O tio de Salvador que manda fotos lindas da cidade!",
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
                guiResponse: "Você é minha tia do lado da mamãe! A tia de Salvador que sempre liga para saber de mim!",
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
                guiResponse: "Você é uma amiga especial da minha mamãe! Que bom que trabalham juntas e você me conhece!",
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
                guiResponse: "Você é um amigo querido do meu papai! Que legal que você veio me conhecer! Meu papai tem amigos muito legais!",
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
                guiResponse: "Você é minha vovó especial! A vovó que criou este joguinho para mim e cuida de tudo! Te amo, vovó!",
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

        // Perguntas otimizadas
        window.questions = [
            {
                text: "Você é da família do meu papai (lado Pires Santa Barbara)?",
                attribute: "lado_familia",
                value: "paterno"
            },
            {
                text: "Você é da família da minha mamãe (lado Barbosa de Paula)?",
                attribute: "lado_familia", 
                value: "materno"
            },
            {
                text: "Você faz parte do nosso núcleo familiar (papai, mamãe e eu)?",
                attribute: "lado_familia",
                value: "nucleo"
            },
            {
                text: "Você é amigo de alguém da minha família?",
                attribute: "lado_familia",
                value: "amigo"
            },
            {
                text: "Você mora em São Paulo como eu?",
                attribute: "cidade",
                value: "sao-paulo"
            },
            {
                text: "Você mora em Salvador?",
                attribute: "cidade",
                value: "salvador"
            },
            {
                text: "Você é do sexo masculino?",
                attribute: "genero",
                value: "masculino"
            },
            {
                text: "Você é meu papai ou minha mamãe?",
                attribute: "parentesco",
                value: "pai"
            },
            {
                text: "Você é meu avô ou minha avó?",
                attribute: "parentesco",
                value: "avo"
            },
            {
                text: "Você é meu tio ou minha tia?",
                attribute: "parentesco",
                value: "tio"
            },
            {
                text: "Você é uma pessoa idosa?",
                attribute: "idade",
                value: "idoso"
            },
            {
                text: "Você é uma pessoa adulta?",
                attribute: "idade",
                value: "adulto"
            },
            {
                text: "Você mora na mesma casa que eu?",
                attribute: "mora_aqui",
                value: "sim"
            },
            {
                text: "Você cuida de mim todos os dias?",
                attribute: "cuida_de_mim", 
                value: "sim"
            },
            {
                text: "Você trabalha fora de casa?",
                attribute: "trabalha",
                value: "sim"
            },
            {
                text: "Você brinca comigo quando me vê?",
                attribute: "brinca_comigo",
                value: "sim"
            },
            {
                text: "Você me vê sempre ou quase todos os dias?",
                attribute: "frequencia_visita",
                value: "sempre"
            },
            {
                text: "Você mora longe e me visita poucas vezes?",
                attribute: "frequencia_visita",
                value: "pouco"
            },
            {
                text: "Você é conhecido por ser muito engraçado?",
                attribute: "personalidade",
                value: "engracado"
            },
            {
                text: "Você é conhecido por ser forte e corajoso?",
                attribute: "personalidade",
                value: "forte"
            },
            {
                text: "Você é conhecido por ser muito carinhoso?",
                attribute: "personalidade",
                value: "carinhosa"
            },
            {
                text: "Você é conhecido por fazer coisas deliciosas?",
                attribute: "personalidade",
                value: "doce"
            },
            {
                text: "Você é conhecido por ser sábio e experiente?",
                attribute: "personalidade",
                value: "sabio"
            },
            {
                text: "Você é a pessoa que criou este joguinho para mim?",
                attribute: "personalidade",
                value: "tecnologica"
            }
        ];

        // Estado do jogo
        window.gameState = {
            currentQuestionIndex: 0,
            possiblePeople: [...window.familyDatabase],
            askedQuestions: [],
            userAnswers: {}
        };

        // Elementos DOM
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

        // Verificar se todos os elementos existem
        let missingElements = [];
        Object.keys(elements).forEach(key => {
            if (!elements[key]) {
                missingElements.push(key);
            }
        });
        
        if (missingElements.length > 0) {
            console.error('Elementos não encontrados:', missingElements);
            return;
        }

        // Funções do jogo
        function showScreen(screenName) {
            Object.values(screens).forEach(screen => {
                if (screen) screen.classList.remove('active');
            });
            if (screens[screenName]) {
                screens[screenName].classList.add('active');
            }
        }

        function resetGame() {
            window.gameState = {
                currentQuestionIndex: 0,
                possiblePeople: [...window.familyDatabase],
                askedQuestions: [],
                userAnswers: {}
            };
            if (elements.progressFill) {
                elements.progressFill.style.width = '0%';
            }
        }

        function updateProgress() {
            const progress = (window.gameState.currentQuestionIndex / Math.min(window.questions.length, 8)) * 100;
            if (elements.progressFill) {
                elements.progressFill.style.width = Math.min(progress, 100) + '%';
            }
            if (elements.currentQuestion) {
                elements.currentQuestion.textContent = window.gameState.currentQuestionIndex + 1;
            }
            if (elements.totalQuestions) {
                elements.totalQuestions.textContent = Math.min(window.questions.length, 8);
            }
        }

        function getNextQuestion() {
            if (window.gameState.possiblePeople.length <= 2) {
                return findMostSpecificQuestion();
            }
            
            let bestQuestion = null;
            let bestScore = -1;

            for (let i = 0; i < window.questions.length; i++) {
                if (window.gameState.askedQuestions.includes(i)) continue;

                const question = window.questions[i];
                const yesCount = window.gameState.possiblePeople.filter(person => {
                    const personValue = person.attributes[question.attribute];
                    
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
                
                const noCount = window.gameState.possiblePeople.length - yesCount;
                const score = Math.min(yesCount, noCount);
                
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

        function findMostSpecificQuestion() {
            for (let i = 0; i < window.questions.length; i++) {
                if (window.gameState.askedQuestions.includes(i)) continue;
                
                const question = window.questions[i];
                const matchingPeople = window.gameState.possiblePeople.filter(person => {
                    return person.attributes[question.attribute] === question.value;
                });
                
                if (matchingPeople.length === 1) {
                    return i;
                }
            }
            
            return getNextQuestion();
        }

        function filterPeopleByAnswer(questionIndex, answer) {
            const question = window.questions[questionIndex];
            
            window.gameState.possiblePeople = window.gameState.possiblePeople.filter(person => {
                const personValue = person.attributes[question.attribute];
                
                switch (answer) {
                    case 'sim':
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
                        return true;
                    
                    default:
                        return true;
                }
            });
        }

        function makeGuess() {
            if (window.gameState.possiblePeople.length === 1) {
                return window.gameState.possiblePeople[0];
            } else if (window.gameState.possiblePeople.length > 1) {
                return window.gameState.possiblePeople[0];
            } else {
                return window.familyDatabase[Math.floor(Math.random() * window.familyDatabase.length)];
            }
        }

        function askQuestion() {
            if (window.gameState.possiblePeople.length <= 1 || window.gameState.currentQuestionIndex >= 6) {
                showGuess();
                return;
            }

            const questionIndex = getNextQuestion();
            if (questionIndex === null) {
                showGuess();
                return;
            }

            window.gameState.askedQuestions.push(questionIndex);
            if (elements.questionText) {
                elements.questionText.textContent = window.questions[questionIndex].text;
            }
            updateProgress();

            // Adicionar animação ao gênio
            const genie = document.querySelector('.genie');
            if (genie) {
                genie.classList.add('thinking');
                setTimeout(() => genie.classList.remove('thinking'), 1000);
            }
        }

        function showGuess() {
            const guess = makeGuess();
            if (elements.guessName) {
                elements.guessName.textContent = guess.name;
            }
            if (elements.guessDescription) {
                elements.guessDescription.textContent = guess.guiResponse;
            }
            showScreen('result');

            const genie = document.querySelector('.genie');
            if (genie) {
                genie.classList.add('excited');
            }
        }

        // Event Listeners
        if (elements.startGame) {
            elements.startGame.addEventListener('click', () => {
                resetGame();
                showScreen('game');
                askQuestion();
            });
        }

        elements.answerButtons.forEach(button => {
            if (button) {
                button.addEventListener('click', (e) => {
                    const answer = e.target.dataset.answer;
                    const currentQuestionIndex = window.gameState.askedQuestions[window.gameState.askedQuestions.length - 1];
                    
                    window.gameState.userAnswers[currentQuestionIndex] = answer;
                    filterPeopleByAnswer(currentQuestionIndex, answer);
                    window.gameState.currentQuestionIndex++;
                    
                    e.target.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        e.target.style.transform = 'scale(1)';
                    }, 150);
                    
                    setTimeout(() => {
                        askQuestion();
                    }, 500);
                });
            }
        });

        if (elements.correctGuess) {
            elements.correctGuess.addEventListener('click', () => {
                setTimeout(() => {
                    showScreen('success');
                }, 500);
            });
        }

        if (elements.wrongGuess) {
            elements.wrongGuess.addEventListener('click', () => {
                showScreen('addPerson');
            });
        }

        if (elements.playAgain) {
            elements.playAgain.addEventListener('click', () => {
                showScreen('welcome');
            });
        }

        if (elements.addPerson) {
            elements.addPerson.addEventListener('click', () => {
                const name = elements.personName ? elements.personName.value.trim() : '';
                const description = elements.personDescription ? elements.personDescription.value.trim() : '';
                
                if (name && description) {
                    const newPerson = {
                        name: name,
                        guiResponse: description,
                        attributes: {
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
                        },
                        addedBy: 'user',
                        dateAdded: new Date().toISOString()
                    };
                    
                    window.familyDatabase.push(newPerson);
                    
                    try {
                        const savedPeople = JSON.parse(localStorage.getItem('guiFamilyMembers') || '[]');
                        savedPeople.push(newPerson);
                        localStorage.setItem('guiFamilyMembers', JSON.stringify(savedPeople));
                    } catch (e) {
                        console.log('Erro ao salvar:', e);
                    }
                    
                    alert('Obrigado! Agora eu conheço ' + name + '! Da próxima vez vou conseguir reconhecer!');
                    if (elements.personName) elements.personName.value = '';
                    if (elements.personDescription) elements.personDescription.value = '';
                    showScreen('welcome');
                } else {
                    alert('Por favor, me conte o nome e como eu devo responder quando for essa pessoa!');
                }
            });
        }

        if (elements.skipAdd) {
            elements.skipAdd.addEventListener('click', () => {
                showScreen('welcome');
            });
        }

        // Carregar dados salvos
        try {
            const savedPeople = JSON.parse(localStorage.getItem('guiFamilyMembers') || '[]');
            window.familyDatabase = [...window.familyDatabase, ...savedPeople];
        } catch (e) {
            console.log('Erro ao carregar dados salvos:', e);
        }
        
        // Inicializar tela
        showScreen('welcome');
        
        console.log('Jogo inicializado com sucesso!');
    }
})();
