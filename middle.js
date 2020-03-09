const middle = array => {
  let mostMiddle = [];
  if (array.length % 2 !== 0 && array.length > 2) {
    mostMiddle.push(Math.ceil(array.length / 2));
  } else if (array.length % 2 === 0 && array.length > 2) {
    mostMiddle.push(array.length / 2, array.length / 2 + 1);
  }
  return mostMiddle;
};

module.exports = middle;
