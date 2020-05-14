function interpolationSearch(n, value) {
	let length = n.length,
		lowIndex = 0;
	highIndex = length - 1;

	while (lowIndex <= highIndex && value >= n[lowIndex] && value <= n[highIndex]) {
		if (lowIndex === highIndex) {
			if (n[lowIndex] === value) return lowIndex;
			else return -1;
		}

		const position = Math.floor(
			lowIndex + (highIndex - lowIndex) / (n[highIndex] - n[lowIndex]) * (value - n[lowIndex])
		);
		if (n[position] === value) return position;
		if (n[position] < value) lowIndex = position + 1;
		else highIndex = position - 1;
	}
	return -1;
}
const n = [ 10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47 ],
	value = 19;

const result = interpolationSearch(n, value);
console.log(result);
