const app = document.getElementById('app');
const btns = document.querySelectorAll('.button')

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const btn = event.target
    btn.classList.toggle('idle')
    btn.classList.toggle('walk')
  });
})

const string = "01100"
console.log(string[3])
