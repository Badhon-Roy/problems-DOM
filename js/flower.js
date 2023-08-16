let total = 0;
function getPrice(target) {
    const productTitle = target.parentNode.parentNode.children[0].innerText;
    const calculation = document.getElementById("calculation");
    const li = document.createElement("li");
    li.innerText = productTitle;
    li.id = "collection-product"
    const mainTotal = document.getElementById("main-total")
    calculation.insertBefore(li, mainTotal);
    const liCount = document.querySelectorAll('#collection-product').length;
    if (liCount >= 10) {
        alert('The product list items is greater than 10!');
    }
    const price = target.parentNode.parentNode.children[2].innerText.split(" ")[2];

    total = parseInt(total) + parseInt(price);
    const mainPrice = document.getElementById("main-price");
    mainPrice.innerText = total;
    const mainTotalPrice = parseInt(mainPrice.innerText);

    const discount = document.getElementById("discount");
    const discountParcent = 20;
    const discountPrice = discountParcent / 100 * mainTotalPrice
    discount.innerText = discountPrice;
    const discountTotalPrice = parseInt(discount.innerText);

    const totalPay = document.getElementById("total-pay");
    totalPay.innerText = mainTotalPrice - discountTotalPrice;
}