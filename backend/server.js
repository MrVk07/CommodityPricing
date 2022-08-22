import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import Cereals from './WebsiteScrapper/Cereals.js'
import Fruits from './WebsiteScrapper/Fruits.js'
import OilSeeds from './WebsiteScrapper/OilSeeds.js'
import pulses from './WebsiteScrapper/Pulses.js'
import spices from './WebsiteScrapper/Spices.js'

const app = express()

dotenv.config()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/pulses', pulses)
app.use('/spices', spices)
app.use('/oilseeds', OilSeeds)
app.use('/cereals', Cereals)
app.use('/fruits', Fruits)

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})