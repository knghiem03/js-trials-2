'use strict';

// 1. isHometown

// Define your function here
function isHometown(town){
    return town === 'San Francisco';
}
// 2. getFullName

function getFullName(first_name, last_name) {
    return `${first_name} ${last_name}`;
}

// 3. calculateTotal

function calculateTotal(basePrice, state, tax) {
    let subtotal = basePrice * ( 1 + tax);
    let fee = 0;
    if ( state === 'CA') {
        fee = 0.03 * subtotal;
    }
    else if ( state === 'PA') {
        fee = 2;
    }
    else if ( state === 'MA') {
        if ( base_price <= 100 ) {
            fee = 1;
        }
        else {
            fee = 3;
        }
    }
    return subtotal + fee ;
}


const town1 = 'San Francisco'
const town2 = 'St. Paul'
console.log(isHometown(town1))
console.log(isHometown(town2))
const first = "Virginia"
const last = "Lopez"
console.log(getFullName(first,last))
let state = 'CA'; 
const basePrice = 100
console.log(calculateTotal(basePrice, state, 0.05))