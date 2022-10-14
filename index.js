const express = require('express');
const connection = require('./database');

const app = express();

app.use(express.json());

const subscriptions = {};

app.post('/subscriptions', async (req, res) =>{
    const { user_id, status_id } = req.body;

    const result = await connection.query('INSERT INTO subscription (user_id, status_id) VALUES(?,?)', [user_id, status_id]);

    return res.status(201).json(result);
});

app.listen(3000, () => {
    console.log('Listening on 3000');
})
