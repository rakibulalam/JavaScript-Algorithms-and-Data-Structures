function selectionSort(arr) {
	const n = arr.length;

	for (let i = 0; i < n; i++) {
		let min = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[min] > arr[j]) min = j;
		}
		if (min !== i) [ arr[i], arr[min] ] = [ arr[min], arr[i] ];
	}
	return arr;
}

const arr = [ 1, 0, 2, 9, 4, 8, 3, 7, 4 ];

const result = selectionSort(arr);

console.log(result);
