//RADIX SORT = Integer sort not comparison sort

//comparison sort = compare two things;
//best time complexity for comparison sorts is O n log n
//works on lists of numbers (binaries)
//never makes comparisons
//exploits the fact that information about the sinze of a number is encoded in the number of digits
//looking at the first digit of each number starting from the right
//using buckets to organize the array gradually by looking at the next digit of each number
//the numbers seem to get sifted from smallest to largest
//amount of loops is equal to the amount of digits in the largest number
//must find out what the digit of a certain number is
//
//Helper Methods:
function getDigit(num, position){
  //takes into consideration negative numbers and positions greater than the length of the number
  let isNeg = false
  if(num < 0){
    isNeg = true
  }
  let numLength = num.toString().length - 1
  console.log(numLength)
  let actualPosition = numLength - position
  if(position >= numLength) return 0;
  if(isNeg && position === numLength-1) return (0 - parseInt(num.toString().split("")[actualPosition]));
  else return parseInt(num.toString().split("")[actualPosition])

}

function getDigit2(num, posiiton){
  return Math.floor(Math.abs(num)/Math.pow(10, i))%10;
}
//getDigit(12345, 0)//5;

//find the amount of times to loop
function howManyDigits(num){
  if(num === 0) return 1;
  return num.toString().length
}

function digitCount(num){
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)))+1;
}

// which number has the most digits
function mostDigits(nums){
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}


function radixSort(nums){
  let maxDigitCount = mostDigits(nums);
  for ( let k = 0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length: 10}, () =>[])
    for (let i = 0; i < nums.length; i++){
      //digitBuckets[getDigit(nums[i], k)].push(nums[i]);
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);

  }
  return nums;
}
