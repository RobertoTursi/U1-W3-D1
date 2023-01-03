// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni 
 elemento stampa in console se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
/*
const giveMeRandom = function(n) {
    randomArray = []
    for (i = 0; i < n; i++) {
        randomArray.push(Math.round(Math.random() * 10))
    }
    return console.log(randomArray)
}

giveMeRandom(3)

const checkArray = (giveMeRandom) => {
    let sumOfNBiggerThan5 = 0
    for (i=0; i<randomArray.length; i++) {
        if (randomArray[i] > 5) {
            sumOfNBiggerThan5 += randomArray[i]
            console.log(randomArray[i] + " è maggiore di 5")
        } else {
            console.log(randomArray[i] + " è minore di 5")
        }
    }
    return console.log("La somma di tutti i numeri maggiori di 5 presenti nell'array è: " + sumOfNBiggerThan5)
}
checkArray()
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", 
 "name", "id" e "quantity". Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio 
 (tenendo conto delle quantità di ogni oggetto).
*/

let shoppingCart = [
    {
        name: "bike",
        price: 50,
        id: 1234,
        quantity: 3
    },
    {
        name: "shoe",
        price: 30,
        id: 4542,
        quantity: 1
    },
    {
        name: "ball",
        price: 15,
        id: 6356,
        quantity: 5
    }
]
/*
const shoppingCartTotal = () => {
    let totalPrice = 0
    shoppingCart.forEach(obj => {
        totalPrice += (obj.price *obj.quantity)
    })
    return console.log("Il totale è: " + totalPrice)
}
//shoppingCartTotal()
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", 
 "name", "id" e "quantity". Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a 
 "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
/*
const addToShoppingCart = (name, price, id, quantity) => {
    shoppingCart.push({
        name: name,
        price: price,
        id: id,
        quantity: quantity
    })
    let counter = 0
    for (i=0; i<shoppingCart.length; i++) {
        counter += 1
    }
    console.log(shoppingCart)
    shoppingCartTotal()
    return console.log(counter)
}
addToShoppingCart("moto", 200, 4355, 2)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", 
 "name", "id" e "quantity". Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso 
 in esso contenuto.
*/
/*
const maxShoppingCart = (array) => {
    arrayOfPrice = []
    array.forEach(obj => {
        arrayOfPrice.push(obj.price)
    })
    let checkPrize = 0
    for (j = 0; j < arrayOfPrice.length; j++) {
        if (arrayOfPrice[j] > checkPrize) {
                checkPrize = arrayOfPrice[j]
        }
    }
    for (i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].price === checkPrize)
        return console.log(shoppingCart[i])
    }
    
}
maxShoppingCart(shoppingCart)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
/*
const latestShoppingCart = (array) => {
    return console.log(array[array.length - 1])
}
latestShoppingCart(shoppingCart)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
/*
const loopUntil = (x) => {
    if (x >= 0 && x < 10) {
        let i = 0
        while (i<3) {
            let random = (Math.round(Math.random() * 9))
            console.log(random)
            if (random > x) {
                i++
            } else {
                i = 0
            }
        }   
    }
}

loopUntil(8)
*/



/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente
i valori non numerici nell'array.
*/
/*
arrayOfStrAndNum = [23, 5, 6, "ciao", true, 99, "wecoba", 743]

const average = (array) => {
    arrayWithOnlyNum = 0
    counter = 0
    for (i = 0; i < array.length; i ++) {
        if (typeof(array[i]) === "number") {
            arrayWithOnlyNum += array[i]
            counter += 1
        }
        
    }
    return console.log(arrayWithOnlyNum / counter)
}
average(arrayOfStrAndNum)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
/*
let boxOfStrings = ["ciao", "Hello World", "Epicode", "Apollo", "Fibonacci", "JavaScript"] 
const longest = (array) => {
    let longestString = ""
    for (i = 0; i < boxOfStrings.length; i++) {
        if (boxOfStrings[i].length > longestString.length) {
            longestString = boxOfStrings[i]
        }
    }
    return console.log("La stringa più lunga all' interno dell' array è: " + longestString)
}
longest(boxOfStrings)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato 
 "emailContent", e torna un valore booleano. La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
/*
const checkMail = (emailContent) => {
    if (emailContent.includes("SPAM") || emailContent.includes("SCAM")) {
        return console.log(false)
    } else {
        return console.log(true)
    }
}
checkMail("sjndajnfCAM")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/*
const howManyDays = (date) => {
    var today = new Date()
    var enteredData = new Date(date)
    return console.log("Dalla data inserita sono passati " + Math.floor((today.getTime() - enteredData.getTime()) / 86400000) + " giorni")
}
howManyDays("Dec 14, 2000")
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
