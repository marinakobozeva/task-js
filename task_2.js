// Сортировка пузырьком в вид функции

function sortedArr(array) {
  let temp = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j > i; j--) {
      if (array[j - 1] > array[j]) {
        temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      };
    };
  };
  return array;
};

let arr = [1, 4, 5, 0, -4, 345, 234, 34, 10, 6];

console.log(sortedArr(arr));