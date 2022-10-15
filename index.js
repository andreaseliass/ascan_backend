const express = require('express');
const dataSource = require('./database');

const app = express();

app.use(express.json());

dataSource
  .initialize()
  .then(function () {

    app.post('/users', async (req, res) =>{
        const { full_name } = req.body;
        const UsersRepository = dataSource.getRepository('User')

        const result = UsersRepository.create({full_name});

        await UsersRepository.save();

        return nres.status(201).json(result);
    });

    app.listen(3000, () => {
        console.log('Listening on 3000');
    })
})
.catch(function (error) {
  console.log('Error: ', error);
});