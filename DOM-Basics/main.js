//Grab single element
const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#my-form'));

//Grab Multiple element
const nodeItems = document.querySelectorAll('.item');
const colItems = document.getElementsByClassName('item');
// console.log(document.getElementsByTagName('li'));
// console.log([]);

// nodeItems.forEach(item => console.log(item))
// colItems.forEach(item => console.log(item))
for(let i=0; i<colItems.length; i++){
    console.log(colItems[i]);
}