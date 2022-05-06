var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  password: "aluno01",
  user: "root",
  database: "meubanquinho"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE usuário SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});