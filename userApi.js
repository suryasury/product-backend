const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const fetchUser = async () => {
    let res = await fetch("https://randomuser.me/api?results=20")

    res = await res.json()

    // let names = []

    // for(const data of res.results){
    //     console.log(data.name.first)
    //     names.push(data.name.first)
    // }
    // var resss = [1, 2, 3, 4, 5].map(data => {
    //     if (data !== 3)
    //         return data * 2
    // })

    // console.log("num arr", resss)
    // res.results.forEach(data => {
    //     console.log(data.name.first)
    //     names.push(data.name.first)
    // })

    //localeCompare ---> compare two strings

    // let names = res.results.sort((d1, d2) => {
    //     if (d1.name.last > d2.name.last) return 1
    //     if (d1.name.last < d2.name.last) return -1
    //     return 0
    // }).map(data => `${data.name.first} ${data.name.last}`).join(", ")

    let names = res.results.filter(data => data.gender === "female").map(data => `${data.name.first} ${data.name.last}`).join(", ")

    console.log("---------------------------------")

    console.log(names)
}

fetchUser()