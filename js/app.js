const WEIGHT_APPLE_DEFAULT = 10;
let Apple = function () {
    this.weight = WEIGHT_APPLE_DEFAULT;
    this.getWeight = function () {
        return this.weight;
    }
};

let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.getName = function () {
        return this.name;
    };
    this.getGender = function () {
        return this.gender
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.speak = function () {
        console.log("Hello !! My name is " + this.name + " i'm " + this.weight + " kg");
    };
    this.eatApple = function (apple) {
        if (apple.weight > 0) {
            this.weight++;
            apple.weight--
        }
    };
    this.checkWeightOf = function (apple) {
        return apple.getWeight();
    }
};

let apple = new Apple()
let adam = new Human("adam", "male", "70");
let eva = new Human("eva", "female", "50");

console.log(adam.getWeight());
console.log(eva.getWeight());
adam.speak();
eva.speak();
adam.eatApple(apple);
eva.eatApple(apple);
console.log(adam.getWeight());
console.log(eva.getWeight());
console.log(adam.checkWeightOf(apple));
console.log(eva.checkWeightOf(apple));

