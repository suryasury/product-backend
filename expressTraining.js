const express = require("express")
// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const mongoose = require("mongoose")

// const app = express()
// app.set("view engine", "ejs")

require("dotenv").config()

const main = async () => {
    const app = express()
    await mongoose.connect(process.env.DATABASE_URL)
    console.log("Connected")
    app.listen(3001, () => console.log("Server running on port 3001"))
}
main()

// app.get("/", async (req, res) => {
//     try {
//         // let date = new Date()


//         let apiRes = await fetch("https://randomuser.me/api?results=20")
//         apiRes = await apiRes.json()

//         // var resObj = apiRes.results.map(data => {
//         //     return {
//         //         firstName: data.name.first,
//         //         dob: new Date(data.dob.date).getFullYear()
//         //     }
//         // })

//         // let daysToIncrement = 4

//         // res.send({
//         //     currentTime: date.toString(),
//         //     tomorrowSameTime: new Date(date.setDate(date.getDate()+ daysToIncrement)).toString(),
//         //     tomorrowSameTimeUsingTimeStamp: new Date(new Date().getTime() + (daysToIncrement * 24 * 60 * 60 * 1000)).toString()
//         // })

//         // let currentTime = new Date().getTime()
//         // let futureTime = new Date().setTime(1669804200000)

//         // let remainingHour = (futureTime - currentTime) / 1000 / 60

//         // var splitTimeArr = new Date().toISOString().split("T")[1].split(":")
//         // splitTimeArr.pop()

//         // res.send({
//         //     split: splitTimeArr.join(":"),
//         //     subString: new Date().toISOString().substring(11, 17),
//         //     getTime: `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`,
//         //     slice: new Date().toISOString().slice(11, 17)
//         // })

//         res.render("user.ejs", apiRes.results[0])
//     }
//     catch (err) {
//         res.send(err)
//     }
// })

// app.get("/user-list", async (req, res) => {
//     let apiRes = await fetch("https://randomuser.me/api?results=10")
//     apiRes = await apiRes.json()

//     var averageAge = apiRes.results.map(data => data.dob.age).reduce((value, sum) => value + sum, 0)

//     res.render("userList.ejs", {userList: apiRes.results, averageAge: averageAge / apiRes.results.length})
// })


// app.listen(3001, () => {
//     console.log("Server running in port 3000")
// })