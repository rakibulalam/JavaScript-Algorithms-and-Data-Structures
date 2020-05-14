function binarySearch(n, lowIndex, highIndex, value) {
	while (lowIndex <= highIndex) {
		let midIndex = Math.floor((lowIndex + highIndex) / 2);
		const midValue = n[midIndex];
		if (midValue === value) return midIndex;
		if (midValue <= value) {
			lowIndex = midIndex + 1;
		} else {
			highIndex = midIndex - 1;
		}
	}
}

function exponentialSearch(n, value) {
	let i = 1,
		length = n.length;

	while (i < length && n[i] <= value) {
		i *= 2;
    }
    console.log(i);
	return binarySearch(n, i / 2, Math.min(i, length), value);
}

const n = [ 10, 20, 40, 45, 55 ],
	value = 20;

const result = exponentialSearch(n, value);
console.log(result);
