// Your code goes here

const h2check = document.querySelectorAll('h2')
console.log(h2check[0])

h2check[0].addEventListener("mouseenter", () => {
    h2check[0].style.color = 'dodgerblue'
});

const keyDownBgColorToggle = document.querySelector('body')
console.log(keyDownBgColorToggle)
keyDownBgColorToggle.addEventListener("keydown", (e) => {
    if (e.key === 'ArrowDown') {
        keyDownBgColorToggle.style.backgroundColor = "yellow"
    } if (e.key === 'ArrowUp') {
        keyDownBgColorToggle.style.backgroundColor = "orange"
    } else {
        
    }
});