console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    fetchAllDogs()
    fetchAllBreeds()
  })

  //  start challenge 1
  const fetchAllDogs = () => {
      fetch('https://dog.ceo/api/breeds/image/random/4')
      .then(res => res.json())
      .then(data => data.message.forEach(displayImages))
  }

const displayImages = (image) => {
    const dogImageContainer = document.querySelector("#dog-image-container")
    const dogImage = document.createElement("img")
    dogImage.src = image

    dogImageContainer.append(dogImage)
}  

  //  start challenge 2
const fetchAllBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => displayBreeds(data.message))   
}

const displayBreeds = (dogBreeds) => {
    const dogBreedsContainer = document.querySelector("#dog-breeds")

    for (breed in dogBreeds){
        const dogBreed = document.createElement("li")
        //  start challenge 3
        dogBreed.addEventListener('click', () => {
            dogBreed.style.color = "magenta"
        })
        //  end challenge 3
        dogBreed.textContent = breed
        dogBreedsContainer.append(dogBreed)

        // part of c4
        filterDogBreeds(dogBreeds)
    }
} 

const filterDogBreeds = (dogBreeds) => {
     //  start challenge 4
     const dropdown = document.querySelector('#breed-dropdown')
     const dogBreedsContainer = document.querySelector("#dog-breeds")


     dropdown.addEventListener('change', (event) => {
         const dropdownDogs = Object.keys(dogBreeds).filter(breed => breed.startsWith(event.target.value))
         let ul = document.querySelector('#dog-breeds');
   
         removeChild(ul)


         dropdownDogs.forEach(dogBreed => {
                 const li = document.createElement("li")
                 //  start challenge 3
                 li.addEventListener('click', () => {
                     li.style.color = "magenta"
                 })
                 //  end challenge 3
                 li.textContent = dogBreed
                 dogBreedsContainer.append(li)
         })
     })
}

const removeChild = (element) => {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
}