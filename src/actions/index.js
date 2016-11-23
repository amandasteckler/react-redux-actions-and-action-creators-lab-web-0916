// define your actions here!
export function addMovie(movie){
  return {
    type: 'ADD_MOVIE',
    movie: {
      title: movie.title
    }
  }
}

export function deleteMovie(movie){
  return {
    type: 'DELETE_MOVIE',
    movie: {
      title: movie.title
    }
  }
}

export function updateUsername(user){
  return {
    type: 'UPDATE_USERNAME',
    username: user
  }
}

export function resetUsername(user){
  return {
    type: 'RESET_USERNAME',
    username: 'default'
  }
}
