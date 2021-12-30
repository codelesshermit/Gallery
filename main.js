
let image = document.querySelector(".image");
image.addEventListener('click', (e)=>{
    console.log(e);
    e.preventDefault();
  let imageAlt = document.querySelector(".image").getAttribute('alt');
  alert(`you clicked on ${imageAlt}`);
})