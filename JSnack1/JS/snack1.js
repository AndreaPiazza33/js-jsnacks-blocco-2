// chiedo un numero
const userNumber =parseInt(prompt("inserisci un numero"))


//condizioni per stampare
if (userNumber % 2 == 0 ) {
    console.log(userNumber)
}
else {
    let userNumberModified = (userNumber + 1)
    console.log(userNumberModified)
}
