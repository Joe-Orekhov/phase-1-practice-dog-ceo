console.log('%c HI', 'color: firebrick')
const imgServer = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgServer)
.then((resp) => resp.json())
.then((array) => {
  array.message.forEach(images => 
    imageMaker(images))
})

function imageMaker(dogImgURL){
  const pupContainer = document.getElementById('dog-image-container');
  const pupIMG = document.createElement(`IMG`);
  pupIMG.src = `${dogImgURL}`;
  pupContainer.append(pupIMG)
  
}
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then((resp) => resp.json())
.then((obj) => {
  const breed = Object.keys(obj.message)
    breedLister(breed)
    breedFinder(breed)
    
})

function breedLister(breed){
  document.getElementById('dog-breeds').innerHTML = ' ';
  breed.forEach(doggo => {
  const BreedContainer = document.getElementById('dog-breeds');
  const pupBreed = document.createElement(`li`);
  pupBreed.addEventListener('click', ()=> pupBreed.style.color = 'red')
  pupBreed.innerHTML = `${doggo}`;
  BreedContainer.append(pupBreed)
  })
}

function breedFinder(breed){
  const dropDown = document.getElementById('breed-dropdown');
  let letter = dropDown.value;
  let foundBreed;
  dropDown.addEventListener('change', breedPoster)
  function breedPoster(){
    letter = dropDown.value
    foundBreed = breed.filter((pupBreeds)=> pupBreeds.startsWith(`${letter}`))
    breedLister(foundBreed)
  }
}
