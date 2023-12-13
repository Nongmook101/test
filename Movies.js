// Your ID, firtsname and lastname
//65130500080
class Movies {
  // Code here
  constructor() {
    this.movies = []
    
  }
  getAllMovies() {
    return this.movies
  }
  addMovie(title, director, year, genre) {
    if(arguments.length < 4) return undefined

    if(this.movies.findIndex((movie) => {
      return movie.title.toLowerCase() === title.toLowerCase() && movie.director.toLowerCase() === director.toLowerCase() 
    }) > -1) return undefined

    const newMovie = {title, director, year, genre}
    this.movies.push(newMovie)
    return newMovie
  }

  updateMovie(title, updateDetails) {
    const foundedMovie = this.movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase())
    if (foundedMovie === undefined) return undefined

    for (const detail in updateDetails) {
      foundedMovie[detail] = updateDetails[detail]
    }

    return foundedMovie
  }

  deleteMovieByTitle(title) {
    const deleteIndex = this.movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase())
    if (deleteIndex === -1) return 
    this.movies.splice(deleteIndex, 1)
}

}

module.exports = Movies
