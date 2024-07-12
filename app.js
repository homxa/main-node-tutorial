const express = require('express')
const {product,people} = require('./data.js')

const userRoute = require('./routes/user.js')
const login = require('./routes/login.js')

const app = express()
app.use(express.static('./public'))


// Middleware to parse JSON and URL-encoded data

app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use('/login', login)
app.use('/userProfile', userRoute)








app.listen(3000, () => {
  console.log('Server is running on port 3000');
});






fetch('http://localhost:3000/userProfile/1', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ username: '' })
})
  .then(response => response.json())
  .then(data => console.log(data));
