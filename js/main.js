// this is a self-invoking anonymous function
//it's called the module pattern

//go into the document and reference the element you want to work with
let theHeader = document.querySelector("#main-header");

function logElement() {
    console.log('clicked on an element!');
}

//listen for a user event, then do something
// the "do something" is the function we run when the element is clicked 
theHeader.addEventListener("click", logElement);

(() => {
// this is a JS comment
console.log('this is some text');
})();