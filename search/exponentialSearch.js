function binarySearch(arr, lowIndex, highIndex, value) {
	while (lowIndex <= highIndex) {
		let midIndex = Math.floor((lowIndex + highIndex) / 2);
		const midValue = arr[midIndex];
		if (midValue === value) return midIndex;
		if (midValue <= value) {
			lowIndex = midIndex + 1;
		} else {
			highIndex = midIndex - 1;
		}
	}
}

function exponentialSearch(arr, value) {
	let i = 1,
		length = arr.length;

	while (i < length && arr[i] <= value) {
		i *= 2;
    }
    console.log(i);
	return binarySearch(arr, i / 2, Math.min(i, length), value);
}

const arr = [ 10, 20, 40, 45, 55 ],
	value = 20;

const result = exponentialSearch(arr, value);
console.log(result);
