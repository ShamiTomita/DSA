function merge(arr1, arr2){
  let results = [];
  let i =0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[j]){
      results.push(arr1[i]);
      i++;
    }else{
      results.push(arr2[j]);
      j++;
    }
  }
  return results;
}
