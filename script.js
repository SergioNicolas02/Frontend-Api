let movies = [
      {
        id: "30363933-3536-6130-2d32-6130342d3131",
        carMovieName: "Baby Driver",
        carMovieYear: "2017",
        duration: 113
      },
      {
        id: "30353866-6331-3035-2d32-6130362d3131",
        carMovieName: "Baby Driver",
        carMovieYear: "2017",
        duration: 113
      },
      {
        id: "30613465-3735-3838-2d32-6130622d3131",
        carMovieName: "Baby Driver",
        carMovieYear: "2017",
        duration: 113
      },
      {
        id: "30373434-6265-3566-2d32-6130642d3131",
        carMovieName: "Baby Driver",
        carMovieYear: "2017",
        duration: 113
      },
      {
        id: "30303132-3561-3461-2d32-6130612d3131",
        carMovieName: "Baby Driver",
        carMovieYear: "2017",
        duration: 113
      }
    ];

    document.addEventListener("DOMContentLoaded", () => {
      renderMovies();
      document.getElementById("movieForm").addEventListener("submit", saveMovie);
    });

    function renderMovies() {
      const tbody = document.getElementById("movieTableBody");
      tbody.innerHTML = "";

      movies.forEach(movie => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${movie.id}</td>
          <td>${movie.carMovieName}</td>
          <td>${movie.carMovieYear}</td>
          <td>${movie.duration}</td>
          <td>
            <button onclick='editMovie("${movie.id}")'>Editar</button>
            <button onclick='deleteMovie("${movie.id}")'>Eliminar</button>
          </td>
        `;
        tbody.appendChild(row);
      });
    }

    function saveMovie(e) {
      e.preventDefault();

      const id = document.getElementById("movieId").value;
      const name = document.getElementById("name").value;
      const year = document.getElementById("year").value;
      const duration = document.getElementById("duration").value;

      if (id) {
        // Actualizar
        const index = movies.findIndex(m => m.id === id);
        if (index !== -1) {
          movies[index].carMovieName = name;
          movies[index].carMovieYear = year;
          movies[index].duration = duration;
        }
      } else {
        // Agregar nuevo
        const newMovie = {
          id: crypto.randomUUID(), // genera un ID único
          carMovieName: name,
          carMovieYear: year,
          duration: duration
        };
        movies.push(newMovie);
      }

      renderMovies();
      clearForm();
    }

    function editMovie(id) {
      const movie = movies.find(m => m.id === id);
      if (!movie) return;

      document.getElementById("movieId").value = movie.id;
      document.getElementById("name").value = movie.carMovieName;
      document.getElementById("year").value = movie.carMovieYear;
      document.getElementById("duration").value = movie.duration;
    }

    function deleteMovie(id) {
      if (!confirm("¿Deseas eliminar esta película?")) return;
      movies = movies.filter(m => m.id !== id);
      renderMovies();
    }

    function clearForm() {
      document.getElementById("movieForm").reset();
      document.getElementById("movieId").value = "";
    }