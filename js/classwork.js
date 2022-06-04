// function Car(model, color) {
//     this.model = model;
//     this.color = color;
// }
// const car1 = new Car('Ford', 'blue');
// const car2 = new Car('Toyota', 'white');


// function Tree(hight, weight){
//     this.hight = hight;
//     this.weight = weight;
// }

// let treeDub = new Tree(278, 299)

// let out = document.querySelector('.Out1')
// let butt = document.querySelector('.but1')
// butt.onclick = function() {
//     out.innerHTML = car1.model
// }


// function CarShop(carName, productionYear, powerHp, carPrice) {
//     this.carName = carName;
//     this.productionYear = productionYear;
//     this.powerHp = powerHp;
//     this.carPrice = carPrice;
//     this.carDiscount = function (discount) {

//         this.carPrice = this.carPrice - (this.carPrice / 100 * discount)


//     }
// }

// const salon = [
//     new CarShop('BMW', 2015, 245, 20000),
//     new CarShop('BMW', 2003, 204, 11000),
//     new CarShop('Skoda', 2007, 105, 4500),
//     new CarShop('Dacia', 2006, 78, 3500),
//     new CarShop('AUDI', 2019, 340, 45000),
//     new CarShop('Renault', 2016, 122, 12000),
//     new CarShop('BMW', 2021, 560, 98000)
// ]
// for (let discountCars of salon) {
//     if (discountCars.productionYear > 2010) {
//         discountCars.carDiscount(50)
//         console.log(discountCars)
//     }
// }

// function CarAuction(){
//     CarShop.call(this);
//     this.push('Mercedes', 2015, 200, 18000)
// }

// console.log(CarShop)

class Tiger {
    constructor() {
    }
    say() {
        console.log('RAR');
    }
}

 function Cow() {

 }
 Cow.prototype.say = function() {
     console.log('MOOOO');
 }

 function Dog(){

 }
 Dog.prototype.say = function() {
     console.log('WUF')
 }

 let animals = [new Tiger(), new Cow(), new Dog()];
 for (let animal of animals) {
     animal.say();
 }