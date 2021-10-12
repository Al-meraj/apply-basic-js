// 5!=1*2*3*4*5
// function factorial(num){
//     var fact = 1;
//     for (var i = 1;i<=num;i++){
//         fact = fact*i;
//     }
//     return fact;
// }
// var result = factorial(5);
// console.log("result",result);


function fact(num){
    if (num == 1){
        return 1;
    }
    else {
        return num * fact(num-1);
    }
}
var result = fact(3);
console.log('result',result);