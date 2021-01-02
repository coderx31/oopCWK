/* hover indicator */
var marker = document.querySelector('#marker');
var item = document.querySelectorAll('nav a');

function indicator(e){
    marker.style.left = e.offsetLeft +'px';
    marker.style.width = e.offsetWidth +'px';
}

item.forEach((link) =>{
    link.addEventListener('mousemove', (e) =>{
        indicator(e.target);
    });
});

/* scroll indicator */

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');

}