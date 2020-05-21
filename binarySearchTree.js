class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(data) {
		var newNode = new Node(data);

		if (this.root === null) this.root = newNode;
		else
			// find the correct position in the
			// tree and add the node
			this.insertNode(this.root, newNode);
	}
	insertNode(node, newNode) {
		// if the data is less than the node
		// data move left of the tree
		if (newNode.data < node.data) {
			// if left is null insert node here
			if (node.left === null) node.left = newNode;
			else
				// if left is not null recurr until
				// null is found
				this.insertNode(node.left, newNode);
		} else {
			// if the data is more than the node
			// data move right of the tree
			// if right is null insert node here
			if (node.right === null) node.right = newNode;
			else
				// if right is not null recurr until
				// null is found
				this.insertNode(node.right, newNode);
		}
	}
	remove(data) {
		// root is re-initialized with
		// root of a modified tree.
		this.root = this.removeNode(this.root, data);
	}

	// Method to remove node with a
	// given data
	// it recurrs over the tree to find the
	// data and removes it
	removeNode(node, key) {
		// if the root is null then tree is
		// empty
		if (node === null) return null;
		else if (key < node.data) {
			// if data to be delete is less than
			// roots data then move to left subtree
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (key > node.data) {
			// if data to be delete is greater than
			// roots data then move to right subtree
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			// if data is similar to the root's data
			// then delete this node
			// deleting node with no children
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}

			// deleting node with one children
			if (node.left === null) {
				node = node.right;
				return node;
			} else if (node.right === null) {
				node = node.left;
				return node;
			}

			// Deleting node with two children
			// minumum node of the rigt subtree
			// is stored in aux
			var aux = this.findMinNode(node.right);
			node.data = aux.data;

			node.right = this.removeNode(node.right, aux.data);
			return node;
		}
	}
	inorder(node) {
		if (node !== null) {
			this.inorder(node.left);
			console.log(node.data);
			this.inorder(node.right);
		}
	}
	preorder(node) {
		if (node !== null) {
			console.log(node.data);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}
	postorder(node) {
		if (node !== null) {
			this.postorder(node.left);
			this.postorder(node.right);
			console.log(node.data);
		}
	}
	findMinNode(node) {
		// if left of a node is null
		// then it must be minimum node
		if (node.left === null) return node;
		else return this.findMinNode(node.left);
	}
	getRootNode() {
		return this.root;
	}
	search(node, data) {
		// if trees is empty return null
		if (node === null) return null;
		else if (data < node.data)
			// if data is less than node's data
			// move left
			return this.search(node.left, data);
		else if (data > node.data)
			// if data is less than node's data
			// move left
			return this.search(node.right, data);
		else
			// if data is equal to the node data
			// return node
			return node;
	}
}
var BST = new BinarySearchTree(); 
  
// Inserting nodes to the BinarySearchTree 
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27); 
                          
//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//     / \    / 
//    5   9  17  
  
var root = BST.getRootNode(); 
              
// prints 5 7 9 10 13 15 17 22 25 27 
const result=BST.preorder(root); 
console.log(result);