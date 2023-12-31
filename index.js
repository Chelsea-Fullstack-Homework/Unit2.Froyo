function Froyo (flavor, amount) {
    this.flavor = flavor;
    this.amount = amount;
}

let froyoString = prompt("Enter a list of comma-separated froyo flavors", "");

let stringToArray = (str) => {
    let rawArr = str.split(",");
    let arr = [];
    rawArr.forEach(
        (str, index)=>{
            arr.push(str.trim());
        }
    );
    return arr;
}

let addToCart = (froyoStringArray) => {
    if (froyoStringArray[0] == "") return "Cart Empty!";

    let cart = [];
    let first = true;

    for (let i of froyoStringArray) {
        if (!first) {
            for (let j = 0; j < cart.length; j++) {
                if (i == cart[j].flavor) {
                    cart[j].amount++;
                    break;
                } else if (j == cart.length-1) {
                    cart.push(new Froyo(i, 1));
                    break;
                }
            }    
        } else {
            cart.push(new Froyo(froyoStringArray[0],1));
            first = false;
        }
    }
    return cart;
}

console.log("You ordered: " + froyoString);
let order = stringToArray(froyoString);
console.log(addToCart(order));