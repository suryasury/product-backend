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
        "Name": "Paul",
        "City": "Delhi"
    },
    {
        "AccountNo": 1005,
        "Name": "Riya",
        "City": "Mumbai"
    }
]

const transactions = [
    {
        "Date": "12-01-2022",
        "From": 1001,
        "To": 1003,
        "Amount": 15000
    },
    {
        "Date": "12-01-2022",
        "From": 1003,
        "To": 1002,
        "Amount": 12000
    },
    {
        "Date": "12-01-2022",
        "From": 1002,
        "To": 1005,
        "Amount": 2000
    },
    {
        "Date": "13-01-2022",
        "From": 1003,
        "To": 1001,
        "Amount": 1000
    },
    {
        "Date": "13-01-2022",
        "From": 1002,
        "To": 1001,
        "Amount": 1200
    },
    {
        "Date": "14-01-2022",
        "From": 1001,
        "To": 1002,
        "Amount": 3000
    },
    {
        "Date": "14-01-2022",
        "From": 1005,
        "To": 1003,
        "Amount": 1500
    },
    {
        "Date": "15-01-2022",
        "From": 1005,
        "To": 1003,
        "Amount": 4000
    }
]

var res = customers.map(data => {
    var credit = 0
    var debit = 0

    for(var i = 0; i < transactions.length; i++){
        if (transactions[i].From === data.AccountNo){
            debit += transactions[i].Amount
        }
        if (transactions[i].To === data.AccountNo){
            credit += transactions[i].Amount
        }
    }

    var balance = credit - debit
    return {
        ...data,
        balance: balance
    }
})

console.log("Customer Balance:", res)