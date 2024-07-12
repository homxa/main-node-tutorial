const express = require('express')
const app = express()
const route= express.Router()
const {product,people} = require('../data.js')

route.put('/:id', (req, res) => {
  console.log(req.params, req.body, 'hello', req.url);
  const { id } = req.params;
  const { username } = req.body;

  const person = people.find((user) => user.id === parseInt(id, 10));
  if (!person) {
    return res.status(404).send('User not found');
  }

  const updatedPeople = people.map((user) => {
    if (user.id === person.id) {
      return { ...user, name: username };
    }
    return user;
  });

  res.send(updatedPeople);
});




//delete method to delete from db



route.delete('/:id', (req, res) => {
  console.log(req.params, req.body, 'hello', req.url);
  const { id } = req.params;
  const { username } = req.body;

  const person = people.find((user) => user.id ===Number(id));
  if (!person) {
    return res.status(404).send('User not found');
  }

  const updatedPeople = people.filter((user) => user.id !== person.id);

  res.send(updatedPeople);
});


module.exports = route;