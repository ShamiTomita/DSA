function binarySearch(arr, val){
  let left = 0
  let right = arr.length -1
  let guess
    while(right >= left){
        guess = Math.floor(( right + left)/2);
        if ( arr[guess] ===  val){
            return guess
            }
        else if(arr[guess] < val){
            left = guess + 1
        }
        else{
            right = guess -1
            }
    }
    return -1;
}
