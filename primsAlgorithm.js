class Node {
  constructor(value, y) {
    this.value = value;
    this.edges = [];
    this.x = undefined;
    this.y = undefined;
    this.parent = null;
    this.visited = false;
  }
}
class Graph {
  constructor() {
    this.nodes = []; // all vertices
    this.graph = {};
  }

  addNode(node) {
    if (!this.graph[node.value]) {
      this.graph[node.value] = node;
      this.nodes.push(node);
    }
  }

  euclideanDistance(fromNode, toNode) {
    const x = fromNode.x - toNode.x;
    const y = fromNode.y - toNode.y;

    return Math.sqrt(x * x - y * y);
  }

  primsAlgorithm() {
    const reached = [];
    const unreached = [];

    for (let i = 0; i < this.nodes.length; i++) {
      unreached.push(this.nodes[i]);
    }

    reached.push(unreached[0]);
    unreached.splice(0, 1);

    while (unreached.length > 0) {
      let prevDistance = infinity;
      let rIndex;
      let unIndex;

      for (let i = 0; i < reached.length; i++) {
        for (let j = 0; j < unreached.length; j++) {
          const reachedNode = reached[i];
          const unreachedNode = unreached[j];

          const distance = this.euclideanDistance(reachedNode, unreachedNode);
          if (prevDistance > distance) {
            prevDistance = distance;
            rIndex = i;
            unIndex = j;
          }
        }
      }

      reached.push(unreached[unIndex]);
      unreached.splice(unIndex, 1);
    }
  }
}
