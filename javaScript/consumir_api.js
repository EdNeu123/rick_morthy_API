
function consumoAPI() {
    const id = localStorage.getItem('selectedId');
    if (!id) {
        alert('Nenhum ID selecionado. Volte à página de busca.');
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
                <td>${data.name  || 'Sem Informação'}</td>
                <td>${data.species  || 'Sem Informação'}</td>
                <td>${data.type  || 'Sem Informação'}</td>
                <td>${data.gender  || 'Sem Informação'}</td>
                <td>${data.location.name  || 'Sem Informação'}</td>
                </tr> `;
            tabela.innerHTML = linha;

        })
        .catch(error => console.log('Erro ao consumir a API: ' + error));
}