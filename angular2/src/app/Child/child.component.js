"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Child = /** @class */ (function () {
    function Child() {
        this.arrayOfStudents = [
            { name: 'indra', age: 26, sex: 'M', dob: '5/6/1992' },
            { name: 'indrajit', age: 29, sex: 'M', dob: '1/12/1992' },
            { name: 'indramaurya', age: 27, sex: 'F', dob: '2/14/1992' },
            { name: 'indramauryadddddd', age: 27, sex: 'M', dob: '12/20/1992' },
        ];
        this.onChange = "all";
    }
    Child.prototype.getAll = function () {
        return this.arrayOfStudents.length;
    };
    Child.prototype.getMale = function () {
        return this.arrayOfStudents.filter(function (x) { return x.sex == 'M'; }).length;
    };
    Child.prototype.getFemale = function () {
        return this.arrayOfStudents.filter(function (x) { return x.sex == 'F'; }).length;
    };
    Child.prototype.selectedButton = function (btn) {
        this.onChange = btn;
    };
    Child = __decorate([
        core_1.Component({
            selector: 'child',
            templateUrl: './child.component.html',
        })
    ], Child);
    return Child;
}());
exports.Child = Child;
//# sourceMappingURL=child.component.js.map