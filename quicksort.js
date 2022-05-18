//Quick Sort
//easiest to run on recursion
//arrays of 0 or 1 are always sorted
//select one element (pivot) and finding the index where the pviot should end up in the sorted array
let arr = [4, 8, 2, 1, 5, 7, 6, 3];
let finalSorted = [1, 2, 3, 4, 5, 6, 7, 8]//4 should be at index of 3
//Pivot Helper (Partition)
//ideally, pivot should be the median value
//4 (index); in the final sorted array, 5 would be in index of 4
// pivot helper will accept three args: array, start index, and end index (default to 0 and arr.length-1)
//store current pivot index in variable
//loop through array from start until the end
//if pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
//swap the starting element (ie the pivot) with the pivot index
//return pivot index

function pivot(arr, start, end){
  function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  let pivot = arr[start];
  let swapIndex = start; //keeps track of the index
  for (let i = start+1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIndex++; //when I find something that is smaller than the pivot, we increment swapindex
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex
}

pivot([4, 8, 2, 1, 5, 7, 6, 3])
//[4, 8, 2, 1, 5, 7, 6, 3]//swapIndex = start or 0
//[4, 2, 8, 1, 5, 7, 6, 3]//swapIndex = 1
//[4, 2, 8, 1, 5, 7, 6, 3]//swapIndex = 2
//[3, 8, 2, 4, 5, 7, 6, 3]//switch start with swapIndex//4 is in the correct spot
//Quick sort calls the pivot helper on the array, recursively call on right and left side
//all happening in the same array

function quickSort(arr, left = 0, right = arr.length-1){
  if (left< right){
    let pivotIndex = pivot(arr, left, right)//3
    //left
    quickSort(arr, left, pivotIndex-1);
    quickSort(arr, pivotIndex+1, right);
    //array stays the same but left and right are constantly changing
    //our conditional is when left and right are equal or there is only one element within a subarray
  }
  return arr

}
