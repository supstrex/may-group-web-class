let multiplication = function(num){
    for (let index = 1; index <= 10; index++) {
        let result = index * num;
        console.log(`${num} * ${index} = ${result}`);
    }
} 

multiplication(3)