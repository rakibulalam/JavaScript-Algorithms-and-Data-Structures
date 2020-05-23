'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
	inputString += inputStdin;
});

process.stdin.on('end', (_) => {
	inputString = inputString.trim().split('\n').map((str) => str.trim());

	main();
});

function readLine() {
	return inputString[currentLine++];
}
class Node {
	constructor(value, x, y) {
		this.value = value;
		this.x = x;
		this.y = y;
	}
}
class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (this.adjacencyList[vertex]) this.adjacencyList[vertex] = {};
    }
    addEdge(vert1, vert2, distance){

    }
}
// Complete the solve function below.
function solve(h, v, junctions, edges) {
	console.log(h, v, junctions, edges);

	const distance = Math.sqrt(h * h + v * v);

	junctions.forEach(([ x, y ]) => {
        
    });
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const nhv = readLine().split(' ');

	const n = parseInt(nhv[0], 10);

	const h = parseInt(nhv[1], 10);

	const v = parseInt(nhv[2], 10);

	let junctions = Array(n);

	for (let junctionsRowItr = 0; junctionsRowItr < n; junctionsRowItr++) {
		junctions[junctionsRowItr] = readLine().split(' ').map((junctionsTemp) => parseInt(junctionsTemp, 10));
	}

	let edges = Array(n - 1);

	for (let edgesRowItr = 0; edgesRowItr < n - 1; edgesRowItr++) {
		edges[edgesRowItr] = readLine().split(' ').map((edgesTemp) => parseInt(edgesTemp, 10));
	}

	let result = solve(h, v, junctions, edges);

	ws.write(result + '\n');

	ws.end();
}
