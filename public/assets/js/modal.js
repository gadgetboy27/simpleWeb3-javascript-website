// Get DOM Elements
const modalBtn = document.querySelectorAll('[data-modal-target]')
const modal = document.querySelectorAll('.modal')
const closeBtn = document.querySelectorAll('.closeBtn')

// Modal click Events
modalBtn.forEach(el => {
  el.addEventListener('click', event => toggleModal(event.currentTarget.getAttribute('data-modal-target')))
})
   
closeBtn.forEach(el => {
  el.addEventListener('click', event => toggleModal(event.currentTarget.closest('.modal').id))
})

modal.forEach(el => {
  el.addEventListener('click', event => {
    if(event.currentTarget===event.target) toggleModal(event.currentTarget.id)
  })
})

function toggleModal(modalId) {
  const modal = document.getElementById(modalId)

  if(getComputedStyle(modal).display === 'flex') {
    modal.classList.add('modal-hide')
    setTimeout(() => {
      modal.style.display = 'none'
      modal.classList.remove('modal-show', 'modal-hide')
      document.body.style.overflow = 'initial'
    }, 200)
  }
  else {
    modal.style.display = 'flex'
    modal.classList.add('modal-show')
    document.body.style.overflow = 'hidden'
  }
}
