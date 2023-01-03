import express from 'express';
import mongoose from 'mongoose'
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)

mongoose.connect('mongodb+srv://clevesson:cle123Men@cluster0.gq6oru0.mongodb.net/?retryWrites=true&w=majority')
.then(data => {
    console.log('MongoDB Connection Succeeded')
}).catch(err => {
    console.error(`Error in DB connection: ${err.message}`)
})

app.listen(3333, () => `Server running on port 'http://localhost:3333'`);