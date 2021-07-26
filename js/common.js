$(function() {
    let obj = {
        product_1: {
            'name': 'Продукт 1',
            'price': 1200
        },
        product_2: {
            'name': 'Продукт 2',
            'price': 1400
        },
        product_3: {
            'name': 'Продукт 3',
            'price': 1600
        },
    }
    let name_Product = document.querySelector('#product_1');
    let name_Product2 = document.querySelector('#product_2');
    let name_Product3 = document.querySelector('#product_3');
    name_Product.innerHTML = obj.product_1.name;
    name_Product2.innerHTML = obj.product_2.name;
    name_Product3.innerHTML = obj.product_3.name;

    let name_Price = document.querySelector('#price_1 span');
    let name_Price2 = document.querySelector('#price_2 span');
    let name_Price3 = document.querySelector('#price_3 span');
    name_Price.innerHTML = obj.product_1.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    name_Price2.innerHTML = obj.product_2.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    name_Price3.innerHTML = obj.product_3.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

    $(".btn__item").click(function() {
        $(this).prop("disabled", true).css({ 'background': '#22943C' }).html('Добавлено');
        let currentPrice = $(this).closest('.item__product').find('.price__item span').text();
        let cost_Price = $('.cost__price span').text();
        let general_Price = parseInt(cost_Price.replace(/\s/g, '')) + parseInt(currentPrice.replace(/\s/g, ''));
        $('.cost__price span').text(general_Price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
    });

});