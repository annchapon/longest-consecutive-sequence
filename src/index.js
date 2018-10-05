module.exports = function longestConsecutiveLength(array) {
  let length = 1;
	let sortArray = array.sort((a, b) => a - b);
	let arrayLength = sortArray.length;
	let sequence = 1;
	for (let i = 0; i < arrayLength; i++) {
		if (sortArray[i] + 1 === sortArray[i + 1]) {
			sequence++;
			if (sequence > length) length = sequence;
		}
		else if (sortArray[i] !== sortArray[i + 1]) sequence = 1;
	}
	if (arrayLength <= 1) return arrayLength;
	return 	length;
}