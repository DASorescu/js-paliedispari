// far inserire una parola all'utente
// creare una funzione che ribalti la parola e la confronti con quella inserita dall'utente e restituisca come valore palindroma o non palindroma 
// stampare in console il risultato 


// //parola data dall'utente
// small Validation
let userWord;
do{
    userWord = prompt("inserisci una parola" , "anna").trim();

}while(!isNaN(userWord));
// messaggio che andro' a cambiare in base al risultato del check palindromia 
let result;

// ? FUNZIONE CHE MI STABILISCE SE LA PAROLA DA ME INSERITA E' PALINDROMA O MENO 
function isPalindroma(){
    let switchedWord = '';
    for(let i = userWord.length -1 ; i >= 0; i--){
        switchedWord += userWord[i];
    }

    console.log(switchedWord);

    switchedWord === userWord ? result = ("e' palindroma") : result = ("non e' palindroma");

    return result
}

// # STAMPO IN CONSOLE IL RISULTATO 
console.log("la parola da te inserita " + isPalindroma());
        