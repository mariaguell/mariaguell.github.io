window.addEventListener( 'load', init )

function init ( ev ) {
	document.body.addEventListener( 'mousemove' , editGradient )
}

function editGradient ( ev ) {
	const gradStops = e( 'grad' ).children
	const h1 = ev.pageX / window.innerWidth * 360
	const h2 = ev.pageY / window.innerHeight * 360
	gradStops[0].style = `stop-color: ${hsl( h1 )}; stop-opacity: 1`
	gradStops[1].style = `stop-color: ${hsl( h2 )}; stop-opacity: 1`
	e( 'M-pal' ).setAttribute( 'stroke', hsl( h1 ) )
}

function displayGides ( ) {
	const element = e( 'firma' )
	const numCols = 14
	const numRows = 5
	const cellSize = 100
	const y1 = -cellSize
	const y2 = ( numRows - 1 ) * cellSize
	for ( let c = 0; c < numCols; c++ ) {
		const x = c * cellSize
		const line = displayGidesLine ( x, x, y1, y2 )
		element.appendChild( line )
	}
	const x1 = -cellSize
	const x2 = ( numCols - 1 ) * cellSize
	for ( let r = 0; r < numRows - 1; r++ ) {
		const y = r * cellSize
		const line = displayGidesLine ( x1, x2, y, y )
		element.appendChild( line )
	}
}

function displayGidesLine ( x1, x2, y1, y2, color = 'red' ) {
	const line = document.createElementNS( 'http://www.w3.org/2000/svg', 'line' )
	line.setAttribute( 'x1', x1 )
	line.setAttribute( 'x2', x2 )
	line.setAttribute( 'y1', y1 )
	line.setAttribute( 'y2', y2 )
	line.setAttribute( 'style', `stroke: ${color}; stroke-width: 2` )
	return line
}

function e ( id ) {
	return document.getElementById( id )
}

function hsl ( h = 0, s = 80, b = 70 ) {
	return `hsl( ${h}, ${s}%, ${b}%)`
}
