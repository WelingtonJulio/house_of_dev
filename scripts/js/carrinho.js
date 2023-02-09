const arrows = document.querySelectorAll('.arrow__quant');
const quant = document.querySelector('.quant__value');
let count = 0;


arrows.forEach(arrow => {
  arrow.addEventListener('click', (e) => {
    arrows.forEach(arr => {
      arr.style.color = "#938f93"
    });
    countFunction(arrow.innerText)
    arrow.style.color = "#8c65a4"
  })
})


const countFunction = (seta) => {
  if(seta === '<') {
    if(count != 0){
    quant.innerHTML = `${--count}`
    }
  } else {
    quant.innerHTML = `${++count}`
  }
}
