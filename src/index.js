module.exports = function getZerosCount(number) {
	let countZeros = 0;
	let n = 5;
	let temp;
	let loop = true;

	while (loop) {
		temp = Math.floor(number / n);
		if (temp > 0) {
			countZeros = countZeros + temp;
			n = n * 5; 
		} else {
			loop = false;
		}
	}
	return countZeros;
}