// Start Open Navbar Menu On Ipad
const bar =document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}
// End 


// Add Active Link To active Page
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('li a')

.forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }else{
        link.classList.remove('active');
    }
});

// console.log(activePage);

// Reveal Website Elements On Scroll
window.addEventListener('scroll', reveal);

function reveal(){
    let reveals =document.querySelectorAll('.reveal');
    
    for(let i = 0; i<reveals.length; i++){
        let windowHeight =window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint =150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('reveal-active') ;
        }else{
            reveals[i].classList.remove('reveal-active') ;
        }
    }
}


// Single Page Product Details
// Select Main Image
// const mainImg = document.getElementById("MainImg");
// const smallImg = document.getElementsByClassName("small-img");

// smallImg[0].onclick = function(){
//     mainImg.src =smallImg[0].src;
// }
// smallImg[1].onclick = function(){
//     mainImg.src =smallImg[1].src;
// }
// smallImg[2].onclick = function(){
//     mainImg.src =smallImg[2].src;
// }
// smallImg[3].onclick = function(){
//     mainImg.src =smallImg[3].src;
// }
// end