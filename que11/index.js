function isEvenNumber(num) {
  if (typeof num !== 'number') {
    throw new TypeError('Enter Number :');
  }
  return num % 2 === 0;
}

module.exports = isEvenNumber;