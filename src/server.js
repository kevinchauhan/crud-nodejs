import express from "express";
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res, next) => {
    res.send('welcome to express server')
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('listening on PORT', PORT)
})