const cartItems = JSON.parse(localStorage.getItem('productInfo'));

for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i]
    const table = document.querySelector('table');
const row = document.createElement('tr');
const productImageHolder = document.createElement('td');
const productName = document.createElement('td');
const productQty = document.createElement('td');
const productPrice = document.createElement('td')
const productTotal = document.createElement('td')

productPrice.classList.add('price')

table.appendChild(row)
row.appendChild(productImageHolder)
row.appendChild(productName)
row.appendChild(productQty)
row.appendChild(productPrice)
row.appendChild(productTotal)
console.log(table);

productImageHolder.innerHTML = `
<img src=${cartItem.image} />
`

productName.innerHTML = JSON.stringify(cartItem.name);
productQty.innerHTML = `
<input type='number'  id='qtyOfGoods' value=1 />`
productPrice.innerHTML = cartItem.description;

const quantityInputs = document.querySelectorAll('#qtyOfGoods');

quantityInputs.forEach(quantityInput => {
    
    quantityInput.addEventListener('input', calculatePrice)
    
    function calculatePrice() {
        const price = document.querySelector('.price')
        const qty = parseFloat(quantityInput.value);
        const productSymbol = `$`
        const priceValue = parseFloat(price.innerHTML.replace(productSymbol,''));
        const total = qty * priceValue;
        
        if (quantityInput.value === '') {
            productTotal.innerHTML = 0
        } else {
            productTotal.innerHTML =`$` + total
            // SUBTOTALS AND FINAL PRICE
            const subTotal = document.querySelector('.subTotals'),
            finalPrice =  document.querySelector('.finalPrice');
            
            subTotal.innerHTML = `$${150}`;
            finalPrice.innerHTML = `$${total+150}`
        }
    }
    
    document.getElementById('cartButton').onclick = () =>{
        if (table.innerHTML === '') {
            alert(`THE CART IS EMPTY!`)
        } else {
            alert(`CHECKOUT SUCCESSFUL`)
            row.innerHTML = ''
        }
    }
    
}

)



}