// Your code goes here


// mouseenter event that changes first h2 tag to a random color and reverts to grey once left
const randomColor = Math.floor(Math.random() * 16777215).toString(16);

const h2check = document.querySelectorAll('h2')
console.log(h2check[0])

h2check[0].addEventListener("mouseenter", () => {
    h2check[0].style.color = "#" + randomColor;
});

h2check[0].addEventListener("mouseleave", () => {
    h2check[0].style.color = 'grey';
})


// keydown event that changes background color and font color of page when up or down arrow is pressed
const keyDownBgColorToggle = document.querySelector('body')
console.log(keyDownBgColorToggle)
keyDownBgColorToggle.addEventListener("keydown", (e) => {
    if (e.key === 'ArrowDown') {
        keyDownBgColorToggle.style.backgroundColor = "black"
        document.body.style.color = 'white'
    } if (e.key === 'ArrowUp') {
        keyDownBgColorToggle.style.backgroundColor = "white"
        document.body.style.color = 'black'
    } else {
        return;
    }
});


// wheel event that changes font and color of first text content class
const wheel = document.querySelector('.text-content')
console.log(wheel)

wheel.addEventListener('wheel', (event) => {
    event.target.style.fontFamily = 'Segoe UI'
    event.target.style.color = 'tomato';
});

console.log(wheel)

window.addEventListener('load', (e) => {
    console.log(`The page has loaded.`)
})

// resize event

const heightO = document.querySelector('#height');
const widthO = document.querySelector('#width');

function reportWindowSize() {
    heightO.style.fontWeight = 'bold'
    heightO.textContent = window.innerHeight;
    widthO.style.fontWeight = 'bold'
    widthO.textContent = window.innerWidth;
}

window.addEventListener('resize', reportWindowSize)

// focus event

const form = document.querySelector('#form');
console.log(form)

form.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = '#d3d3d3'
})

// blur event (which actually isnt a blur but when the focused element is deselected)

form.addEventListener('blur', (event) => {
    event.target.style.background = 'white'
})

// scroll event

var scrolltop = 0

window.addEventListener('scroll', () => {
    let imgGrow = document.querySelector('img');
    let st = window.pageYOffset || document.documentElement.scrolltop;
    if (st > scrolltop) {
        imgGrow.style.transform = "scale(1.5)";
        imgGrow.style.transition = "transform 0.5s";
    } else {
        imgGrow.style.transform = "scale(1)";
        imgGrow.style.transition = "transform 0.5s";
    }


})

// select event

form.addEventListener('select', (event) => {
    event.target.style.color = 'orange'
})

// dblclick event

const imgDblclick = document.querySelectorAll('img')
console.log(imgDblclick)

imgDblclick.forEach(e => {
    e.addEventListener('dblclick', (event) => {
        event.target.style.transform = "scale(.75)";
    })



})
console.log(imgDblclick)

// online event

window.addEventListener('load', (event) => {
    const statusDisplay = document.getElementById("connection");
    statusDisplay.textContent = navigator.onLine ? "Online" : "Offline";
});


window.addEventListener("offline", (event) => {
    const statusDisplay = document.getElementById("connection");
    statusDisplay.textContent = "Offline"
});

window.addEventListener('online', (event) => {
    const statusDisplay = document.getElementById("connection");
    statusDisplay.textContent = "Online";
});

// nested event propagation

const divBtn = document.querySelector('.btn')
const contentPick = document.querySelector('.content-pick')

console.log(contentPick)

divBtn.style.border = '3px solid black';
divBtn.style.height = '20px';
divBtn.style.width = '90px';
divBtn.style.padding = '.1%'
divBtn.style.backgroundColor = 'yellow';

contentPick.addEventListener('click', (event) => {
    console.log(`Passing through ${event.currentTarget.nodeName}`)
})

divBtn.addEventListener('click', (event) => {
    divBtn.style.backgroundColor = 'orange';
    divBtn.style.border = '3px dotted #666';
    divBtn.style.fontFamily = "Segoe UI";
    event.stopPropagation()
    console.log(`Passing through ${event.currentTarget.nodeName}`)
})


// preventDefault

const navHeader = document.querySelectorAll('.nav-link')


navHeader.forEach(e => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(`${event.defaultPrevented}`)
    })
})
console.log(navHeader)










































// // drag and drop event

// // create a var to select the container
// const contentDestination = document.querySelector('.content-destination');
// console.log(contentDestination)

// // create div box element for image to be dragged to

// let divBox = document.createElement('div')

// // set div box elements margin, border, padding and color

// divBox.style.border = '3px solid black';
// divBox.style.height = '200px';
// divBox.style.width = '600px';
// divBox.className = 'dropbox';

// console.log(divBox)


// // append div box to div section with image
// contentDestination.appendChild(divBox)

// // apply limegreen border to image when grabbing and reset when released
// function dragStart(e) {
//     this.style.border = "3px solid limegreen";

//     dragSrcEle = this;
//     e.dataTransfer.effectAllowed = 'move';
//     e.dataTransfer.setData('text/html', this.innerHTML);
// }

// function dragEnd(e) {
//     this.style.border = '';
// }

// function dragOver(e) {
//     if (e.preventDefault) {
//         e.preventDefault();
//     }

//     e.dataTransfer.dropEffect = 'move'

//     return false;
// }

// function dragEnter(e) {
//     this.classList.add('over');
// }

// function dragExit(e) {
//     this.classList.remove('over');
// }

// function dropHandle(e) {
//     if (e.stopPropagation) {
//         e.stopPropagation();
//     }
//     if (dragSrcEle != this) {
//         dragSrcEl.innerHTML = this.innerHTML;
//         this.innerHTML = e.dataTransfer.getData('text/html')
//     }
//     return false
// }

// // create drag start and drag end sequence
// let imgDrag = document.querySelectorAll('img, .dropbox');
// imgDrag.forEach(e => {
//     e.addEventListener('dragstart', dragStart, false);
//     e.addEventListener('dragover', dragOver, false);
//     e.addEventListener('dragenter', dragEnter, false);
//     e.addEventListener('dragleave', dragExit, false);
//     e.addEventListener('drop', dropHandle, false);
//     e.addEventListener('dragend', dragEnd, false);
// });

// console.log(imgDrag)


// // add dotted lines to drop box when image is grabbed
//     // create dropbox over class that is added to style tags at head of page
// // const style = document.createElement('style');
// // style.className = 'over';

// // let header = document.getElementsByTagName('head')[0];
// // header.appendChild(style);
// // console.log(header)

// // // set border of over box
// // const dropboxOver = document.getElementsByClassName('over')
// // console.log(dropboxOver)
// // dropboxOver.style.border = '3px dotted #666';
// // console.log(dropboxOver)





