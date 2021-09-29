            // array of different coffee choices
            const coffees = [
                {name: 'Brygg Kaffe', price: 20},
                {name: 'Cappucino', price: 30},
                {name: 'Latte', price: 40}
            ]
    
                // appends coffee options depending on objects in "coffees" array
                coffees.forEach(coffeeSort => {
                    const option = document.createElement("option")
                    option.value = coffeeSort.price
                    option.name = coffeeSort.name
                    option.innerHTML = `${coffeeSort.name} - ${coffeeSort.price} kr`
                    coffeeSorts.appendChild(option)
                })
    
                // creates a class for different customers
                class Customer {
                constructor() {
                    this.transactions = []
                }
                // adds selected amount of objects in customer's own array
                addTransaction(amount) {
                    for (let index = 0; index < amount; index++) {
                        this.transactions.push(coffees[optionIndex])
                    }
                }
                // stores coffee object's price in sum
                getTotalSpent() {
                    let sum = 0
                    this.transactions.forEach(purchase => {
                        sum += purchase.price
                    })
                    return sum
                }
                // sets status according to amount of cups
                setDiscountStatus() {
                    if(this.transactions.length < 10) {
                        return "Brons"
                    } else if(this.transactions.length >=10 && this.transactions.length < 30) {
                        return "Silver"
                    } else {
                        return "Guld"
                    }
                }
            }
            // creates a new customer
            const customer = new Customer()
    
            const click = onClick = () => {
                
                // creates dynamic variables depending on chosen coffee
                optionIndex = document.getElementById("coffeeSorts").selectedIndex
                optionAmount = document.getElementById("amountOfCups").value
    
                customer.addTransaction(optionAmount)
    
                // creates a parent for history logs
                const history = document.getElementById("history")
                const historyLog = document.createElement("p")
    
                // text for each child to print (kind of long)
                historyLog.innerHTML = `Du köpte ${optionAmount}st ${coffees[optionIndex].name} 
                för ${coffees[optionIndex].price} kr styck. Summa: ${coffees[optionIndex].price*optionAmount}`
    
                // Prints total amount spent
                document.getElementById("purchase").innerHTML = `Du har handlat för: ${customer.getTotalSpent()} kr`
    
                // Prints customer's membership status
                customer.setDiscountStatus(customer.transactions)
                document.getElementById("status").innerHTML = `Medlemsstatus: ${customer.setDiscountStatus()}`
    
                // Prints history logs per click
                history.appendChild(historyLog)
            }