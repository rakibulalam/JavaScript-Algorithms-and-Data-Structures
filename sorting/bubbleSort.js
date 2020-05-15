function bubbleSort(arr) {
	const n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		let isSwaped = false;
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) [ arr[j], arr[j + 1], isSwaped ] = [ arr[j + 1], arr[j], true ];
		}
		if (isSwaped === false) break;
	}

	return arr;
}

const arr = [ 0, 5, 6, 8, 1, 2, 3, 5, 70, 10, 20, 40, 30 ];

const result = bubbleSort(arr, false);
console.log(result);
