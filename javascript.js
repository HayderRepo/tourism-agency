
//********set a date */

const date=document.getElementById('date');
date.innerHTML=new Date().getFullYear();



//*****close links */
const linksContainer=document.querySelector('.links-container');
const links=document.querySelector('.links');
const navToggle=document.querySelector('.nav-toggle');


navToggle.addEventListener('click',function(){
    //linksContainer.classList.toggle('show-links');
    
    const containerHeight=linksContainer.getBoundingClientRect().height;
    const linksHeight=links.getBoundingClientRect().height;
    
    if(containerHeight===0){
        linksContainer.style.height=`${linksHeight}px`
    }
    
    else{
        linksContainer.style.height=0
    }
    
})

const navbar=document.getElementById('nav');
const topLink=document.querySelector('.top-link')
//***fixed navbar */
window.addEventListener('scroll',function(){
    const scrollHeight= window.pageYOffset;
    const navHeight=navbar.getBoundingClientRect().height
    if(scrollHeight>navHeight){
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }
    if(scrollHeight>1000){
        topLink.classList.add('show-top-link')
    }else{topLink.classList.remove('show-top-link')
    }

})

//**smoth scroll */
//select links
const scrollLinks=document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(link){
link.addEventListener('click',function(e){
    //prevent default
e.preventDefault();
//navgate to a specific spot
const id =e.currentTarget.getAttribute('href').slice(1);
const element= document.getElementById(id);
//calculate the heights

const navHeight=navbar.getBoundingClientRect().height;
const containerHeight=linksContainer.getBoundingClientRect().height;
const fixedNav=navbar.classList.contains('fixed-nav')
let position=element.offsetTop - navHeight;
if(!fixedNav){
    position=position-navHeight;
}
if(navHeight>100){
    position=position+containerHeight
}
window.scrollTo({
    left:0,
    top:position,
})
linksContainer.style.height=0

})
})

