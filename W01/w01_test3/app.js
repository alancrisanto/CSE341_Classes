const lesson1Controller = require('./controllers/lesson1.js')
const express = require('express');
const app = express();
const router = express.Router();


router.get('/', lesson1Controller.AlanRoute )
router.get('/home',lesson1Controller.guessRoute)




app.listen(process.env.PORT || 3000);
console.log("listening on port " + (process.env.port || 3000));