function buscar_api() {
    const id = document.querySelector('#id').value.trim();
    if (!id) {
        alert('Por favor, insira um ID válido e não nulo.');
        return;
    }
    localStorage.setItem('selectedId', id);
        fetch('https://rickandmortyapi.com/api/character/'+id) //requere a api
        .then(response => response.json()) //transforma em json
        .then(data => {
            const tabela = document.querySelector('#Rick');
            tabela.innerHTML = ' '; //limpa a tabela antes de preencher
            const linha = ` <tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.species}</td>
                <td>${data.type  || 'Sem Informação' }</td>
                </tr> `;
            tabela.innerHTML = linha;
        })
        .catch(error => console.log('Erro ao consumir a API: ' + error));
}
