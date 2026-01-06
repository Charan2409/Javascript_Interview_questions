// Array.prototype.filter: 
// Def: The filter() method of Array instances creates a shallow copy of a portion of a given array, 
//   filtered down to just the elements from the given array that pass the test implemented by the provided function.

// Solution:
var arr = [1,2,3,4,5]

Array.prototype.myFilter = function(callbackFn, thisArg){
    var len = this.length;
    var result = []

    for(var i=0; i<len; i++){
         if(callbackFn.call(thisArg, this[i], i, this)){
        result.push(this[i])
    }

    }
        return result
}

var myArr  = arr.myFilter((val) => val > 3)
console.log(myArr) //[4.5]

//Array.prototype.map
const arr = [1,2,3,4,5]

Array.prototype.myMap = function(callbackFn, thisArg){
    var len = this.length
    var result = []

    for(var i =0;i<len;i++){
       result.push(callbackFn.call(thisArg, this[i], i, this))
    }
    return result
}

var myArr  = arr.myMap((val) => val * 3)
console.log(myArr)


//Array.prototype.reduce
const arr = [1,2,3,4,5]

Array.prototype.myReduce = function(callbackFn, initialValue){
    var accumulator = initialValue;
    for(var i = 0; i < this.length; i++){
        accumulator = accumulator ? callbackFn(accumulator, this[i], i, this) : this[0]
    }
    return accumulator
    
}

const myArr  = arr.myReduce((acc, curr) => {
    return acc + curr
}, 0)
console.log(myArr)


