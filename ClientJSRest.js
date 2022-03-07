const express = require('express');
const app = express();
const port = process.env.PORT || 3079;

const axios = require('axios');
const cors = require("cors");
app.use(cors())
app.get('/', (req, res) => {
    axios.get('https://rest-service-802.herokuapp.com//')
        .then(response => {
            let test = response.data.routes[0].summary
            res.json(test)
            console.log(test)
        })
        .catch(error => {
            console.log(res.json(error));
        });
});


app.listen(port, () => {
    console.log("server ecoute sur le port : ", port)
});

