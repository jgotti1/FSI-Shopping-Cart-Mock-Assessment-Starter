let quantity = 1;
let plusbutton = document.querySelector('#quantity-up');
plusbutton.addEventListener('click', function() {

    quantity = quantity + 1;
    let totalquantity = document.querySelector('.total-quantity');
    totalquantity.textContent = `Quantity: ${quantity}`;
});
let minusbutton = document.querySelector('#quantity-down');
minusbutton.addEventListener('click', function() {

    quantity = quantity - 1;
    if  (quantity < 0)
        quantity = 0;
    let totalquantity = document.querySelector('.total-quantity');
    totalquantity.textContent = `Quantity: ${quantity}`;
});