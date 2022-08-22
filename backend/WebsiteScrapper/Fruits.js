import request from 'request'
import express from "express";
import cheerio from "cheerio"

const Fruits = express.Router();
let url = 'https://www.commodityinsightsx.com/commodities/fruits'

let handleHtml = (html) => {
    let Fruits = []
    let $ = cheerio.load(html)
    let itemArr = $(".boxContent")
    let Fruit_name = $('.boxContent>h4')
    let images = $('.lozad').splice(0, itemArr.length)
    let table_of_content_value = $(".rc").splice(0, (itemArr.length) * 7)
    for (let i = 0; i < itemArr.length; i++) {
        let data_of_each_item = {}
        data_of_each_item["name"] = Fruit_name[i].children[0].data
        data_of_each_item["image"] = "https://www.commodityinsightsx.com" + images[i].attributes[1].value
        data_of_each_item["Category"] = "Fruits"
        data_of_each_item["Costliest_Market"] = table_of_content_value[7 * i + 2].children[0].data.trim()
        data_of_each_item["Costliest_Market_Price"] = table_of_content_value[7 * i + 3].children[0].data.trim()
        data_of_each_item["Cheapest_Market"] = table_of_content_value[7 * i + 4].children[0].data.trim()
        data_of_each_item["Cheapest_Market_Price"] = table_of_content_value[7 * i + 5].children[0].data.trim()
        data_of_each_item["Latest_Price_Date"] = table_of_content_value[7 * i + 6].children[0].data.trim()
        Fruits.push(data_of_each_item)
    }
    return Fruits
}

Fruits.get('/', async (req, res) => {
    request(url, (error, response, html) => {
        if (error) {
            console.error('error :', error);
        }
        else {
            let data_of_Fruits = handleHtml(html)
            res.send(data_of_Fruits)
        }
    })
})


export default Fruits