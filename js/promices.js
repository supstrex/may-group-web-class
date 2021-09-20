function func(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(8);
        }, 1000);
    });
}
const promice = func();
promice.then(function(result){
    console.log(result);
});