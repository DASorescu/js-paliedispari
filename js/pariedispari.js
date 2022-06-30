// far inserire all'utente i'imput pari o dispari
// far inserire all'utente un numero da 1 a 5 
// funzione per generare un numero random 
// funzione per somma 
// costruire al funzione che determini se un numero e pari o dispari 
// analizzare attraverso la funzione creata la somma 
// dichiarare se e pari o dispari in console 

// ? chiedo all'utente di scegliere pari o dispari  !
let userChoice;
do{
     userChoice = prompt("scegli pari o dispari!");
}while(userChoice !== "pari" && userChoice !== "dispari");


// ? chiedo all'utente di inserire un numero e mi assicuro che sia tale !
let userNumber;
do{
    userNumber = parseInt(prompt("inserire un NUMERO da 1 a 5","3"));
}while(   userNumber > 5 || userNumber < 1 || isNaN(userNumber) );

let message = ("Il risultato della somma tra il numero da lei inserito e quello casualmente generato e': ");

// //FUNZIONE PER GENERARE UN RANDOM NUMBER DA 1 A 5 AL PC 
function randomNumber(min , max){
    max++ 
    return Math.floor(Math.random() * (max - min) ) + min;
}
let comNumber = (randomNumber(1,5));

console.log(comNumber);

// // CALCOLO LA SOMMA 

let somma =  userNumber + comNumber;

console.log(somma);

// //FUNZIONE PER STABILIRE SE LA SOMMA E PARI O DISPARI 

function isEven(a){
   
    return a % 2 === 0  ;
    
}

if(isEven(somma) && userChoice === ("pari")){
    console.log("il giocatore vince" );
}else if(!isEven(somma) && userChoice === ("dispari")){
    console.log("il giocatore vince" );
} else console.log("il computer vince ");
