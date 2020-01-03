"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//short hand typescript.....when implements parent..
var newClass = /** @class */ (function () {
    function newClass(name, sex, age, dob) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.dob = dob;
    }
    newClass.prototype.functionName = function (optional) {
        console.log(optional);
    };
    return newClass;
}());
exports.newClass = newClass;
//# sourceMappingURL=child.js.map