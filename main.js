const container = document.querySelector('#container')
let num = 8;
let nodeList = []
let width = (800/num) + 'px'

function addSquares() {
	return num * num
	
}

function sketch(divCount) {
	if (num > 100) {
		alert('Value is too high')
	} else if (num < 100){
		divCount = addSquares()
		for (let i = 0; i < divCount; i++){
			let div = document.createElement('div')
			div.className = 'square'
			div.style.width = width
			nodeList.push(div)
			container.appendChild(div)
		}
		addEvent(nodeList)
	}
	
}

sketch()

function addEvent(nodeList) {
	nodeList.forEach( div => {
		div.addEventListener('mouseenter', () => { div.style.backgroundColor = 'lightblue' })
	})
}

function changeNum(){
	num = prompt('Enter a number (Between 1 and 100)')
	width = (800/num).toFixed(2) + 'px'
	nodeList.forEach( div => div.remove())
	sketch(addSquares())
	addEvent(nodeList)
	
}

let reset = document.querySelector('#reset').addEventListener('click', () => {
	nodeList.forEach( div => { div.style.backgroundColor = 'mistyrose'})
})

let moreSquares = document.querySelector('#more').addEventListener('click', changeNum)
