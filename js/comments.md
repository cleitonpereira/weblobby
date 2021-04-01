


```js
    const criarListaDinamica = (visita) => {
            const ulVisita = document.getElementById('visitaUl')
             visita.map(visita => {
                const listaVisita = document.createElement('li')
                listaVisita.innerHTML = `Nome: ${visita.nome}`
                ulVisita.appendChild(listaVisita) 
            })

            visita.forEach(visita => {
                ulVisita.innerHTML += `<li>${visita.nome}</li>`
                ulVisita.innerHTML += `<li>${visita.documento}</li>`
                ulVisita.innerHTML += `<li>${visita.dataEntra.replace(/[A-Z]/g, ' ')}</li>`
                ulVisita.innerHTML += "<br/>"
            })

        }
        const datanow = document.getElementById("dateIn")
        
        function nice(){
            console.log(Date.now);
        }
        const btn = document.getElementById("botao");
        btn.addEventListener("click", nice());
        
        
        console.log(Date.now().toJSON().slice(0, 19).replace('T',' '));
         var date = new Date()
        console.log(date.toString())
        var dateControl = document.getElementById('dateIn')
        dateControl.value = '2017-06-01T08:30';

        console.log(dateControl.value.toString().replace('T', ' ')); 




        
        <form>
            <label for="name">
                    Nome:
                </label><input type="text" placeholder="Digite o nome do visitante" id="name" /><br />
                Documento: <input type="text" name="" id="doc" /><br />
                Empresa: <input type="text" name="" id="company" /><br />
                Nota Fiscal: <input type="text" name="" id="invoice" /><br />
                Peso Bruto: <input type="text" name="" id="grossWeigth" /><br />
                Valor: <input type="text" name="" id="value" /><br />
                Placa do Veículo: <input type="text" name="" id="licensePlate" /><br />
                Estado: <input type="text" name="" id="state" /><br />
                Data de entrada: <input type="datetime-local" name="" id="dateIn" /><br />
                Departamento: <input type="text" name="" id="sector" /><br />
                Assunto: <input type="text" name="" id="subject" /><br />
                Observação: <input type="text" name="" id="note" /><br />
            
    </form>        
```