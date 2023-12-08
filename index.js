// ID selectors
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("post")

//Evite les comportements par défaut 
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("Button clicked");
    formValidation();
});

//Vérifie que les chanmps sont remplies
let formValidation = () => {
    if(input.value === "")
    {
        msg.innerHTML = "Veuillez remplir le champ";
        console.log("failure")
    }
    else{
        msg.innerHTML = "Post crée";
        console.log("success");
        acceptData();
    }
}

// Création objet data
let data = {};

// Fonction qui récupère les infos des inputs et qui les stock dans l'objet data
let acceptData = () =>{
    data["text"] = input.value;
    console.log(data)
}