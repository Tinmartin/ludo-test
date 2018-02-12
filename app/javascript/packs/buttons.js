const app = document.getElementById('app');
const btns = document.querySelectorAll('.button')

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const btn = event.target
    toggleBtn(btn)
    counter = btn.querySelector('.counter')
    value = parseInt(counter.innerText)
    if (value < 9) {
      counter.innerText = value + 1
    }
  });
})

function toggleBtn(btn) {
  if (btn.classList.contains("dragon-ball") || btn.classList.contains("nuclear")) {
    btn.classList.toggle('dragon-ball')
    btn.classList.toggle('nuclear')
  } else {
    btn.classList.toggle('idle')
    btn.classList.toggle('walk')
  }
}
// refresh
  // if game started
  // if game finished
