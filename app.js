const firstPage = document.querySelector('.section-main')
const thankYouPage = document.querySelector('.section-thank-you')
const submitButton = document.getElementById('submit')
const rating = document.getElementById('rating')
const rates = document.querySelectorAll('.btn-number-background')

submitButton.addEventListener('click', () => {
  thankYouPage.classList.remove('hidden')
  firstPage.style.display = 'none'
})

rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rating.innerHTML =rate.innerHTML
  })
})
