const randomFactText = document.getElementById("random-fact")
const getNewFactBtn = document.getElementById("new-fact-btn")
const postBtn = document.getElementById("post-btn")
const comments = document.getElementById("comments")

fetch(`https://uselessfacts.jsph.pl/api/v2/facts/today`)
    .then(res => res.json())
    .then(data => randomFactText.innerHTML = `<p>${data.text}</p>`)

function getNewFact(){
    fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
        .then(res => res.json())
        .then(data => {
            randomFactText.innerHTML= `
            <p>${data.text}</p>
            `
        })
}

// async and await with try catch blocks.
// Can use the https://jsonplaceholder.typicode.com/
const getComments = async() => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
        const comment = await response.json();
        const firstTen = comment.slice(0,10).map(comm => {
            return `
            <h3>${comm.name.toUpperCase()}</h3>
            <p>${comm.body}</p>
            <hr class="comm-para">
            `
        }).join('')
        comments.innerHTML = firstTen;
       
    }catch(error){
        console.log(error.message)
    }

}

getComments()
getNewFactBtn.addEventListener("click", getNewFact)

const handlePostClick = () => {
    console.log("Yaay")
}

postBtn.addEventListener("click",handlePostClick)

