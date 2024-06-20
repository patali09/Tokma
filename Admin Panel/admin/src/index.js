const dropArea = document.getElementsByClassName('drop-area')
const inputFile = document.getElementsByClassName('input-file')
const imageView = document.getElementsByClassName('img-view')


inputFile.addEventListener("change",uploadImage);

function uploadImage(){

  let imgLink = URL.createObjectURL(inputFile.files[0])
  imageView.style.backgroundImage = `url(${imgLink})`
}
