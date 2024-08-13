const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGUyYWIwZTFlNDgzN2VhMDEzNTVlZmY1ZGI2OTcyMyIsIm5iZiI6MTcyMzU0MzUxMy42MTAzNCwic3ViIjoiNjZiOWM2YjU3NDM3ZTEzNzhmMDVmYmRjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ZLl645smBjgROXeIUYsHVCnstzt4IvjL4dU1spv17RU'
   // Replace with your actual TMDb API token
    }
  };
  
  // Fetch popular movies or upcoming movies
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
      const movies = data.results;
      const movieGrid = document.getElementById('movie-grid');
  
      movies.forEach(movie => {
        // Create a movie card
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
  
        // Movie Poster
        const moviePoster = document.createElement('img');
        moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        moviePoster.alt = movie.title;
  
        // Movie Title
        const movieTitle = document.createElement('div');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = movie.title;
  
        // Movie Release Date
        const movieDate = document.createElement('div');
        movieDate.classList.add('movie-date');
        movieDate.textContent = new Date(movie.release_date).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });
  
        // Append elements to the movie card
        movieCard.appendChild(moviePoster);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieDate);
  
        // Append the movie card to the grid
        movieGrid.appendChild(movieCard);
      });
    })
    .catch(err => console.error(err));
  
