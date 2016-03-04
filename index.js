'use strict'

const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000

// Sets the view engine to jade. Very important since it has to be compiled to html.
app.set('view engine', 'jade')

// This uses the node-sass-middleware.
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}))

app.use(express.static('public'))



app.get('/', (req, res) => {
    res.render('index')
})


app.listen(PORT, () => {
    console.log(`we hear you server on port: ${PORT}`)
})