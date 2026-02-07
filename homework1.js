const cart = [
    {
        name: 'shoes',
        price: 1000
    },
    {
        name: "pants",
        price: 1500
    }, 
    {
        name: "shirts",
        price: 1200
    }
];

const wallet = 100000;
const orderId = 12345;

createOrder(cart)
    .then(function(orderId) {
        console.log(orderId);
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo) {
        return showOrderSummary(cart);
    })
    .then(function(orderSummary) {
        // console.log(orderSummary);
        return updateWallet(orderSummary.total, wallet);
        console.log(wallet);
    })
    .then(function(updatedWallet) {
        console.log(updatedWallet);
    });

//createOrder, proceedToPayment, showOrderSummary, updateWallet
function createOrder(cart) {
    return new Promise((resolve, reject) => {
        resolve(orderId);
    });
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve({ 
            status: "success", 
            orderId: orderId
        });
    });
}

function showOrderSummary(cart) {
    return new Promise((resolve, reject) => {
        const total = cart.reduce((acc, curr) => {
            return acc + curr.price;
        }, 0);
        resolve({ cart, total });
    });
}

function updateWallet(total, wallet) {
    return new Promise((resolve, reject) => {
        resolve(wallet - total);
    })
}