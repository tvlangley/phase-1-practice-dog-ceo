// console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed')
    fetchDogLinks()
    fetchAllDogBreeds()
});

const fetchDogLinks = () => {
    // challenge 1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    // step 1: fetch data from url
    fetch(imgUrl)
        // step 2: transform/parse response data
        .then(response => response.json())
        // step 3: use for each to loop through data to add image element to the DOM
        .then(data => data.message.forEach(link => {
            // create an img element
            const img = document.createElement("img")
            // set src of img to link
            img.src = link
            // append img to DOM
            document.getElementById("dog-image-container").appendChild(img)
        }))
}

const fetchAllDogBreeds = () => {
    // challenge 2
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    // step 1: fetch data from url
    fetch(breedUrl)
        // step 2: transform/parse response data
        .then(response => response.json())
        // step 3: add breeds to DOM in ul
        .then(data => {
            for (const breedName in data.message) {
                // console.log(data.message)
                // console.log(breedName)

                // create an li element
                const li = document.createElement("li")
                // set text of li to dog breed
                li.innerText = breedName
                // append li to DOM
                const dogBreeds = document.querySelector("#dog-breeds")
                dogBreeds.appendChild(li)

                // challenge 3
                // add event listener (click event) to li
                li.addEventListener('click', (event) => {
                    // change li color
                    event.target.style.color = "fuchsia"
                    // li.style.color = "fuchsia"
                })
              }

              // invoking function for challenge 4
              // passing ONLY the keys (which in this case are the breed names) of the message object into the filterByBreed function
              filterByBreed(Object.keys(data.message))
        })
}

const filterByBreed = (breeds) => {
    // challenge 4

    // main goal: filter breeds when the user selects a letter using the dropdown

    // step 1: perform some action when the dropdown changes
    document.getElementById('breed-dropdown').addEventListener('change', (event) => {
       
        // step 4: clear previous breeds from dog breeds list (ul)
        document.querySelector('#dog-breeds').innerHTML = ""

        // step 2: filter out non-dropdown letter breeds
        const filteredBreeds = breeds.filter(dog => dog[0] === event.target.value)
            
        // step 3: render chosen breeds by letter to the DOM (with the color changing from challenge 3)
        filteredBreeds.forEach(breed => {
            let li = document.createElement('li')
            li.textContent = breed
            document.querySelector('#dog-breeds').append(li)
            li.addEventListener('click', () => {
                li.style.color = 'red'
            })
        })
    })
}