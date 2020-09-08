// Клас людина:
// поля:
//   вага,зріст
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    return Human;
}());
//   Клас депутат(наслідується від людини):
//   поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
//   методи:
//     дати хабаря(зробити відповідні перевірки...
//       якщо депутат не хабарник то щоб він відмовився,
//       або ж якщо сума хабаря надто велика то щоб він вагався
//       чи брати чи ні)
var deputy = /** @class */ (function (_super) {
    __extends(deputy, _super);
    function deputy(name, surname, age, weight, height, briber, amountOfBribe) {
        var _this = _super.call(this, weight, height) || this;
        _this.name = name;
        _this.surname = surname;
        _this.briber = briber;
        _this.age = age;
        _this.amountOfBribe = amountOfBribe;
        return _this;
    }
    deputy.prototype.giveBribe = function (bribe) {
        if (this.briber === true) {
            if (bribe > 1000000 && Math.random() > 0, 5) {
                this.amountOfBribe = this.amountOfBribe + bribe;
                return true;
            }
        }
        return false;
    };
    return deputy;
}(Human));
var skotyniaka = new deputy("Oleg", "Lyashko", 45, 95, 185, true, 800000);
var korchinskaya = new deputy("Oksana", "Korchinskaya", 50, 65, 172, false, 50000);
var razumkow = new deputy("Dmytro", "Razumkow", 37, 90, 186, true, 50000);
var kornienko = new deputy("Olexandr", "Kornienko", 38, 87, 180, false, 0);
var kalchenko = new deputy("Sergiy", "Kalchenko", 55, 105, 190, true, 760000);
var poroh = new deputy("Petro", "Poroshenko", 55, 98, 187, true, 2000000);
var parubiy = new deputy("Andry", "Parubiy", 47, 89, 185, false, 0);
skotyniaka.giveBribe(5000000);
//   Клас фракція
//   поля:
//     список депутатів
//   методи:
//     додати депутата  +
//     видалити депутата +
//     вивести найбільшого хабарника +
//     вивести всіх депутатів +
//     видалити всіх депутатів +
//     вивести загальну суму хабарів для фракції
var fraction = /** @class */ (function () {
    function fraction(nameFr) {
        this.masDep = [];
        this.nameFr = nameFr;
    }
    fraction.prototype.addInFract = function (nameDep) {
        this.masDep.push(nameDep);
    };
    fraction.prototype.delInFract = function (i) {
        var _this = this;
        this.masDep.forEach(function (element) {
            _this.masDep.splice(i, 1);
        });
    };
    fraction.prototype.maxBribe = function () {
        console.log(this.masDep.sort(function (a, b) { return b.amountOfBribe - a.amountOfBribe; })[0]);
    };
    fraction.prototype.selectAll = function () {
        console.log(this.masDep);
    };
    fraction.prototype.delAll = function () {
        this.masDep = [];
    };
    fraction.prototype.sumForFract = function () {
        console.log(this.masDep.reduce(function (a, b) { return a + b.amountOfBribe; }, 0));
    };
    return fraction;
}());
var radicalnaPart = new fraction('radicalnaPart');
var ze = new fraction('ze');
var es = new fraction('eS');
radicalnaPart.addInFract(skotyniaka);
radicalnaPart.addInFract(korchinskaya);
ze.addInFract(razumkow);
ze.addInFract(kornienko);
ze.delInFract(1);
ze.addInFract(kalchenko);
es.addInFract(poroh);
es.addInFract(parubiy);
// клас Верховна рада
//   поля:
//     мапа фракцій
//   методи:
//     додати\видалити фракцію 
//     вивести всі фракції 
//     вивести конкретну фракцію 
//     додати\видалити депутата з фракції 
//     
var rada = /** @class */ (function () {
    function rada() {
        this.masFract = [];
    }
    rada.prototype.addInRada = function (nameFract) {
        this.masFract.push(nameFract);
    };
    rada.prototype.delAllFr = function () {
        this.masFract = [];
    };
    rada.prototype.selectFraction = function (nameFract) {
        console.log(this.masFract.filter(function (value) { return value.nameFr === nameFract; }));
    };
    rada.prototype.addDeputat = function (deputat, fraktsia) {
        for (var _i = 0, _a = this.masFract; _i < _a.length; _i++) {
            var fraction_1 = _a[_i];
            if (fraktsia === fraction_1.nameFr) {
                fraction_1.masDep.push(deputat);
            }
        }
    };
    return rada;
}());
var verhovnaRada = new rada();
verhovnaRada.addInRada(ze);
verhovnaRada.addInRada(es);
verhovnaRada.addInRada(radicalnaPart);
