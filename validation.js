function multiply(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please privide a number'
    }
    const mult = num1 * num2;
    return mult;

}

const result = multiply(5, 5 );
// console.log(result);


// for practice
function fullName (first, second){
    const full = first + ' ' + second;
    return full;
}
const full = fullName ('Almuheetu', 'shihab')
console.log(full);