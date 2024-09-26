document.addEventListener("DOMContentLoaded", () => {
    const btnSaibaMais = document.getElementById("btn-saiba-mais");
    const btnVoltar = document.getElementById("btn-voltar");
    const card = document.querySelector(".card");
    const cardBack = document.querySelector(".card-back");
    const face = document.querySelector('.face');
  
    function toggleCards() {
        face.classList.toggle('active');
        card.classList.toggle('active');
        cardBack.classList.toggle('active');
    
        // Verifica qual cartão está ativo e ajusta o display
        if (face.classList.contains('active')) {
            card.style.display = 'none';      // Esconde o card da frente
            cardBack.style.display = 'flex';  // Mostra o card de trás
        } else {
            card.style.display = 'flex';      // Mostra o card da frente
            cardBack.style.display = 'none';  // Esconde o card de trás
        }
    
        // Atualiza o texto dos botões
        buttons.forEach(button => {
            if (face.classList.contains('active')) {
                button.textContent = 'Voltar';
            } else {
                button.textContent = 'Saiba Mais';
            }
        });
    }    
  
    // Event listeners para os dois botões
    btnSaibaMais.addEventListener("click", toggleCards);
    btnVoltar.addEventListener("click", toggleCards);
  });
  
  
