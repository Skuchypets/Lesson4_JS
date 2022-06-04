function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = () => {
    this.price = this.price - (this.price / 100 * 25);
};
let priceProd = new Product('Mouse', 600);
priceProd.make25PercentDiscount();

console.log(priceProd);




// Сначала сделай сам, не работает, потом посмотрел Ваше решение. все также сделал и причем верно сделал. Но оно зараза не работает почему -то. цену не меняет.
// HELP!!!!!!!

// ХАХАХА... если преобразовать в класс ES2015 то все работает. почему?


class Towar {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    

    make25Discount() {
        this.price = this.price - (this.price / 100 * 25);
    }
}

const towar1 = new Towar('Dog', 700);
towar1.make25Discount();

console.log(towar1)

// а вот тут уже меняет. и не пойму почему