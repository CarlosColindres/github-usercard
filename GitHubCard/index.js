import axios from 'axios'
  // STEP 1: using axios, send a GET request to the following URL
  //   (replacing the placeholder with your Github name):
  //   https://api.github.com/users/<your name>


  // STEP 2: Inspect and study the data coming back, this is YOUR
  //   github info! You will need to understand the structure of this
  //   data in order to use it to build your component function

  //   Skip to STEP 3.

  // STEP 4: Pass the data received from Github into your function,
  //   and append the returned markup to the DOM as a child of .cards

const container = document.querySelector('.cards')

  // STEP 5: Now that you have your own card getting added to the DOM, either
  //   follow this link in your browser https://api.github.com/users/<Your github name>/followers,
  //   manually find some other users' github handles, or use the list found at the
  //   bottom of the page. Get at least 5 different Github usernames and add them as
  //   Individual strings to the friendsArray below.

  //   Using that array, iterate over it, requesting data for each user, creating a new card for each
  //   user, and adding that card to the DOM.


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']

followersArray.forEach(elem => {
  axios.get(`https://api.github.com/users/${elem}`)
  .then(res => container.appendChild(cardMaker(res.data)))
  .catch(e => console.log(e))
})


  // STEP 3: Create a function that accepts a single object as its only argument.
  //   Using DOM methods and properties, create and return the following markup:

  //   <div class="card">
  //     <img src={image url of user} />
  //     <div class="card-info">
  //       <h3 class="name">{users name}</h3>
  //       <p class="username">{users user name}</p>
  //       <p>Location: {users location}</p>
  //       <p>Profile:
  //         <a href={address to users github page}>{address to users github page}</a>
  //       </p>
  //       <p>Followers: {users followers count}</p>
  //       <p>Following: {users following count}</p>
  //       <p>Bio: {users bio}</p>
  //     </div>
  //   </div>

function cardMaker(data) {
  const divCard = document.createElement('div')
  divCard.setAttribute('class' , 'card')
  const img = document.createElement('img')
  img.setAttribute('src', data.avatar_url)
  divCard.appendChild(img)
  const divCardInfo = document.createElement('div')
  divCardInfo.setAttribute('class', 'card-info')
  divCard.appendChild(divCardInfo)
  const h3 = document.createElement('h3')
  h3.setAttribute('class', 'name')
  h3.textContent = data.name
  divCardInfo.appendChild(h3)
  const p1 = document.createElement('p')
  p1.setAttribute('class', 'username')
  p1.textContent = data.login
  divCardInfo.appendChild(p1)
  const p2 = document.createElement('p')
  p2.textContent = `Location: ${data.location}`
  divCardInfo.appendChild(p2)
  const p3 = document.createElement('p')
  p3.textContent = `Profile:`
  divCardInfo.appendChild(p3)
  const a = document.createElement('a')
  a.setAttribute('href', data.html_url)
  a.textContent = data.html_url
  p3.appendChild(a)
  const p4 = document.createElement('p')
  p4.textContent = `Followers: ${data.followers}`
  divCardInfo.appendChild(p4)
  const p5 = document.createElement('p')
  p5.textContent = `Following: ${data.following}`
  divCardInfo.appendChild(p5)
  const p6 = document.createElement('p')
  p6.textContent = `Bio: ${data.bio}`
  divCardInfo.appendChild(p6)
  return divCard
}


