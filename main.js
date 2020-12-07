const container = document.querySelector('#container')
let div;
let num = 4
let nodeList = []

function addSquares() {
	return num * num
}

function sketch(divCount) {
	divCount = addSquares()
	if (divCount == 16){
		for (let i = 0; i < divCount; i++){
			div = document.createElement('div')
			div.className = 'square'
			div.style.width = '100px'
			nodeList.push(div)
			container.appendChild(div)
		}
	} else if (divCount == 25) {
		for (let i = 0; i < divCount; i++){
			div = document.createElement('div')
			div.className = 'square'
			div.style.width = '80px'
			nodeList.push(div)
			container.appendChild(div)
		}
	} else if (divCount == 36) {
		for (let i = 0; i < divCount; i++){
			div = document.createElement('div')
			div.className = 'square'
			div.style.width = '66.66px'
			nodeList.push(div)
			container.appendChild(div)
		}
	} else if (divCount == 49) {
		for (let i = 0; i < divCount; i++){
			div = document.createElement('div')
			div.className = 'square'
			div.style.width = '57.14px'
			nodeList.push(div)
			container.appendChild(div)
		}
	} else if (divCount == 64) {
		for (let i = 0; i < divCount; i++){
			div = document.createElement('div')
			div.className = 'square'
			div.style.width = '50px'
			nodeList.push(div)
			container.appendChild(div)
		}
	} else if (divCount == 81) {
		for (let i = 0; i < divCount; i++){
			div = document.createElement('div')
			div.className = 'square'
			div.style.width = '44.44px'
			nodeList.push(div)
			container.appendChild(div)
		}
	} else if (divCount == 100) {
		for (let i = 0; i < divCount; i++){
			div = document.createElement('div')
			div.className = 'square'
			div.style.width = '40px'
			nodeList.push(div)
			container.appendChild(div)
		}
	}
}

sketch()

function addEvent(nodeList) {
	nodeList.forEach( div => {
		div.addEventListener('mouseenter', () => { div.style.backgroundColor = 'lightblue' })
	})
}

addEvent(nodeList)

let reset = document.querySelector('#reset').addEventListener('click', () => {
	nodeList.forEach( div => { div.style.backgroundColor = 'mistyrose' })
})

let moreSquares = document.querySelector('#more').addEventListener('click', () => {
	if (num < 10) {
		num++
		nodeList.forEach( div => {
			div.remove()
		})

		sketch(addSquares())
		addEvent(nodeList)
	}
})

let lestSquares = document.querySelector('#less').addEventListener('click', () => {
	if (num > 4) {
		num--
		nodeList.forEach( div => {
			div.remove()
		})

		sketch(addSquares())
		addEvent(nodeList)
	}
})
