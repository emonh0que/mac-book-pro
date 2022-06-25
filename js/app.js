
function gettingPrice(priceId, actualPrice){
    const price = document.getElementById(priceId);
    
    price.innerText = actualPrice;
    totalPrice();
}

// calculate total price function

function totalPrice(){
    const basicPrice = 1299;
    const memoryPrice = parseInt(document.getElementById('memory-price').innerText);
    const storagePrice = parseInt(document.getElementById('storage-price').innerText);
    const deliveryCharge = parseInt(document.getElementById('deliveryCharge').innerText);
    const totalPrice = basicPrice + memoryPrice + storagePrice + deliveryCharge;
    document.getElementById('total').innerText = totalPrice;
    document.getElementById('grand-total').innerText = totalPrice;

}
// implementing cupon function
function cupon(){
    const cuponText = document.getElementById('cupon').value;
    const totalText = document.getElementById('total');
    const totalPrice = parseInt(document.getElementById('total').innerText);
    
    
    if(cuponText == 'stevekaku') {
        const discount = totalPrice * 0.2;
        const totalPriceAfterDiscount = totalPrice - discount;
        totalText.innerText = totalPriceAfterDiscount
        document.getElementById('grand-total').innerText = totalPriceAfterDiscount;
        
    }
    else{
        alert('cupon code does not exist');
    }
}

// cupon button 
document.getElementById('cupon-button').addEventListener('click', function(){
    cupon();
});
document.getElementById('eight-gb-memo').addEventListener('click', function(){
    // console.log('purcasing 8gb memory');
    gettingPrice('memory-price', 0)
});
document.getElementById('sixteen-gb-memo').addEventListener('click', function(){
    // console.log('purcasing 16gb memory');
    gettingPrice('memory-price', 180);
});
document.getElementById('storage256').addEventListener('click', function(){
    // console.log('purcasing 16gb memory');
    gettingPrice('storage-price', 0);
});
document.getElementById('storage500').addEventListener('click', function(){
    // console.log('purcasing 16gb memory');
    gettingPrice('storage-price', 100);
});
document.getElementById('storage1000').addEventListener('click', function(){
    // console.log('purcasing 16gb memory');
    gettingPrice('storage-price', 180);
});
document.getElementById('freeDelivery').addEventListener('click', function(){
    // console.log('purcasing 16gb memory');
    gettingPrice('deliveryCharge', 0);
});
document.getElementById('paidDelivery').addEventListener('click', function(){
    // console.log('purcasing 16gb memory');
    gettingPrice('deliveryCharge', 20);
});

