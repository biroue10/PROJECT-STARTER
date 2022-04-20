const progress = document.getElementById('progress');
const circle = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentactive = 1;
//add event listener on next button
next.addEventListener('click',()=>{
    currentactive++;
    console.log(currentactive);
});

