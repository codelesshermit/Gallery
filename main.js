
let image = document.querySelectorAll(".image");
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal-body");
let closeBtn = document.querySelector(".close");




image.forEach((image)=>{
  image.addEventListener('click', (e)=>{
  console.log(e);

  e.preventDefault();

 modal.style.display = "block";

let imageLink = image.getAttribute('src');
document.querySelector(".modal-body a").setAttribute("href", imageLink);

let displayName = image.getAttribute('alt');
let title = document.querySelector(".title");
title.append(displayName);
  
 closeBtn.addEventListener( 'click', function(){  
  modal.style.display = "none";

  image.removeEventListener('click', e);
});
//alert(`you clicked on Image named ${displayName}`);
}) }
);

