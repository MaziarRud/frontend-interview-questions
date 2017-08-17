/// solution

function filter(array, fn) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    if (fn(current)) {
      result.push(current)
    }
  }
  return result
}

/// tests

// import { test } from 'ava'

// test(t => t.deepEqual(filter([1, 2, 3, 4], n => n < 3), [1, 2]))

let num = n => typeof n == 'number' ? true : false;
let ar = [1,'2',3];

console.log(filter(ar, num))