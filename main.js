document.addEventListener("DOMContentLoaded", () => {
    const readBtn = document.getElementById("read-btn");
    const readBtn2 = document.getElementById("read-btn2");
    const card = document.querySelector(".card");
    const cardBack = document.querySelector(".card-back");
    const face = document.querySelector('.face');
  
    function toggleCards() {
      face.classList.toggle('active');
      card.classList.toggle('active');
      cardBack.classList.toggle('active');
  
      if (face.classList.contains('active')) {
        readBtn.textContent = 'Voltar';
        readBtn2.textContent = 'Voltar';
      } else {
        readBtn.textContent = 'Saiba Mais';
        readBtn2.textContent = 'Saiba Mais';
      }
    }
  
    readBtn.addEventListener("click", toggleCards);
    readBtn2.addEventListener("click", toggleCards);
  });
  