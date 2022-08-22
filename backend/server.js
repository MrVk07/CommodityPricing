import express from 'express'
import Cereals from './WebsiteScrapper/Cereals.js'
import Fruits from './WebsiteScrapper/Fruits.js'
import OilSeeds from './WebsiteScrapper/OilSeeds.js'
import pulses from './WebsiteScrapper/Pulses.js'
import spices from './WebsiteScrapper/Spices.js'

const app = express()

const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("meeeeeeeeeeeessage")
})

app.use('/pulses', pulses)
app.use('/spices', spices)
app.use('/oilseeds', OilSeeds)
app.use('/cereals', Cereals)
app.use('/fruits', Fruits)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})