axios.get('http://localhost:3000/select')
            .then(response => criarListaDinamica(response.data))
            .catch(error => console.log(error))

        const criarListaDinamica = (visita) => {
            const tabela = document.getElementById("tabela")
            visita.forEach(visita => {
                tabela.innerHTML += `<tr>
                    <td>${visita.nome}</td>
                    <td>${visita.documento}</td>
                    <td>${visita.dataEntra.replace(/[A-Z]/g, ' ')}</td>
                    <td>${visita.documento}</td>
                    <td>${visita.pesoBruto}</td>
                    <td>${visita.valor}</td>
                    <td>${visita.placaVeiculo}</td>
                    <td>${visita.estado}</td>
                    <td>${visita.dataEntra.replace(/[A-Z]/g, ' ')}</td>
                    <td>${visita.dataSai}</td>
                    <td>${visita.departamento}</td>
                    <td>${visita.assunto}</td>
                    <td>${visita.observacao}</td>
                    </tr>
                    `
            })
        }