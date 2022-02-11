const myPalette = document.querySelector('#my-palette')
const colorPalette = document.querySelector('#color-palette')
const generate = document.querySelector('#generate')
const message = document.querySelector('#message')
const clearMyPalette = document.querySelector('#clearMyPalette')

// Create a click handler on each square that will add a square with the same color as the clicked square to the right column.

const addColor = (event) => {
    // add color of selected square, to a square on the right(my palette)
    const color = event.target.style.backgroundColor
    console.log('the color is: ', color)
    // create a new square
    const newSquare = document.createElement('div')
    newSquare.classList.add('square')
    // add the color we want
    newSquare.style.backgroundColor = color
    // append it to my palette
    myPalette.appendChild(newSquare)
    // send a message to user that color has been added
    message.innerText = `added square with color: ${color}`
}

const clearPalette = () => {
    while (myPalette.firstChild) {
        // if there is a child of myPalette, remove it
        myPalette.removeChild(myPalette.firstChild)
    }
    message.innerText = 'cleared my palette'
}

// that means I want to do the same thing, a bunch of times --> I need a loop, maybe even a function that gets called in a loop

// Generate 150 divs (squares) each with their own random color.
const makePalette = () => {
	// if there are already squares in colorPalette, clear them out
	while (colorPalette.firstChild) {
		// if there is a child of colorpalette, remove it
		colorPalette.removeChild(colorPalette.firstChild)
	}
	// square creation loop
	for (let i = 0; i < 150; i++) {
		// console log made sure the loop runs correctly, at the right time
		console.log('make a square')
		// generate a div every loop
		const square = document.createElement('div')
		// make that div a square
		square.classList.add('square')
		// append those divs to the color palette
		colorPalette.appendChild(square)
		// give each square a color(randomly)
		// if I'm using rgb syntax to define these colors
		// then all I need, are three random numbers that don't exceed 255
		const red = Math.floor(Math.random() * 255)
		const green = Math.floor(Math.random() * 255)
		const blue = Math.floor(Math.random() * 255)
		square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        square.addEventListener('click', addColor)
	}
    message.innerText = 'squares successfully generated'
}


// add event listener to document
// the listener will wait for the DOM content to load, then make the palette
document.addEventListener('DOMContentLoaded', () => {
    generate.addEventListener('click', makePalette)
    clearMyPalette.addEventListener('click', clearPalette)
    makePalette()
})
