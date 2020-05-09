// Get DOM Elements
const modal = document.querySelector('#prod-modal')
const modalBtn = document.querySelectorAll('#modalBtn')
const closeBtn = document.getElementsByClassName('closeBtn')[0]

// Events with loop to open multiple modal
for (i = 0; i < modalBtn.length; i++) {
modalBtn[i].addEventListener('click', openModal)
}
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

// Open
function openModal() {
  modal.style.display = 'block'
}

// Close
function closeModal() {
  modal.style.display = 'none'
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none'
  }
}

console.log(modalBtn)