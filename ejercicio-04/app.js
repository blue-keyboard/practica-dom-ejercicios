const body = document.body

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
const btn = document.createElement('button')
btn.id = 'btnToClick'
btn.innerText = 'Click Me'
body.appendChild(btn)

btn.addEventListener('click', (event) => {
   console.log(event)
})

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector('input.focus')

inputFocus.addEventListener('focus', (event) => {
   console.log(event.target.value)
})

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input = document.querySelector('input.value')

input.addEventListener('input', (event) => {
   console.log(event.target.value)
})
