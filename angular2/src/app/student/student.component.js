"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Student = /** @class */ (function () {
    function Student() {
        this.isTrue = false;
        this.name = "tom";
        this.onChange = 'all';
        this.arrayOfStudents = [
            { name: 'indra', age: 26, sex: 'M', dob: '5/6/1992' },
            { name: 'indrajit', age: 29, sex: 'M', dob: '1/12/1992' },
            { name: 'indramaurya', age: 27, sex: 'F', dob: '2/14/1992' },
        ];
    }
    Student.prototype.tableAction = function () {
        this.isTrue = !this.isTrue;
    };
    Student.prototype.getAllEmployess = function () {
        this.arrayOfStudents = [
            { name: 'indra', age: 26, sex: 'M', dob: '5/6/1992' },
            { name: 'indrajit', age: 29, sex: 'M', dob: '1/12/1992' },
            { name: 'indramaurya', age: 27, sex: 'F', dob: '2/14/1992' },
            { name: 'indramauryadddddd', age: 27, sex: 'M', dob: '12/20/1992' },
        ];
    };
    Student.prototype.trackByCode = function (index, employee) {
        return employee.name;
    };
    Student.prototype.getStudentCount = function () {
        return this.arrayOfStudents.length;
    };
    Student.prototype.getMaleCount = function () {
        return this.arrayOfStudents.filter(function (x) { return x.sex === "M"; }).length;
    };
    Student.prototype.getFemaleCount = function () {
        return this.arrayOfStudents.filter(function (x) { return x.sex === "F"; }).length;
    };
    Student = __decorate([
        core_1.Component({
            selector: 'student',
            templateUrl: './student.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], Student);
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=student.component.js.map