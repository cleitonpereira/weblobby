const db = require("./js/db");
(async () => {
    console.log("start");

    /* //DELETE
    try {
        console.log('DELETE');
        const result2 = await db.deleting(73756);
        console.log(result2);
    } catch (error) { console.log(error) } */

    //SELECT
    try {
        console.log('SELECT');
        const visitas = await db.selectVisita();
        console.log(visitas);
    } catch (error) { console.log(error) }

    /* //UPDATE
    try {
        console.log('UPDATE');
        const result3 = await db.update(77062,
            {
                nome: "Cleiton Pereira de Araujo",
                documento: "45.275.484-7"
            });
        console.log(result3);
    } catch (error) { console.log(error) } */

    //UPDATE
    try {
        console.log('UPDATE DATA');
        const result3 = await db.updateDataEntrada(77062,'2017-06-01 08:30');
        console.log(result3);
    } catch (error) { console.log(error) }

    
    try {
        console.log('SELECT');
        const visitas = await db.selectVisita();
        console.log(visitas);
    } catch (error) { console.log(error) }

    /* //INSERT
    try {
        console.log('INSERT INTO visita');
        const result = await db.insertVisita({
            nome: "Cleiton Pereira",
            documento: "452754847"
        });
        console.log(result);
    } catch (error) { console.log(error) } */

})();


