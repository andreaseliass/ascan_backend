const express = require('express');

const app = express();

app.use(express.json());

const subscriptions = {};

app.post('/subscriptions', (req, res) =>{
    const { user_id, status_id } = req.body;

    subscriptions[status_id] = {
        user_id, status_id
    };

    return res.status(201).send(subscriptions[status_id]);
});

app.listen(3000, () => {
    console.log('Listening on 3000');
})
