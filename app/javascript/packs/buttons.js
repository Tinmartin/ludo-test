const app = document.getElementById('app');
colors = ['materialize-red', 'green']
color = colors[Math.floor(Math.random() * colors.length)]
const btn = `<i class="button ${color} medium menu_icon material-icons waves-effect z-depth-2">
                ac_unit
              </i>`
const classes = 'btn-container center-align'
const div = `<div class="${classes}">
              ${btn}
            </div>`
const li = `<li>${div}${div}${div}${div}${div}</li>`
const ul = `<ul></ul>`

const h1 = (text) => {return `<h1>${text}</h1>`}

app.insertAdjacentHTML('beforeend', h1('salut'))

function appendElement(nb, parent, child) {
  var times = nb;
  for(var i=0; i < times; i++){
    console.log(parent)
    parent.insertAdjacentHTML('beforeend', child)
  }
}

appendElement(5, ul, li)
