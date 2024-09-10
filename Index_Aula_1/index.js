const express = require("express");

const app = express();

 //Cai ali 
// http://localhost:8080/
app.get("/",(request, response) => {

    response.status(200).send("Teu server n ta de brinqueixons");
});

app.listen(8080, () => {

    console.log("Hello Potato");
});

