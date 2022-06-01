function validAnagram(word1, word2){
  // add whatever parameters you deem necessary - good luck!
  if (word1.length !== word2.length){
      return false
  }
  let fqCounter1 = {};
  let fqCounter2 = {};
  let firstArray = word1.split('')
  let secondArray = word2.split('')

  for (let val of firstArray){
      fqCounter1[val] = (fqCounter1[val] || 0) + 1;
  }

  for (let val of secondArray){
      fqCounter2[val] = (fqCounter2[val] || 0) + 1;
  }

  for (let key in fqCounter1){
      if(!(key in fqCounter2)){
          return false
      }
      if(fqCounter2[key] !== fqCounter1[key]){
          return false
      }
  }
  return true
}
