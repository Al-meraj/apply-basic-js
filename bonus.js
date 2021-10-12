var nums = [45,85,63,95,45,47,20,77,13,49];
// console.log(nums.length);
function add(number1,number2){
    var total = number1 + number2;
    return total;
}
var result = add(45,9);
// console.log(result);
function largestNumber(numbers){
    var larger = numbers[0];
    for (var i = 0;i < numbers.length;i++){
        var element = numbers[i];
        if (element>larger){
            larger = element;
        }
    }
    return larger;
}
var apple = [65,85,83,19,65,75,44,25];
var result = largestNumber(apple);
console.log("The largest number is",result);