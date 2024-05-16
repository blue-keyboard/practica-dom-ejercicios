const body = document.body

// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const div1 = document.createElement('div')
body.appendChild(div1)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement('div')
const p1 = document.createElement('p')
div2.appendChild(p1)
body.appendChild(div2)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
const div3 = document.createElement('div')

for (let i = 0; i < 6; i++) {
   const p = document.createElement('p')
   div3.appendChild(p)
}

body.appendChild(div3)

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
const p2 = document.createElement('p')
p2.innerText = 'Soy dinámico!'
body.append(p2)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('h2.fn-insert-here')
h2.innerText = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')

apps.forEach((app) => {
   const li = document.createElement('li')
   li.innerText = app
   ul.appendChild(li)
})

body.appendChild(ul)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const nodesToRemove = document.querySelectorAll('.fn-remove-me')
nodesToRemove.forEach((node) => node.remove())

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const firstDiv = document.querySelector('div')
const inBetweenP = document.createElement('p')
inBetweenP.innerText = 'Voy en medio'
firstDiv.insertAdjacentElement('afterend', inBetweenP)

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here
const divsToInsert = document.querySelectorAll('.fn-insert-here')

divsToInsert.forEach((div) => {
   const p = document.createElement('p')
   p.innerText = 'Voy dentro!'
   div.appendChild(p)
})
