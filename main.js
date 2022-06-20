var imageUrls = [
  'https://i.imgur.com/BL4XVRH.jpg',
  'https://i.imgur.com/mLFUuGG.jpg',
  'https://i.imgur.com/s1JcEyK.jpg'
];

var $gallery = document.querySelector('main');
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', clickButton);

function clickButton() {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }

}

function updateGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
