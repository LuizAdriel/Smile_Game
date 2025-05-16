<script>
    let cartaCerta = Math.floor(Math.random() * 5);

    function verifica(elemento) {
        let idEscolhido = parseInt(elemento.id);
        const resposta = document.getElementById("resposta");

        if (idEscolhido === cartaCerta) {
            elemento.classList.add("correta");
            elemento.innerHTML = "😊";
            resposta.innerHTML = "🎉 Acertou! O Smile estava aqui!";
        } else {
            elemento.classList.add("errada");
            elemento.innerHTML = "💩";
            document.getElementById(cartaCerta.toString()).innerHTML = "😊";
            document.getElementById(cartaCerta.toString()).classList.add("correta");
            resposta.innerHTML = `💩 Errou! O Smile estava na carta ${cartaCerta}`;
        }

        // Desabilita todos os cliques após tentativa
        for (let i = 0; i < 5; i++) {
            document.getElementById(i.toString()).onclick = null;
        }
    }

    document.getElementById("joganovamente").onclick = () => location.reload();
</script>
