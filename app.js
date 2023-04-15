const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

var items = ['Cook breakfast', 'Eat breakfast', 'Cook Lunch'];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  var today = new Date();
  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  var day = today.toLocaleDateString('en-US', options);

  res.render('list', { nameOfDay: day, newListItem: items });
});

app.post('/', function (req, res) {
  item = req.body.newItem;
  items.push(item);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`we are on port ${port}`);
});
