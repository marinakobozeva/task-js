// Сортировка массива пузырьком

let array = [1, 5, 7, 12, 0, 234, 4, 234, 4, 53];

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

console.log(array);