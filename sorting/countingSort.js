function countingSort(arr) {
	return arr
		.reduce((acc, v) => ((acc[v] = (acc[v] || 0) + 1), acc), [])
		.reduce((acc, n, i) => acc.concat(Array(n).fill(i)), []);
}
const arr = [ ...Array(10) ].map((e) => ~~(Math.random() * 10));
const result = countingSort(arr);
console.log(result);

/** counting sort with hashtable */

function countingSortWithHash(arr) {
	/** hash is ordered by default for the number keys */
	let hash = {};
	countArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (!hash[arr[i]]) {
			hash[arr[i]] = 1;
		} else {
			hash[arr[i]]++;
		}
	}

	for (let key in hash) {
		for (let i = 0; i < hash[key]; i++) {
			/** you can split the array by the range of the element */
			countArray.push(key);
		}
	}
	return countArray;
}
