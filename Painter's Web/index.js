menu = document.querySelector('.menu')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')

menu.addEventListener('click', ()=>{
 navbar.classList.toggle('hnav');
 navList.classList.toggle('vnav');
})

 const urlParams = new URLSearchParams(window.location.search);
 const imageName = urlParams.get('image');


 const imageElement = document.getElementById('selectedImage');
 if (imageName) {
   imageElement.src = imageName;
 }
