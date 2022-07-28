let button = document.querySelector('.bttn-menu');
let nav = document.querySelector('.menu');

button.onclic = function(){
    nav.classList.toggle('open');
    nav.classList.toggle('close');
}