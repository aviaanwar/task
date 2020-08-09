const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.use('/product', (req, res, next) => {
    res.send('<form action="/pro" method ="POST"><input type="text" name ="title"><button type ="submit">send</button></form>')

}

);
app.use('/pro', (req, res, next) => {

    console.log(req.body);
    res.redirect('/');
}
);
app.use('/', (req, res, next) => {

    res.send('<h1>hello from js</h1>');
}
);

app.listen(2000);
