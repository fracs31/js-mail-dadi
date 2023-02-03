let option = prompt("1: per la mail 2: per i dadi"); //opzione

//Mail
if (option == "1") {
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
}

//Dadi
if (option == "2") {
    let numberPc = Math.floor(Math.random() * (6 - 1 + 1) + 1); //numero casuale tra 1 e 6 del computer
    let numberUser = Math.floor(Math.random() * (6 - 1 + 1) + 1); //numero casuale tra 1 e 6 dell'utente

    console.log("Numero computer: " + numberPc); //stampa del numero del computer
    console.log("Numero utente: " + numberUser); //stampa del numero dell'utente

    //Se il numero del pc è maggiore del numero dell'utente
    if (numberPc > numberUser) {
        console.log("Il computer vince!"); //il computer vince
    } else if (numberPc < numberUser) { //Se il numero del pc è minore del numero dell'utente
        console.log("L'utente vince!"); //l'utente vince
    } else if (numberPc == numberUser) { //Se il numero del pc e il numero dell'utente sono uguali
        console.log("Parità"); //parità
    }
}