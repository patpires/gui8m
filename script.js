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

