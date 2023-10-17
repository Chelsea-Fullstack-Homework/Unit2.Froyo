function froyo (flavor, amount) {
    this.flavor = flavor;
    this.amount = amount;
}

let froyoString = prompt("Enter a list of comma-separated froyo flavors", "");

let froyoStringArray = froyoString.split(",");