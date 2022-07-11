

const fib = (n) => {
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}
//Big O of this is O(2n) REALLY BAD
//fib(of smaller numbers are repeated too many times)

//how do we remember these already computed smaller numbers

//memoization storing the results of expensive function calls and returning the chached result when the sma einputs occur

function fib(n, memo=[]){
  if(memo[n] !== undefined) return memo[n];
  if( n <= 2) return 1;
  let res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
}

//Big O is O(n)



//TABULATION
//storing the result of a previous result in a table (usually an array)
// usually done with iteration
//better space complexity

function fib(n){
  if(n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for(let i = 3; i <= n; i++){
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[n];
}
