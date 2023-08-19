let shoppingCart = [];

function AddToCart(_name, _price){
    let item = {
        Name: _name,
        Price: _price
    };

    let totalPrice = 0;
    shoppingCart.push(item);

    shoppingCart.forEach((i) => {
        console.log(i);
        totalPrice += i.Price;
    });


    console.log(shoppingCart);
    console.log("Total: $" + totalPrice);

}
