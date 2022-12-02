// const a = {b:5}
// console.log(a)
// a.b = 7
// console.log(a)

// a = {b:8}
// console.log(a)

// function sum1(a, b) {
//     return a + b
// }

// const sum2 = function (a, b) {
//     return a + b
// }

// const sum3 = (a, b) => {
//     return a + b
// }

// const sum4 = (a, b) => a + b


// console.log(sum1(1, 3))
// console.log(sum2(1, 3))
// console.log(sum3(1, 3))
// console.log(sum4(1, 3))

// const run = async () => {
//     console.log("before timeout")
//     setTimeout(() => {console.log("timer running")}, 5000)
//     console.log("after timeout")
// }
// run()

// return
const customers = [
    {
        "AccountNo": 1001,
        "Name": "John",
        "City": "Bangalore"
    },
    {
        "AccountNo": 1002,
        "Name": "Tom",
        "City": "Mysore"
    },
    {
        "AccountNo": 1003,
        "Name": "Kate",
        "City": "Pune"
    },
    {
        "AccountNo": 1004,
        "Name": "Tom",
        "City": "Delhi"
    },
    {
        "AccountNo": 1005,
        "Name": "Kate",
        "City": "Mumbai"
    }
]

var resObj = {}

for (const customer of customers) {
    if (customer.Name in resObj) {
        console.log("First Duplicate Account Number:", resObj[customer.Name]);
        break
    }
    resObj[customer.Name] = customer.AccountNo
}

