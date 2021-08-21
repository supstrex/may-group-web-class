Array.prototype.maping = function(fun) {
    let arr = [];
    let j = 0;
    for (let index = 0; index < this.length; index++) {
        arr[j] = fun(this[index]);
        j++;
    }
    return arr;
}

let arr1 = [1, 5, 6]
arr1.maping(function(num){
    console.log(num);
})