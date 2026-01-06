// Array.prototype.filter: 
// Def: The filter() method of Array instances creates a shallow copy of a portion of a given array, 
//   filtered down to just the elements from the given array that pass the test implemented by the provided function.

// Solution:
const arr = [1,2,3,4,5]

Array.prototype.myFilter = function(callbackFn, thisArg){
    let len = this.length;
    const result = []

    for(let i=0; i<len; i++){
         if(callbackFn.call(thisArg, this[i], i, this)){
        result.push(this[i])
    }

    }
        return result
}

const myArr  = arr.myFilter((val) => val > 3)
console.log(myArr) //[4.5]

