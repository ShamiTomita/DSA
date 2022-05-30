//hash tables are super fast!
// JS -> OBJECTS AND MAPS
//key-value
//to implement we will use an array
//convert keys into valid array indices
//hash functions need to be fast (constant time)
//doesnt clusster outputs at specific indices, but distributes uniformly


//not a good hash function
function sameHashValue(key){
  return 0;
}
//non deterministic or will not give the same output with the same key (this lock doesnt work!!!)
function randomHash(key){
  return Math.floor(Math.random() * 1000)
}
//this value takes a value and the length of an array, we want to return a number
hash("pink", 100)
//for strings only
//ok approach
function hash(key, arrayLength){
  let total = 0;
  for (let char of key){
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }
  return total;
}

function betterHash(key, arrayLength){
  let total = 0;
  let WEIRD_PRIME = 31; //hash tables are better if prime bc it decreases collisions
  for (let i = 0; i < Math.min(key.length, 100); i++){
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLength;
  }
  return total;
}

//it is likely that there will be some collisions

//two strategies:
//Separate Chaining - at each index in our array, we store values usigin a more sophisticated data structure (array or linked list)
//store multiple key value pairs
// Linear Probing - search through array to find next empty slot


class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key){
    let total = 0;
    let WEIRD_PRIME = 31; //hash tables are better if prime bc it decreases collisions
    for (let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value){
    //hash the key, store the key-value pair in the hash table array via separate chaining
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key){
    let index = this._hash(key);
    if(this.keyMap[index].length){
      for(i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key){
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }

  //hashes the key, retrieves the key value pair
}
