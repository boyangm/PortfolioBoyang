var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
const sgMail = require('@sendgrid/mail');

var port = process.env.PORT || 8080

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname));

app.get('/', function(req, res){
   res.render('index');
});
app.get('/thanks', function(req, res){
   res.render('thanks');
});

app.post('/home', (req,res) =>{
   res.redirect('/');
})

app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.post('/send', function(req, res){
   console.log(req.body.message);
   var source = req.body.name;
   sgMail.send({
    to: 'boyangbass@gmail.com',
    from: req.body.email,
    subject: source + ' is awaiting your reply!',
    text: req.body.message
})
   res.redirect('/thanks');
});




app.listen(port, function () {
    console.log("app running");
  })