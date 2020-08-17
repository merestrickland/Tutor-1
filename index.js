


// let myHashMap = new Map();

// myHashMap.set("blue", 3);
// myHashMap.set("asdf", 6);

// console.log(myHashMap.get("as"));

// console.log(myHashMap);
// console.log(myHashMap.keys());

// for (const k of myHashMap.keys()){
//   console.log(k);
//   console.log(myHashMap.get(k));
// }

// let person = {
//   name: "Mike"
// }

// person['age'] = 27

// console.log(person);

// let list = ["a", "b", "d", "f", "g", "w", "f"];

let str = "fjdslkajdbzsaklgjlfd";
function unique(str){
  const store = {};
  for (const s of str){
    if (store[s] != undefined){
      store[s] += 1;
    }
    else {
      store[s] = 1;
    }
  }

  let results = []
  for (const k in store){
    if (store[k] == 1){
      results.push(k);
    }
  }

  return results;
}

// Time complexity => O(2n)
// where n is length of string

// Space Complexity => O(2n)

// console.log(unique(str));

// let mySet = new Set();

// mySet.add("f");
// mySet.add("j");
// mySet.add("d");
// mySet.add("d");
// mySet.add("d");
// mySet.add("e");

// console.log(mySet);

function unique2(str){
  let result = new Set()
  for (const s of str){
    result.add(s);
  }
  return results;
}

// Time Complexity => O(n)
// where n is the length of the string

// Space Complexity => O(n)

// console.log(unique(str))

let s1="hand";
let s2="ndah";

function matching(s1, s2){
  for (const s of s1){
    if (!s2.contains(s)){
      return False;
    }
  }
  return True;
}

// Time Complexity => O(n^2)
// where n is the length of s1 and the length of s2

// Space Complexity => O(1)

function search(str, x){
  for (const s of str){
    if (x == s){
      return True
    }
  }
  return False;
}

function matching2(s1, s2){
  let myHS = new Set();
  for (const s of s1){
    myHS.add(s);
  }
  for (const s of s2){
    if (!myHS.has(s)){
      return False;
    }
  }
  return True;
}

//Time-Complexity => O(n+n) = O(2n)
//Space-Complexity => O(n)

/*
O(1) => instantaneous
O(n) => linear
O(n^2) => quadratic
*/

function printNums(n){
  // for (let i = 0; i < n; i++){
  //   // console.log(i); //O(1)
  //   for (let j = 0; j < n; j++){
  //     console.log(i*j); //O(1)
  //   }
  // }

  for (let i = 0; i < n; i++){
    console.log(i*i);
  } //O(n)
}

// O(n*n*1) => O(n^2)


let s5 = "fjdlsldkfjs"
function toArray(str){
  let a = [];
  for (let s of str){
    a.push(s); // O(1)
  }
  return a;
}

// My function has time complexity O(n) where n is the length of the string

// My function has space complexity of O(n) where n is the length of the string

/*
O(1) => constant

let a = 0;
let b = 2;

O(n) => variable space

{}, Map, Set, []
*/

