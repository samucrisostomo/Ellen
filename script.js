const movingButton = document.getElementById('movingButton');

// Adiciona um evento de mouseover para mover o botão quando o cursor passa por cima
movingButton.addEventListener('mouseover', () => {
    // Obtém a largura e altura da janela do navegador
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Gera novas posições aleatórias dentro dos limites da janela
    const randomX = Math.random() * (windowWidth - movingButton.offsetWidth);
    const randomY = Math.random() * (windowHeight - movingButton.offsetHeight);

    // Aplica as novas posições ao botão "NÃO"
    movingButton.style.position = 'absolute';
    movingButton.style.left = `${randomX}px`;
    movingButton.style.top = `${randomY}px`;
});


document.getElementById('movingButton').addEventListener('click', function() {
    // Obter a largura e altura da janela
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Gerar posição aleatória
    let randomX = Math.random() * (windowWidth - this.offsetWidth);
    let randomY = Math.random() * (windowHeight - this.offsetHeight);


    // Aplicar a nova posição ao botão
    this.style.position = 'absolute';  // Certifique-se que o botão esteja posicionado de forma absoluta
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});


const button2 = document.getElementById('redirectButton');

button2.addEventListener('click', () => {
    window.location.href = 'https://www.tiktok.com/@2jin__/video/7186794110949379333?lang=pt-BR&q=te%20amo%20meme&t=1724976239767';
});