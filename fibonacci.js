// fibo[4]=fibo[4-1]+fibo[4-2];
// fibo[5]=fibo[5-1]+fibo[5-2];
// fibo[6]=fibo[6-1]+fibo[6-2];
// (Every fibo has its own position which indicates from its before two values Sum.)

function fibonacci(n){
    var fibo= [0,1,1];
    for(var i=3; i<=n;i++){
        fibo[i]= fibo[i-1]+fibo[i-2];

    }
    return fibo;
}
var result = fibonacci(2);
console.log(result);
