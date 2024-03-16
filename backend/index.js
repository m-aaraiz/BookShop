import express from "express";
import mysql from "mysql2";

const app = express();

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "aaraiz",
	database: "test",
});

app.get("/", (req, res) => {
	res.json("Backend server is running!");
})

app.get("/books", (req, res) => {
	db.query("SELECT * FROM books", (err, data) => {
		if (err) {
			res.json(err);
		} else {
			res.send(data);
		}
	});
});

app.listen(8800, () => {
	console.log("Backend server is running!");
});
