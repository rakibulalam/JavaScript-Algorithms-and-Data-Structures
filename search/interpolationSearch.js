function interpolationSearch(arr, value) {
	let length = arr.length,
		lowIndex = 0;
	highIndex = length - 1;

	while (lowIndex <= highIndex && value >= arr[lowIndex] && value <= arr[highIndex]) {
		if (lowIndex === highIndex) {
			if (arr[lowIndex] === value) return lowIndex;
			else return -1;
		}

		const position = Math.floor(
			lowIndex + (highIndex - lowIndex) / (arr[highIndex] - arr[lowIndex]) * (value - arr[lowIndex])
		);
		if (arr[position] === value) return position;
		if (arr[position] < value) lowIndex = position + 1;
		else highIndex = position - 1;
	}
	return -1;
}
const arr = [ 10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47 ],
	value = 19;

const result = interpolationSearch(arr, value);
console.log(result);
