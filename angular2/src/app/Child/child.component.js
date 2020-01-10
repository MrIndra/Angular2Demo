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
var webApiService_1 = require("../Service/webApiService");
var Child = /** @class */ (function () {
    function Child(abcde) {
        this.abcde = abcde;
        //for normal calls.
        //ngOnInit(): void {
        //    console.log("init");
        //    this.arrayOfStudents = this.abcde.getStudents();
        //}
        //for web api
        this.errorF = "please wait...";
        this.onChange = "all";
    }
    Child.prototype.ngOnInit = function () {
        var _this = this;
        console.log("init");
        this.abcde.getStudents().subscribe(function (data) { return _this.arrayOfStudents = data; }, function (error) { return _this.errorF = error; });
    };
    Child.prototype.ngOnChanges = function () {
        console.log("changes");
    };
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
            providers: [webApiService_1.webApiService]
        }),
        __metadata("design:paramtypes", [webApiService_1.webApiService])
    ], Child);
    return Child;
}());
exports.Child = Child;
//# sourceMappingURL=child.component.js.map