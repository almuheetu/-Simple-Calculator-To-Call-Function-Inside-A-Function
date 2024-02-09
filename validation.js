function multiply(num1, num2) {
    if(typeof num1 !== 'number'){
        return 'please privide a number'
    }
    const mult = num1 * num2;
    return mult;

}

const result = multiply(5, 5 );
console.log(result);