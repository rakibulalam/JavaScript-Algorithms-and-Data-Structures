function quickSort(arr) {
	if (arr.length === 1) return arr;
	const pivot = arr[arr.length - 1];
	const leftArray = [];
	const rightArray = [];
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			leftArray.push(arr[i]);
		} else {
			rightArray.push(arr[i]);
		}
	}
	if (leftArray.length > 0 && rightArray.length > 0) {
        return [ ...quickSort(leftArray), pivot, ...quickSort(rightArray) ];
        
	} else if (leftArray.length > 0) {
		return [ ...quickSort(leftArray), pivot ];
	} else {
		return [ pivot, ...quickSort(rightArray) ];
	}
}

const arr=[...Array(10)].map(e=>~~(Math.random()*10));
console.log(arr);
const result=quickSort(arr);
console.log(result);
