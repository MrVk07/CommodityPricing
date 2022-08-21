import express from 'express'
import pulses from './WebsiteScrapper/Pulses.js'

const app = express()

const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("meeeeeeeeeeeessage")
})

app.use('/pulses', pulses)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})