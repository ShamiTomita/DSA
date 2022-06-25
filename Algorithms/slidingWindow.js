//fixed!!!
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
//Dynamic
//start small and get maximum then retract, its like a catterpillar

function dynamicSmallestSubarray(arr){
  let targetSum;
  let minWindowSize = 0;
  let currentWindowSum =0;
  let windowStart =0;
  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    while(currentWindowSum >= targetSum){
      minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1);
      currentWindowSum -= arr[windowStart]; //removing it from the end, the shrinking process
      windowStart++; //moving it right
    }
  }
  return minWindowSize;
}
//Dynamic with Aux DS
function dynamicLongestSubWDistinct(str){
  let k = 2; //DistinctCharacters
  let hashMap = new Map();
  let maxLength = 0;
  for(let i =0, j =0; j < str.length; j++){
    hashMap.set(str.charAt(j), j);
    if (hashMap.size > k){
      while(i < j && hashMap.get(s.charAt(i)) != i){i++;}
      hashMap.remove(s.charAt(i++))
    }
    maxLength = Math.max(maxLen, j-i+1);
  }
  return maxLength
}
