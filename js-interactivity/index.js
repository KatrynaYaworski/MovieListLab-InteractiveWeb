let message = document.querySelector('#message')

const revealMessage = () =>{
    message.classList.remove('hide');

    setTimeout(()=>{ 
        message.classList.add('hide');
    }, 2000);
}

let addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;

    movieTitle.addEventListener('click', crossOffMovie);

    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    let ul = document.querySelector('ul');
    ul.appendChild(movie);

    inputField.value = '';
}

let deleteMovie = (event) => {
    let movieTitle = event.target.parentNode.firstChild.textContent;
    console.log(movieTitle);
    event.target.parentNode.remove();
    message.textContent = `${movieTitle} deleted`;
    revealMessage();
}

let crossOffMovie = (event) =>{
    event.target.classList.toggle('checked');

    let movieTile = event.target.textContent;

    if(event.target.classList.contains('checked')){
        message.textContent = `${movieTile} Watched!`
    }else{
        message.textContent = `${movieTile} added back!`
    }
    revealMessage();
}

document.querySelector('form').addEventListener('submit', addMovie);


