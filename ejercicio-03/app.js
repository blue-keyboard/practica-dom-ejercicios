const body = document.body

// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')

countries.forEach((country) => {
   const li = document.createElement('li')
   li.innerText = country
   ul.appendChild(li)
})

body.appendChild(ul)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.querySelector('.fn-remove-me').remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const divToPrint = document.querySelector('div[data-function="printHere"]')
const ul2 = document.createElement('ul')

cars.forEach((car) => {
   const li = document.createElement('li')
   li.innerText = car
   ul2.appendChild(li)
})

divToPrint.appendChild(ul2)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];
const countries2 = [
   { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
   { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
   { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
   { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
   { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

countries2.forEach((country) => {
   const countryDiv = document.createElement('div')
   const h4 = document.createElement('h4')
   const img = document.createElement('img')
   h4.innerText = country.title
   img.src = country.imgUrl
   countryDiv.appendChild(h4)
   countryDiv.appendChild(img)

   body.appendChild(countryDiv)
})
