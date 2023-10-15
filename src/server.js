import express from "express";
const app = express()
import { CONFIG } from './config/index.js'
import cors from 'cors'
import routes from './routes/api.js'

const PORT = CONFIG.PORT || 5000

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use('/api', routes)

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('listening on PORT', PORT)
})