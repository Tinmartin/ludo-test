const app = document.getElementById('app');
colors = ['materialize-red', 'green']
color = colors[Math.floor(Math.random() * colors.length)]
const btn = `<i class="button ${color} medium menu_icon material-icons waves-effect z-depth-2">
                ac_unit
              </i>`
const classes = 'btn-container center-align'

const div = (classes, btn) => {
  return `<div class="${classes}">
    ${btn}
  </div>`
}
const li = `<li>${div(classes, btn).repeat(5)}</li>`
console.log(li)
const ul = (line) => {
  return `<ul>
    ${line}
  </ul>`
}

app.insertAdjacentHTML('beforeend', ul(li.repeat(5)))

// function appendElement(nb, parent, child) {
//   var times = nb;
//   for(var i=0; i < times; i++){
//     console.log(parent)
//     parent.insertAdjacentHTML('beforeend', child)
//   }
// }

// appendElement(5, ul, li)
