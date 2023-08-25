/*Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero 
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

*/ 

/*//Chiedo nome, km da percorrere, età del passeggero 
document.getElementById('generate').addEventListener('click', function () {
    const userName = document.getElementById('myName').value;
    console.log(userName);
    const userDistance = Number(document.getElementById('myDistance').value);
    console.log(userDistance);
    const userAge = document.getElementById('myAge').value;
    console.log(userAge);

    //Definisco il prezzo in base ai km
    let fullPrice = 0.21 * userDistance;
    console.log(fullPrice);

    //Specifico cosa significa minorenne e over65
    const Minorenne = userAge < 18;
    console.log(Minorenne);

    const Over65 = userAge > 65;
    console.log(Over65)

    //if/else if/else
    if (userAge === Minorenne) {
        var total_1 = fullPrice - (fullPrice * 0.20);
        total_1 = total_1.toFixed(2);
        console.log(total_1);
    } else if (userAge === Over65) {
        var total_2 = fullPrice - (fullPrice * 0.40);
        total_2 = total_2.toFixed(2);
        console.log(total_2);
    } else {
        console.log(fullPrice);
    }
})*/

//Metto in variabile i dati 
const userName = document.getElementById('myName');
const userDistance = document.getElementById('myDistance');
const userAge = document.getElementById('myAge');
const generateBtn = document.getElementById('generate-btn');
const resetBtn = document.getElementById('reset-btn');

//Salvo in console
console.log('👉', userName, userDistance, userAge, generateBtn, resetBtn);

//Prezzo pieno senza esenzioni
generateBtn.addEventListener('click', function(){
    const userKm = Number(userDistance.value);
    fullPrice = 0.21 * userKm;
    fullPrice = fullPrice.toFixed(2);
    // console.log(fullPrice);

    //stampo il nome del passeggero 
    let passengerName = userName.value;
    console.log(passengerName);
    document.querySelector('.passenger').innerHTML = passengerName;

    //prezzo scontato del 20%
    let passengerAge = userAge.value;
    // console.log('passengerAge');
    if (passengerAge == 'underage') {
        totalMin = fullPrice - (fullPrice * 0.20);
        totalMin = totalMin.toFixed(2);
        console.log(totalMin);
        document.querySelector('.final-price').innerHTML = `${totalMin}€`;
    }  else if (passengerAge == 'over65') {
        totalOver = fullPrice - (fullPrice * 0.40);
        totalOver = totalOver.toFixed(2);
        console.log(totalOver);
        document.querySelector('.final-price').innerHTML = `${totalOver}€`;
    } else{
        console.log(fullPrice);
        document.querySelector('.final-price').innerHTML = `${fullPrice}€`;
    }
})



