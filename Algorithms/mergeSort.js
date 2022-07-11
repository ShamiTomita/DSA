//when you have the two sorted arrays
//BIG O is O(n log ns)
function merge(arr1, arr2){
    let results = []; the resulting array sorted
    let i = 0; //these are the indexes of each array,
    let j = 0;
    while(i < arr1.length && j < arr2.length){ //while theres still data in both to look at
      if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }//once we run out of one or the other array, we move onto the next
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}


function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid)); //recursive function
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
