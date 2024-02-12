// function multiply(num1, num2) {
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return 'please privide a number'
//     }
//     const mult = num1 * num2;
//     return mult;

// }

// const result = multiply(5, 5 );
// // console.log(result);


// // for practice
// function fullName (first, second){
//     const full = first + ' ' + second;
//     return full;
// }
// const full = fullName ('Almuheetu', 'shihab')
// console.log(full);



// Problem-1

function calculateMoney(numberOfTickets) {

    if (typeof numberOfTickets !== 'number' || numberOfTickets < 0) {
        return "Invalid Number. Please provide a valid positive number of tickets.";
    }


    const ticketPrice = 120;
    const janitorExpense = 500;
    const lunchExpensePerPerson = 50;
    const numberOfStaff = 8;

    const totalIncome = numberOfTickets * ticketPrice;
    const totalExpenses = janitorExpense + (numberOfStaff * lunchExpensePerPerson);

    const moneyLeft = totalIncome - totalExpenses;

    return moneyLeft;
}

const numberOfTicketsSold = -130;
const result = calculateMoney(numberOfTicketsSold);
// console.log(result);


 2064743731

// Problem-2

