Array.prototype.maping = function(fun) {
    let arr = [];
    let j = 0;
    for (let i = 0; i < this.length; i++) {
        arr[j] = fun(this[i], i, this);
        j++;
    }
    return arr;
}
//Lets check
let arr1 = [1, 5, 6]
arr1.maping(function(num, i){
    num += 1;
    console.log(num, i);
})