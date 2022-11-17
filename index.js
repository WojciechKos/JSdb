const mysql =require("mysql2");
const connection = mysql.createConnection({
        host: 'localhost',
        user: 'rhe1n',
        password: 'nlPXLp(QIGq@L[I1',
        database: 'rhe1n'
});

connection.connect();

function pobierz(id){
connection.query('SELECT * FROM siemalpa WHERE id='+id, function(result){
    console.log(result)
})}

function aktualizuj(id, imie, level, klasa){
    connection.query('UPDATE siemalpa SET imie='+imie+',level='+level+',klasa='+klasa+'WHERE id='+id,(err,result)=>{
    console.log(result)
    })
}

function usun(id){
    connection.query('DELETE FROM siemalpa WHERE id='+id)
}

function dodaj(id, imie, level, klasa){
    connection.query(`INSERT INTO siemalpa(id, imie, level, klasa) VALUES('${id}', '${imie}', '${level}', '${klasa}')`, (err)=>{
    if (err) throw err
    })
}

pobierz(1);
//aktualizuj(1,'Teemo',18,'shchoor');
//usun(1);
//dodaj(1,'Gnar',18,'czolg');

connection.end()