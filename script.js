//Snack 1

//Ottieni il titolo di un post con una Promise.
//Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un 
// post dal link https://dummyjson.com/posts/{id}
function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Post non trovato');
                }
                return response.json();
            })
            .then(data => resolve(data.title))
            .catch(error => reject(error.message));
    });
}

//Snack 2

//Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. 
// Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            const incastrato = Math.random() < 0.2;
            if (incastrato) {
                reject('Il dado si è incastrato!');
            } else {
                resolve(randomNumber);
            }
        }, 3000);
    });
}