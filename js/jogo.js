document.addEventListener('DOMContentLoaded', () => {
    const cartaCerta = Math.floor(Math.random() * 5); // Agora temos 5 cartas
    let jogoAtivo = true;
  
    function criaCarta(id) {
      const container = document.createElement('div');
      container.classList.add('carta-container');
      container.onclick = () => verifica(container, id);
  
      const carta = document.createElement('div');
      carta.id = `carta-${id}`;
      carta.classList.add('carta');
  
      const frente = document.createElement('div');
      frente.classList.add('lado', 'frente');
  
      const verso = document.createElement('div');
      verso.classList.add('lado', 'verso');
      verso.innerHTML = '❓';
  
      carta.appendChild(frente);
      carta.appendChild(verso);
      container.appendChild(carta);
  
      return container;
    }
  
    function verifica(container, id) {
      if (!jogoAtivo) return;
  
      const carta = container.querySelector('.carta');
      const verso = carta.querySelector('.verso');
  
      if (id === cartaCerta) {
        verso.innerHTML = '😊';
        verso.classList.remove("erro");
      } else {
        verso.innerHTML = '💩';
        verso.classList.add("erro");
  
        const cartaCorreta = document.getElementById("carta-" + cartaCerta);
        cartaCorreta.classList.add("virada");
        cartaCorreta.querySelector('.verso').innerHTML = '😊';
        cartaCorreta.querySelector('.verso').classList.remove("erro");
      }
  
      carta.classList.add("virada");
      jogoAtivo = false;
    }
  
    const cartasDiv = document.getElementById('cartas');
    for (let i = 0; i < 5; i++) {
      cartasDiv.appendChild(criaCarta(i));
    }
  
    document.getElementById("jogar-novamente").onclick = () => location.reload();
  });
  