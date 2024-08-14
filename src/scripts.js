const player = document.getElementById('player');
let playerX = 180; // posição inicial do jogador
let playerY = 0; // posição inicial do jogador
let isJumping = false;
let velocityY = 0; // velocidade vertical
const gravity = 0.8; // força da gravidade
const jumpStrength = -15; // força do pulo

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
        case ' ':
            if (!isJumping) {
                jump();
            }
            break;
    }
});

function moveLeft() {
    if (playerX > 0) {
        playerX -= 20;
        player.style.left = `${playerX}px`;
    }
}

function moveRight() {
    if (playerX < 360) { // largura do container - largura do player
        playerX += 20;
        player.style.left = `${playerX}px`;
    }
}

function jump() {
    // Função básica de pulo
    playerY += 100;
    player.style.bottom = `${playerY}px`;

    // Simulação de queda
    setTimeout(() => {
        playerY -= 100;
        player.style.bottom = `${playerY}px`;
    }, 500);
}
  
function update() {
    if (isJumping) {
        velocityY += gravity;
        playerY -= velocityY;

        // Impedir que o jogador atravesse o chão
        if (playerY > 0) {
            playerY = 0;
            isJumping = false;
            velocityY = 0;
        }

        player.style.bottom = `${playerY}px`;
    }

    requestAnimationFrame(update);
}

// Iniciar a função de atualização
update();
