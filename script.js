const btn = document.querySelector('.advice__btn')
const id = document.querySelector('.advice__id')
const advice = document.querySelector('.advice__text')

btn.addEventListener('click', () => {
  getAdvice()
})

async function getAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice', {
    cache: "no-cache",
  })
  const data = await response.json()
  id.innerHTML = `Advice #${data.slip.id}`
  advice.innerHTML = `"${data.slip.advice}"`
}