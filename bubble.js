const bubleSort = (arr) => {
  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j < arr.length - i; j++)
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) if (arr[min] > arr[j]) min = j;
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
};

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let aux = arr[i];
    while (j >= 0 && arr[j] > aux) arr[j + 1] = arr[j--];
    arr[j + 1] = aux;
  }
};

const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++)
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const mergeSort = (arr) => {
  if (arr.length > 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const sortedArr = [];
  while (left.length && right.length)
    left[0] <= right[0]
      ? sortedArr.push(left.shift())
      : sortedArr.push(right.shift());
  return [...sortedArr, ...left, ...right];
};

var arr = [4, 5, 10, 2, 9, 23, 8, 56, 666, -1, 455];

console.log(mergeSort(arr));
console.log(arr.length && arr.length);
//bubleSort(arr);
//console.log(arr);

console.log(arr.sort((a, b) => a - b));
