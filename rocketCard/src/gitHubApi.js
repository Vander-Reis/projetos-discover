import { followers, following, repository, company, location, userImg } from './elements.js'

const user = 'Vander-Reis'


export default function getUserGithub() {

    const urlApiGithub = `https://api.github.com/users/${user}`

    fetch(urlApiGithub)
    .then( response => response.json())
    .then( data => {
        userImg.src = data.avatar_url
        followers.innerHTML = data.followers + ' Seguidores'
        following.innerHTML = data.following + ' Seguindo'
        repository.innerHTML = data.public_repos + ' Repositórios'
        company.innerHTML = data.company
        location.innerHTML = data.location
    })
}
