// 1 - 2

let myDiv = document.querySelector('div#content');

// let myEvent = (e) => {
//     console.log(e.target.innerText);
// }

// myDiv.addEventListener('click', myEvent);

//3 
let myEvent = (e) => {
    var myText = e.target; 
    myText.style = "border: solid 2px red"
}

myDiv.addEventListener('click', myEvent);
