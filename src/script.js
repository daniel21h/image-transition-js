// Rotation time
let time = 5000,
  currentImageIndex = 0,
  images = document
    .querySelectorAll('#slider img')
  max = images.length

function nextImage() {
  images[currentImageIndex]
    .classList.remove('selected')

  currentImageIndex++

  if (currentImageIndex >= max) {
    currentImageIndex = 0
  }

  images[currentImageIndex]
    .classList.add('selected')
}

function start() {
  setInterval(() => {
    // Image exchange
    nextImage()
  }, time)
}

// It will executed after the window load
window.addEventListener('load', start)