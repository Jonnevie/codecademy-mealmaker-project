//codecademy Meal Maker Project


const menu = {
    _meal: ['Bibimbap', 'Beef Bulgogi', 'Gamjatang', 'Samgaetang'],
    _price: [60, 20, 50, 100, 70],
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string'){
         this._meal = mealToCheck;
    } else {
        console.log('this is not a meal!');
    }
},
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number')  {
         this._price = priceToCheck
    } else {
        console.log('this is not a price!');
    }
},

    get todaysSpecial(){
        if(this._meal && this._price) {
            return `Today's special is ${this._meal}, for $${this._price}.`
        }else {
            return console.log('Meal or price was not set correctly!');
        }
    }
};

arrayRandomizer = Math.floor(Math.random()*4);
arrayRandomizer2 = Math.floor(Math.random()*5)

menu.meal = menu._meal[arrayRandomizer];
menu.price = menu._price[arrayRandomizer2];

// console.log(arrayRandomizer);
// console.log(arrayRandomizer2);
console.log(menu.todaysSpecial);
