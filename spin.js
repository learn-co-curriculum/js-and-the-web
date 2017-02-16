let image = document.querySelector(".image")
image.onclick = toggleClass;

function toggleClass(){
  if(image.className == 'image'){
      image.className = ''
  } else {
      image.className = 'image'
  }

}
