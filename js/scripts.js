// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?


let counter = document.getElementById('counter')



for (let i = 0; i < 100 ; i++){

    if ((i % 3==0) && (i % 5==0)){
    console.log('frizzbuzz');
    }
    
    else if(i % 3==0){
        console.log('frizz');
    }
    
    else if (i % 5==0){
        console.log('buzz');
    }

    else {

        console.log (i);
    }
    
}