const products = JSON.parse(window.localStorage.getItem('products')) || [];

products.forEach(function(product) {
    render(product);
    product.quantity + '</li>';

});

function addProduct() {
    const isShow = document.querySelector('input[name="show"]:checked').value === 'true';
    console.log(isShow);
    const prod = { name: product.value, price: price.value, quantity: quantity.value, id: new Date(), show: isShow, sort: sort.value };

    products.push(prod);
    render(prod);
    
    
    window.localStorage.setItem('products' , JSON.stringify(products)); 
}

function searchProduct() {
    const searchProducts = products.filter(function(product) {
        const productName = product.name.substring(0, search.value.length);
        return productName === search.value;
    });

    list.innerHTML = '';

    searchProducts.forEach(function(product) {
        render (product)
    });     
} 
function sortProducts() {
    const field = sort.value;
    products.sort(function(prev, next) {
        if (prev[field] < next[field]) {
            return -1;
        }
        if (prev[field] > next[field]) {
            return 1;
        }
        return 0;
    })

    list.innerHTML = '';

    products.forEach(function(product) {
        render (product)
    });  
}
function sortByPrice() {
    const sortBy = document.querySelector('#sort_by_price').value;
    products.sort(function(a, b) {
        if (sortBy === 'low') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
    
    list.innerHTML = '';

    products.forEach(function(product) {
        render (product)
    });  
}
function render (product) {
    if (!product.show) {
       return;
    }
        list.innerHTML = list.innerHTML + '<li>' + product.name + ': ' + product.price + ' zloty. in stock: ' + product.quantity + '</li>';
}
// добавления радиокнопки со значениями: Показывать? о да о нет

