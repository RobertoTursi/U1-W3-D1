/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const area = function(l1, l2) {
    return l1*l2
}

const rectangleArea = area(4, 5)
console.log("l'area del rettangolo è pari a " + rectangleArea)
*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const crazySum = function(n1, n2) {
    if (n1 !== n2) {
        return n1 + n2
    } else {
        return (n1 + n2) * 3
    }
}

const integerSum = crazySum(3, 4)
console.log(integerSum)

const equalIntegerSum = crazySum(3, 3)
console.log(equalIntegerSum)
*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const crazyDiff = function(number) {
    if (number <= 19) {
        return 19 - number
    } else {
        return (number - 19) * 3
    }
}

const differenceBetweenANumbersAnd19 = crazyDiff(10)
console.log("numero minore o uguale a 19: " + differenceBetweenANumbersAnd19)

const differenceBetweenANumbersAnd19_2 = crazyDiff(100)
console.log("numero maggiore di 19: " + differenceBetweenANumbersAnd19_2)

*/

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n 
 è compreso tra 20 e 100 (incluso) oppure se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const boundary = function(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true
    } else {
        return false
    }
}

const numberCheck = boundary(400)
console.log(numberCheck)
*/

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita 
 comincia già con "EPICODE" allora deve ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const epify = function(string) {
    let stringCheck = "EPICODE"
    if (string.substr(0, 7) !== stringCheck) {
        return stringCheck.concat(" ", string)
    } else {
        return string
    }
}

const stringa = epify("EPICODE")
console.log(stringa)
*/

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve 
 controllare che il parametro sia un multiplo di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const check3and7 = function(n) {
    if (n % 3 === 0 && n % 7 === 0) {
        console.log(n + " è multiplo sia di 3 che di 7")
    } else if (n % 3 === 0) {
        console.log(n + " è multiplo di 3")
    } else if (n % 7 === 0) {
        console.log(n + " è multiplo di 7")
    } else {
        console.log(n + " non è multiplo né di 3 né di 7")
    }
}

check3and7(14)
*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/*
const reverseString = function(string) {
    for (i = string.length; i > 0; i--) {
        console.log(string[i])
    }
}

reverseString("")
*/
/*
const reverseString = function(string) {
    for (i = 0; i < (Math.floor(string.length / 2)); i++) {
        let singleCharacter = string.slice(string[i], string[i] + 1)
        delete singleCharacter[i]

        return string.splice(string[i], 1, string[string.length - 1 + i])
    }

}

let invertedString = reverseString("epicode")
console.log(invertedString)
*/


/*
const reverseString = function(string) {
    for (i = 0; i < (Math.floor(string.length / 2)); i++) {
        let singleCharacter = string[i]
        let singleCharacter2 = string[(string.length - 1) - i]
        string.replace(singleCharacter, singleCharacter2)
        console.log(string)
        string.replace(singleCharacter2, singleCharacter)
        return string
    }
    
}

let invertedString = reverseString("epicode")
console.log(invertedString)

/*
let string = "epicode"
let i = 2
let firstchar = string[2]
let secondchar = string[(string.length - 2) - i]
console.log(string.replace(firstchar, secondchar))




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const capitalizeFirst = string => {
    const words = string.split(" ")
    let wordsCapitalized = []
    for (let i = 0; i < words.length; i++) {
        const firstLetter = words[i].charAt(0).toUpperCase()
        const otherLetters = words[i].slice(1)
        const capitalized = firstLetter + otherLetters

        wordsCapitalized.push(capitalized)
        
    }
    console.log(wordsCapitalized.join(" "))
}


capitalizeFirst("Epicode is awesome")
*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare 
 una nuova stringa senza il primo e l'ultimo carattere della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const cutString = function(string) {
    stringWithoutStartAndFinalChar = string.slice(1, (string.length - 1))
    return console.log(stringWithoutStartAndFinalChar)
}

cutString("epicode")
*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const giveMeRandom = function(n) {
    randomArray = []
    for (i = 0; i < n; i++) {
        randomArray.push(Math.round(Math.random() * 10))
    }
    return console.log(randomArray)
}

giveMeRandom(5)
*/
