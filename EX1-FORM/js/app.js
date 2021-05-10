
let showItem = () => {
    const ul = document.querySelector('ul');
    if (ul !== null) ul.remove();
    const itemList = document.createElement('ul');
    for (let item of items) {
        if (item.avaible === "yes") {
            const newItem = document.createElement('li');
            const itemValue = document.createElement('span');
            const itemPrice = document.createElement('span');
    
            itemValue.textContent = item.name;
            itemPrice.textContent = item.price;
            newItem.style.color = item.color;
    
            newItem.appendChild(itemValue);
            newItem.appendChild(itemPrice);
    
            itemList.appendChild(newItem);
    
            containerItem.appendChild(itemList);
        }
       
    }

}

let save = () => {
    localStorage.setItem('itemKey', JSON.stringify(items));
}

let loard = () => {
    let data = localStorage.getItem('itemKey');
    if (data !== null) {
        items = JSON.parse(data);
        
    }else {
        items = [];
    }
}
let addNewCart = (event) => {
    event.preventDefault();
    const item = document.querySelector('#item').value;
    const price = document.querySelector('#price').value;
    const avaibles = document.querySelectorAll('[type=radio]');
    const color = document.querySelector('#color').value;
    let inStock = "";
    for (let avaible of avaibles) {
        if (avaible.checked) {
            inStock = avaible.value;
        }
    }
    let newItem = {name : item, price: price, avaible: inStock, color : color}
    items.push(newItem);
    save();

    showItem();

} 

let items = [];

const addCart = document.querySelector('button');
const containerItem = document.querySelector('.container-item');
addCart.addEventListener('click', addNewCart);

loard();

showItem();