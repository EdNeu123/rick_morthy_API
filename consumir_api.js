function consumoAPI() {
    fetch('https://rickandmortyapi.com/api/character/'+Math.floor(Math.random() * 826)) //requere a api
        .then(response => response.json()) //transforma em json
        .then(data => {
            const tabela = document.getElementById('fact');
            tabela.innerHTML = ' '; //limpa a tabela antes de preencher
            const linha = ` <tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.species}</td>
                <td>${data.type}</td>
                </tr> `;
            tabela.innerHTML = linha;

        })
        .catch(error => console.log('Erro ao consumir a API: ' + error));
}