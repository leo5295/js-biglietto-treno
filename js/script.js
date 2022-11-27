//PROBLEMA
//biglietto con costi differenti in base all'età e alla distanza da percorrere

// - 1 chiedere numero di KM

let km = prompt("Inserisci KM che vuoi percorrere")
console.log(km)

// - 2 chiedere numero di KM

let age = prompt("Inserisci la tua età")
console.log(age)

let price = km * 0.21

//- 3 variare i costi in base all'età e ai km

if (age < 18){
    console.log(price)

}
else if (age > 65){
    console.log(price)

}

else{
    console.log(price)

}