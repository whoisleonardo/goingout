function nextPage() {
    window.location.href = 'sim.html';
}

function moverButton() {
    const noButton = document.getElementById('naoButton');
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
    
    noButton.style.transition = 'all 0.3s ease';
}
