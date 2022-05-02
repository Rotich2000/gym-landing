const nav = document.querySelector('.nav')

window.addEventListener('scroll',function(){
    const offset = window.pageYOffset;
    if (offset > 75){
        nav.classList.remove('navbar')
        nav.classList.add('scroll')
    }else{
        nav.classList.remove('scroll')
        nav.classList.add('navbar')
    }
})

// Toggle bar resposniveness
 const togglebar = document.querySelector('.toggle')
 const menu = document.querySelector('ol')

 const navToggle = () => {
     togglebar.classList.toggle('active')
     menu.classList.toggle('active')
 }