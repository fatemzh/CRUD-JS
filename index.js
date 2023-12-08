// ID selectors
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts")

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
        console.log("Post crée");
        acceptData();
    }
}

// Création objet data
let data = {};

// Fonction qui récupère les infos des inputs et qui les stock dans l'objet data
let acceptData = () =>{
    data["text"] = input.value;
    console.log(data)

    createPost();
}

//Fonction pour créer les posts
let createPost = () =>{
    posts.innerHTML += `
    <br>
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
};

// Fonction supprimer post
let deletePost = (e) => {
    
}
