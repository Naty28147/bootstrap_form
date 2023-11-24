const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

app.use(express.static('public'))

app.get('/users/add', (req, res) => {
  res.render('userform')
  })
  
app.post('/users/save', (req, res) => {
  const nome_produto = req.body.nome_produto;
  const nome_fornecedor = req.body.nome_fornecedor;
  const data_compra = req.body.data_compra;
  const valor_compra = req.body.valor_compra;
  const valor_venda = req.body.valor_venda;
  const categoria = req.body.categoria;
  
  const user = { nome_produto: nome_produto, nome_fornecedor: nome_fornecedor, data_compra: data_compra, valor_compra: valor_compra, valor_venda: valor_venda, categoria: categoria }
  res.render('viewuser', { user: user })
  
  })

app.get('/', (req, res) => {
    res.render('home')
  })  

app.listen(port, () => {
  console.log('Server online!')
})