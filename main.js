
let image = document.querySelectorAll(".image");


image.forEach((image)=>{
  image.addEventListener('click', (e)=>{
  console.log(e);

  e.preventDefault();


     let displayName = image.getAttribute('alt');

  

alert(`you clicked on Image named ${displayName}`);
}) }
);