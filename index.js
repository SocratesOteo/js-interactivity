console.log('hello world')

document.querySelector('form').addEventListener('submit',addMovie)
const message = document.querySelector('#message')
let movieAdded 

function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "x"
    deleteButton.addEventListener('click', deleteMovie)
    movie.appendChild(deleteButton)

    const list = document.querySelector('ul')
    list.appendChild(movie)

    inputField.value = ''
    movieAdded = true
}

function deleteMovie(event){
    message.textContent = "movie deleted"

    //revealMessage()
    event.target.parentNode.remove()

    if (movieAdded === true){
        message.remove()
        
        
        
    }else if (movie === false){
        
        message.textContent = "movie deleted"
    }
    movie = false

}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.conatins('checked') === true ){
    message.textContent = 'movie watched'

    }else{
        message.textContent = 'movie added back'
    }
    
}