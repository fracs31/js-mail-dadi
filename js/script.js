let mail = ["emmastone@gmail.com", "tomholland@gmail.com", "bradpitt@gmail.com", "margotrobbie@gmail.com", "sylvesterstallone@gmail.com"]; //array di mail
let search = prompt("Inserire l'email da cercare: "); //ricerca
let found = false; //variabile per controllare se la mail è stata trovata 

console.log(mail); //stampa in console array di mail
console.log(search); //stampa in console della mail cercata dall'utente

//Ciclo
for (let i = 0; i < mail.length; i++) {
    //Se la mail inserita dall'utente è presente nell'array
    if (search == mail[i]) {
        console.log("MAIL TROVATA " + search + " = " + mail[i]); //stampa in console della mail trovata
        found = true; //mail trovata
    }
}

//Se la mail non è stata trovata
if (found == false) {
    console.log("MAIL NON TROVATA"); //stampo in console un messaggio di errore
}