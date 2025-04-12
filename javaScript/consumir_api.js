
function consumoAPI() {
    const id = localStorage.getItem('selectedId');
    if (!id) {
        console.error('Nenhum ID selecionado. Volte à página de busca.');
        return;
    }
    fetch('https://rickandmortyapi.com/api/character/'+id) //requere a api
        .then(response => response.json()) //transforma em json
        .then(data => {
            const tabela = document.getElementById('Rick2');
            tabela.innerHTML = ' '; //limpa a tabela antes de preencher
            const linha = ` <tr>
                <td><img src="${data.image}"></td>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.species}</td>
                <td>${data.type}</td>
                <td>${data.gender}</td>
                </tr> `;
            tabela.innerHTML = linha;

        })
        .catch(error => console.log('Erro ao consumir a API: ' + error));
}