function countingSort(arr) {
	return arr
		.reduce((acc, v) => ((acc[v] = (acc[v] || 0) + 1), acc), [])
		.reduce((acc, n, i) => acc.concat(Array(n).fill(i)), []);
}
const arr = [ ...Array(10) ].map((e) => ~~(Math.random() * 10));
const result = countingSort(arr);
console.log(result);
