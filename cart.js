///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((a,c) => {
    return a + c.price
}, 0)

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let finalNumber = (cartTotal * (1 + tax)) - couponValue
    return finalNumber 
}

console.log(calcFinalPrice(24, 10, 0.05))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    My customer object will have four properties: Order Number, Order, Drinks, Paid: 

        Order number: We need to know the customers order number so we can call out their number when their order is done. This property will be a number

        Order: We need to know the order so we can properly prepare the cutomers order. This property will be an array so we can list multiple strings

        Drinks: We need to know the number of drinks so we can give the customers their fountain drinks when they finish ordering. This property will be a number so we know how many drinks to hand them

        Paid: We need to know if the customer has paid so we can start making their food. This property will be a boolean because it is true or false if a customer has paid

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let inNoutOrder = {
    orderNumber: 44,
    order:['cheeseburger', 'fries', 'double double'],
    drinks: 1,
    paid: true
}

