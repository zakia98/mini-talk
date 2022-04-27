var express = require('express');
const { redirect } = require('express/lib/response');
const res = require('express/lib/response');
var router = express.Router();

const messages = [
  {
    text:"Hi there!",
    user:"Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user:"Charles",
    added: new Date()
  }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('newForm', {title: 'Send a message'});
});

router.post('/new', (req, res, next) => {
  console.log(req.body)
  messages.push({
    text:req.body.name,
    message:req.body.message,
    added: new Date()
  })
  res.redirect('/')
})


module.exports = router;
