var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01",
  database: "meubanquinho"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT cliente.name AS user, produto.name AS favorite FROM users JOIN products ON cliente.favorite_product = produto.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}); 