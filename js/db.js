async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/hzn");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

connect();


async function selectVisita() {
    const conne = await connect();
    const [rows] = await conne.query('SELECT * FROM visita ORDER BY idVisita DESC LIMIT 30;');
    return rows;
}


async function insertVisita(visita) {
    const conn = await connect();
    const sql = "INSERT INTO visita(nome, documento)"; +
        "VALUES(?, ?);";
    const values = [visita.nome, visita.documento];
    return await conn.query(sql, values);
}

async function deleting(id) {
    const conne = await connect();
    const sql = ("DELETE FROM visita WHERE idVisita = ?;");
    return await conne.query(sql, [id]);
}

async function update(id, visita) {
    const conne = await connect();
    const sql = ("UPDATE visita SET nome = ?, documento = ? WHERE idVisita = ?;");
    const values = [visita.nome, visita.documento, id];
    return await conne.query(sql, values);
}

async function updateDataEntrada(id, dataEntra) {
    const conne = await connect();
    const sql = ("UPDATE visita SET dataEntra = ? WHERE idVisita = ?;");
    const values = [dataEntra, id];
    return await conne.query(sql, values);
}

module.exports = { selectVisita, insertVisita, deleting, update, updateDataEntrada }