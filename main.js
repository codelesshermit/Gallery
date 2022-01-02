
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
  
   
   let smallImage = document.createElement('img');
   smallImage.setAttribute('src', imageLink);
   smallImage.style.width = "250px";
   smallImage.style.height = "250px";
   smallImage.style.margin = "2px";
   smallImage.style.marginLeft = "42px";
   modalContent.append(smallImage);
  
  let displayName = image.getAttribute('alt');
  let title = document.querySelector(".title");
  title.append(displayName);
    
 closeBtn.addEventListener( 'click', function(){  
  modal.style.display = "none";
  });

  window.onclick = function (){
    if (event.target == modal){
      modal.style.display = "none";
    };
  };
//alert(`you clicked on Image named ${displayName}`);
}) }
);




