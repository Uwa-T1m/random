const cartItems = JSON.parse(localStorage.getItem('productInfo'));

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
<img src=${cartItems[0].image} />
`

productName.innerHTML = JSON.stringify(cartItems[0].name);
productQty.innerHTML = `
<input type='number'  id='qtyOfGoods' value=1 />`
productPrice.innerHTML = cartItems[0].description;


const quantityInputs = document.querySelectorAll('#qtyOfGoods');

quantityInputs.forEach(quantityInput => {
    
    quantityInput.addEventListener('input', calculatePrice)
    
    function calculatePrice() {
        const price = document.querySelector('.price')
        const qty = parseFloat(quantityInput.value);
        const priceValue = parseFloat(price.innerHTML);
        const total = qty * priceValue;
        
        if (quantityInput.value === '') {
            productTotal.innerHTML = 0
        } else {
            productTotal.innerHTML = total
            // SUBTOTALS AND FINAL PRICE
            const subTotal = document.querySelector('.subTotals'),
            finalPrice =  document.querySelector('.finalPrice');
            
            subTotal.innerHTML = `$${150}`;
            finalPrice.innerHTML = `$${total+150}`
        }
    }
    
    document.getElementById('cartButton').onclick = () =>{
        if (row.innerHTML = '') {
            alert(`THE CART IS EMPTY!`)
        } else {
            alert(`CHECKOUT SUCCESSFUL`)
        }
    }
    
}
)

