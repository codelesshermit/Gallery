
let image = document.querySelectorAll(".image");


image.addEventListener('click', (e)=>{
    console.log(e);
    let imageAlt = document.querySelector(".image").getAttribute('alt');
    e.preventDefault();
 
  alert(`you clicked on Image named ${imageAlt}`);
}) 