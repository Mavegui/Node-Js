const express= require('express');
const app= express();
const handlebars  = require('express-handlebars')
const bodyParser= require('body-parser')
const metodo= require('./models/metodo')

   app.use(bodyParser.urlencoded({extended: 'main'}))
   app.use(bodyParser.json())

   app.engine('handlebars', handlebars({defaultLayout: 'main', runtimeOptions: {
       allowProtoPropertiesByDefault: true,
       allowProtoMethodsByDefault: true,
     },
   }))
   app.set('view engine', 'handlebars')

   app.get('/', function (req, res) {
         metodo.findAll({order: [['id', 'DESC']]}).then(function (metod) {
         res.render('home', {metod: metod})
     })
   })

   app.get('/user', function (req, res) {
       res.render('form')
  })

  app.get('/deletar/:id', function (req,res) {
    metodo.destroy({where: {'id': req.params.id}}).then(function () {
    res.send("<center>Apagado com sucesso! <br><a href='/'><button type='button' class='btn btn-primary btn-sm'>Voltar</button></a></center>")
  }).catch(function (erro) {
    res.send('Esta postagem não existe!')
  })
})

  app.post('/user', function (req, res) {
     metodo.create({
        nome: req.body.nome,
        conto: req.body.hist
  }).then(function () {
    res.redirect('/')
  }).catch(function (erro) {
    res.send('Houve um erro: '+erro)
  })
})

app.listen(8081, function() {
	console.log("Servidor rodando na url http://localhost:8081");
})
