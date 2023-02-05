import express from 'express'
const app = express()

app.get('/express', (req, res) => {
    res.send('Rota com express')
})

app.listen(8080, ()=> {
    console.log('servidor iniciado')
})