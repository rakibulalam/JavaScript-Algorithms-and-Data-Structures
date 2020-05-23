class Node {
	constructor(value, x, y) {
		this.value = value;
		this.x = x;
		this.y = y;
		this.xd = 0; // x distance
		this.yd = 0; // y distance
	}
}
class Graph {
	constructor(horizontal, vertical) {
		this.h = horizontal;
		this.v = vertical;
		this.graph = {};
		this.adjacencyList = {};
		this.count = 0;
	}
	addVertex(node) {
		if (!this.adjacencyList[node.value]) this.adjacencyList[node.value] = {};
		if (!this.graph[node.value]) this.graph[node.value] = node;
	}
	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1.value][vertex2.value] = vertex1;
		this.adjacencyList[vertex2.value][vertex1.value] = vertex2;
	}

	BFS(startVertex) {
		const visited = {};
		visited[startVertex.value] = true;

		let queue = [ startVertex ];

		while (queue.length) {
			const current = queue.shift();

			for (let nearVertex in this.adjacencyList[current.value]) {
				const distance = current.distance + this.adjacencyList[current.value][nearVertex];
				console.log(distance);
				if (this.distance > distance && !visited[nearVertex.value]) {
					this.count++;
					const vertex = this.graph[nearVertex];

					vertex.distance = distance;
					visited[vertex.value] = true;
					queue.push(vertex);
				}
			}
		}
	}
}
function solve(h, v, junctions, edges) {
	const n = junctions.length;
	const queue = [];

	while (queue.length) {}
}
