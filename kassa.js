            // array of different coffee choices
            const coffees = [
                {name: 'Brygg Kaffe', price: 20},
                {name: 'Cappucino', price: 30},
                {name: 'Latte', price: 40}
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
                    this.transaction = {
                        name: coffees.name,
                        price: coffees.price,
                        amount: this.amount
                    }

                }
                // adds selected amount of objects in customer's own array
                addTransaction(product, amount) {
                    this.transaction = {
                        name: product.name,
                        price: product.price,
                        amount: amount
                    }
                    this.transactions.push(this.transaction)
                }
                // stores coffee object's price in sum
                getTotalSpent() {
                    let sum = 0
                    this.transactions.forEach(purchase => {
                        sum += purchase.price * purchase.amount
                    })
                    return sum
                }
                getTotalCups() {
                    let cups = 0
                    this.transactions.forEach(purchase => {
                        cups += parseInt(purchase.amount)
                    })
                    return cups
                }
                // sets status according to amount of cups
                setDiscountStatus() {
                    if(this.getTotalCups() < 10) {
                        return "Brons"
                    } else if(this.getTotalCups() >=10 && this.getTotalCups() < 30) {
                        return "Silver"
                    } else {
                        return "Guld"
                    }
                }
            }
            // creates a new customer
            const customer = new Customer()
    
            onClick = () => {
                
                // creates dynamic variables depending on chosen coffee
                optionIndex = document.getElementById("coffeeSorts").selectedIndex
                optionAmount = document.getElementById("amountOfCups").value
    
                customer.addTransaction(coffees[optionIndex], optionAmount)
    
                // creates a parent for history logs
                const history = document.getElementById("history")
                const historyLog = document.createElement("p")

                document.getElementById("transactionHeader").innerHTML = `Dina transaktioner`
    
                // text for each child to print (kind of long)
                historyLog.innerHTML = `Du köpte ${optionAmount}st ${coffees[optionIndex].name} 
                för ${coffees[optionIndex].price} kr styck. Summa: ${coffees[optionIndex].price*optionAmount}`

                // Prints history logs per click
                history.appendChild(historyLog)
    
                // Prints total amount spent
                document.getElementById("purchase").innerHTML = `Du har handlat för: ${customer.getTotalSpent()} kr`
    
                // Prints customer's membership status
                document.getElementById("status").innerHTML = `Medlemsstatus: ${customer.setDiscountStatus()}`
            }