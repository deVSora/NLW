import express from 'express'

const app = express()

app.get('/teste', (req, res) => {
    return res.json([
        { id: 1, name: 'teste 1' },
        { id: 2, name: 'teste 2' },
        { id: 3, name: 'teste 3' },
        { id: 4, name: 'teste 4' },
    ])
})

app.listen(8000)