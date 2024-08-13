const favoriteMovies = document.getElementById('favoriteMovies');  

function displayFavorites() {  
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];  
    favoriteMovies.innerHTML = '';  
    favorites.forEach(movie => {  
        const movieCard = `  
            <div class="bg-gray-800 p-4 rounded">  
                <h2>${movie.title}</h2>  
                <textarea id="notes-${movie.id}" placeholder="Add your notes here..." class="mt-2 p-2 w-full"></textarea>  
                <button onclick="saveNotes(${movie.id})" class="mt-2 bg-blue-500 p-2 rounded">Save Notes</button>  
            </div>  
        `;  
        favoriteMovies.innerHTML += movieCard;  
    });  
}  

function saveNotes(id) {  
    const notes = document.getElementById(`notes-${id}`).value;  
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];  
    const movie = favorites.find(movie => movie.id === id);  
    if (movie) {  
        movie.notes = notes;  
        localStorage.setItem('favorites', JSON.stringify(favorites));  
        alert('Notes saved!');  
    }  
}  

displayFavorites();
