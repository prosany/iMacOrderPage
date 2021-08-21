// total Price calculation 
function updateTotalPrice() {
    const bestPrice = parseInt(document.getElementById('basePrice').innerText);
    const memoryCost = parseInt(document.getElementById('totalMemoryCost').innerText);
    const storageCost = parseInt(document.getElementById('totalStorageCost').innerText);
    const DeliveryCharge = parseInt(document.getElementById('totalDeliveryCharge').innerText);
    const totalPrice = bestPrice + memoryCost + storageCost + DeliveryCharge;
    document.getElementById('totalPrice').innerText = totalPrice;
    document.getElementById('overall-price').innerText = totalPrice;
};



const mbasePrice = document.getElementById('mbasePrice');
const mExtraPrice = document.getElementById('mExtraPrice');
let totalMemoryCost = document.getElementById('totalMemoryCost');

// extra memory cost
mbasePrice.addEventListener('click', function () {
    totalMemoryCost.innerText = 0;
    mbasePrice.classList.add("active");
    mExtraPrice.classList.remove("active");
    document.getElementById('promoCode').innerText = "";
    updateTotalPrice();
});
mExtraPrice.addEventListener('click', function () {
    totalMemoryCost.innerText = 180;
    mbasePrice.classList.remove("active");
    mExtraPrice.classList.add("active");
    document.getElementById('promoCode').innerText = "";
    updateTotalPrice();
});

// extra storage cost 
const sBasePrice = document.getElementById('sBasePrice');
const sExtraPriceOne = document.getElementById('sExtraPriceOne');
const sExtraPriceTwo = document.getElementById('sExtraPriceTwo');
let totalStorageCost = document.getElementById('totalStorageCost');


sBasePrice.addEventListener('click', function () {
    totalStorageCost.innerText = 0;
    sBasePrice.classList.add("active");
    sExtraPriceOne.classList.remove("active");
    sExtraPriceTwo.classList.remove("active");
    document.getElementById('promoCode').innerText = "";
    updateTotalPrice();
});
sExtraPriceOne.addEventListener('click', function () {
    totalStorageCost.innerText = 100;
    sBasePrice.classList.remove("active");
    sExtraPriceOne.classList.add("active");
    sExtraPriceTwo.classList.remove("active");
    document.getElementById('promoCode').innerText = "";
    updateTotalPrice();
});
sExtraPriceTwo.addEventListener('click', function () {
    totalStorageCost.innerText = 180;
    sBasePrice.classList.remove("active");
    sExtraPriceOne.classList.remove("active");
    sExtraPriceTwo.classList.add("active");
    document.getElementById('promoCode').innerText = "";
    updateTotalPrice();
});

// extra delivery charge 
const freeDelivery = document.getElementById('freeDelivery');
const deliveryApply = document.getElementById('deliveryApply');
const totalDeliveryCharge = document.getElementById('totalDeliveryCharge');

freeDelivery.addEventListener('click', function () {
    totalDeliveryCharge.innerText = 0;
    freeDelivery.classList.add("active");
    deliveryApply.classList.remove("active");
    document.getElementById('promoCode').innerText = "";
    updateTotalPrice();
});
deliveryApply.addEventListener('click', function () {
    totalDeliveryCharge.innerText = 20;
    freeDelivery.classList.remove("active");
    deliveryApply.classList.add("active");
    document.getElementById('promoCode').innerText = "";
    updateTotalPrice();
});


// promo Code for 20% discount 
function promoCodeApply() {
    const promoCode = document.getElementById('promo').value;
    if (promoCode.toLowerCase() == 'stevekaku') {
        let totalPrice = parseFloat(document.getElementById('totalPrice').innerText);
        
        totalPrice = totalPrice - (totalPrice * 0.20);
        document.getElementById('promoCode').innerText = "Promo Code Applied & You Get 20% Off";
        document.getElementById('overall-price').innerText = Math.round(totalPrice);
    };
    document.getElementById('promo').value = '';
};