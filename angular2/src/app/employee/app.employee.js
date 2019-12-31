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
var AppEmployee = /** @class */ (function () {
    function AppEmployee() {
        this.propertyBindingExample = 'Property Binding Examples';
        this.isDisabled = true;
        this.colSpan = 2;
        this.findAllClass = 'pNew fNew';
        this.required = false;
        this.requiredNew = 'newMan';
    }
    AppEmployee.prototype.calMe = function () {
        console.log("clicked..");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AppEmployee.prototype, "getAllData", void 0);
    AppEmployee = __decorate([
        core_1.Component({
            selector: 'app-emp',
            templateUrl: './app.employee.html',
            styleUrls: ['./app.employee.css']
        })
    ], AppEmployee);
    return AppEmployee;
}());
exports.AppEmployee = AppEmployee;
//# sourceMappingURL=app.employee.js.map