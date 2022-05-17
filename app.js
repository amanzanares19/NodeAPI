// El código invoca express() para crear una instancia de una aplicación de Express.
const express = require('express');
const app = express();

function isAuthorized(req,res, next) {
    const auth = req.headers.authorization;
    if (auth === 'secretpassword') {
      next();
    } else {
      res.status(401);
      res.send('Not permitted');
    }
}

const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));


// Primer ejemplo
/* app.get("/products", (req,res) => {
    const products = [
    {
        id: 1,
        name: "hammer",
    },
    {
        id: 2,
        name: "screwdriver",
    },
    ,
    {
        id: 3,
        name: "wrench",
    },
    ];

    res.json(products);
});  */


//Clients
app.get('/users', isAuthorized, (req,res) => {
    
    res.json([{
      
      id: 1,
      name: 'User Userson'
    }])
})
  
app.get('/products', (req, res) => {
    res.json([{
      id: 1,
      name: 'The Bluest Eye'
    }])
})
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`));