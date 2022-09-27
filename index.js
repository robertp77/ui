const express = require('express')
const PORT = process.env.PORT || 5000

express()
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('dist/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))