/**
 * @description sum algorithm known as also comulative algorithom, reducing the time complexity for the ranging
 * @param {*} arr 
 * @param {*} [[range1],[range2]] 
 */
const prefixSum = (arr, [ startIndex, endIndex ]) => {
	const result = arr.reduce((memo, value, index) => {
		return [ ...memo, value + (memo[index - 1] || 0) ];
	}, []);
	console.log(result, result[startIndex - 1] - result[endIndex]);
	return result[startIndex - 1] - result[endIndex];
};
const arr = [ 1, 2, 3, 4, 5, 6, 7 ];

prefixSum(arr, [ 1, 4 ]);
