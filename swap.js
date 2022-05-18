function swap(array, i, j){
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const swapES2015 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
};
