{
  /* Search results (title, year) must come from OMDB, however, other values unrestricted. */
}
export default async function fetchBg(req, res) {
  const query = req.body;
  try {
    // Search for movies from OMDB (Required)
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.OMDB_KEY}&s=${query}&type=movie`
    )
      .then((response) => response.json())
      .then((data) => {
        if (typeof data.Search !== "undefined") {
          // Fetch in Array.map returns array of promises
          return Promise.all(
            data.Search.map((movie) => {
              // Get image and overview from TMDB (Image higher quality, overview unavailable at OMDB)
              return fetch(
                `https://api.themoviedb.org/3/find/${movie.imdbID}?api_key=${process.env.TMDB_KEY}&external_source=imdb_id`
              )
                .then((response) => response.json())
                .then((data) => {
                  // Default values
                  var image = "/placeholder.jpg";
                  var overview =
                    "Sorry. A description of this movie isn't available";
                  var bg = "/bg.jpg";

                  // Entry exists in TMDB
                  if (data.movie_results.length > 0) {
                    // Movie poster exists
                    if (data.movie_results[0].poster_path !== null) {
                      image =
                        "https://image.tmdb.org/t/p/original" +
                        data.movie_results[0].poster_path;
                    }
                    // Movie description exists
                    if (data.movie_results[0].overview !== null) {
                      overview = data.movie_results[0].overview;
                    }
                    // Movie background exists
                    if (data.movie_results[0].backdrop_path !== null) {
                      bg =
                        "https://image.tmdb.org/t/p/original" +
                        data.movie_results[0].backdrop_path;
                    }
                  }

                  // Create object with important information formatted
                  return {
                    id: movie.imdbID,
                    title: movie.Title,
                    year: movie.Year,
                    overview: overview,
                    image: image,
                    bg: bg,
                  };
                });
            })
          );
        } else {
          return null;
        }
      })
      .then((data) => {
        if (data !== null) {
          // Remove possible duplicates
          data = data.filter(
            (v, i, a) => a.findIndex((t) => t.id === v.id) === i
          );
        }
        // Send data back to client
        res.status(200).json({ suggestions: data });
      });
  } catch (error) {
    // Bad Request
    res.status(400);
  }
}
