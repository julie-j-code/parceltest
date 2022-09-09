// pour les requêtes GET

export class Posts {

    promesse= ()=> fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            return response.json();
        }).then(donnees => {
            // console.log(donnees);
            // console.log(donnees[0]);
            for (let donnee of donnees) {
                const para=document.createElement("p")
                para.textContent=`titre article ${donnee.id}: ${donnee.title}`
                document.querySelector("#posts").appendChild(para)
                // console.log(donnee.title);
                // console.log(donnee.body)
            }
        }

    
        
        )

}


