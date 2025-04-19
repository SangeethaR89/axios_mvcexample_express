const express = require('express');
const app = express();

const UserController = require('./controller/userController');

app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/users', UserController.listUsers);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});