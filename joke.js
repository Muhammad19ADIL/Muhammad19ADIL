// const shuffle = () => {
//     let para = document.querySelectorAll('p')
//     let arr = Array.from(para)
//     arr.forEach(element => {
//         element.style.visibility = 'hidden'
//     });
//     let randNum = Math.floor(Math.random() * 6)
//     let randJoke = arr[randNum]
//     randJoke.style.visibility = 'visible'
// }



const shuffle = () => {
    let jokesD = document.getElementById('jokes-display')
    let para = document.querySelectorAll('p')
    let arr = Array.from(para)
    // console.log(arr)
    let randNum = Math.floor(Math.random() * arr.length)
    jokesD.innerHTML = arr[randNum].innerHTML
    // console.log(jokesD);
}

const addNewJokes = ()=>{
let user = document.getElementById('new-joke').value 
// console.log(user);
let a = document.createElement('p')
let as = document.getElementById('container').appendChild(a)
as.innerHTML = user
// console.log(as);
}