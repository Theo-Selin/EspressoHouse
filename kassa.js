// array of different coffee choices
const coffees = [
    { name: 'Brygg Kaffe', price: 20 },
    { name: 'Cappucino', price: 30 },
    { name: 'Latte', price: 40 }
]
// appends coffee options depending on objects in "coffees" array
coffees.forEach(coffeeSort => {
    const option = document.createElement("option")
    option.name = coffeeSort.name
    option.value = coffeeSort.price
    option.innerHTML = `${coffeeSort.name} - ${coffeeSort.price} kr`
    coffeeSorts.appendChild(option)
})
// creates a class for different customers
class Customer {
    constructor() {
        this.transactions = []
    }
    // adds selected amount of objects in customer's own array
    addTransaction(product, amount) {
        let transaction = {
            name: product.name,
            price: product.price,
            amount: amount
        }
        this.transactions.push(transaction)
    }
    // stores coffee object's price in sum
    getTotalSpent() {
        let sum = 0
        this.transactions.forEach(purchase => {
            sum += purchase.price * purchase.amount
        })
        return sum
    }
    // stores amount of cups purchased
    getTotalCups() {
        let cups = 0
        this.transactions.forEach(purchase => {
            cups += parseInt(purchase.amount)
        })
        return cups
    }
    // sets status according to amount of cups
    setMembershipStatus() {
        if (this.getTotalCups() < 10) {
            return "Brons"
        } else if (this.getTotalCups() >= 10 && this.getTotalCups() < 30) {
            return "Silver"
        } else {
            return "Guld"
        }
    }
}
// creates a new customer
const customer = new Customer()

// prints total spent and membership status
const printTotalSpent = () => {
    document.getElementById("purchase").innerHTML = `Du har handlat för: ${customer.getTotalSpent()} kr`
}
// prints membership status
const printMembershipStatus = () => {
    document.getElementById("status").innerHTML = `Medlemsstatus: ${customer.setMembershipStatus()}`
}
// prints transaction history
const printTransactions = () => {
    const history = document.getElementById("history")
    const historyLog = document.createElement("p")

    historyLog.innerHTML = `Du köpte ${optionAmount}st ${coffees[optionIndex].name} 
    för ${coffees[optionIndex].price} kr styck. Summa: ${coffees[optionIndex].price * optionAmount}`

    history.appendChild(historyLog)
}

// adds transaction according to chosen coffee and prints information
const finalizingPurchase = () => {

    // creates dynamic variables depending on chosen coffee
    optionIndex = document.getElementById("coffeeSorts").selectedIndex
    optionAmount = document.getElementById("amountOfCups").value

    customer.addTransaction(coffees[optionIndex], optionAmount)

    printTotalSpent()

    printMembershipStatus()

    printTransactions()
}