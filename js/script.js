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
    console.log(finalprice = (price - (price * 0.2)))

}
else if (age > 65){
    console.log(finalprice = (price - (price * 0.4)))

}

else{
    console.log(finalprice = price)

}

//- 4 Risultato a schermo

document.getElementById("price").innerHTML=finalprice.toFixed(2);
