"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Leader = /** @class */ (function () {
    function Leader() {
        //@Output()
        this.name = "indrajit";
        //@Output()
        this.age = 122;
        //@Output()
        this.sex = "male";
    }
    Leader.prototype.getAll = function () {
        return this.name + "-------" + this.age + this.sex;
    };
    Leader = __decorate([
        core_1.Component({
            selector: 'leader',
            templateUrl: './leader.html',
        })
    ], Leader);
    return Leader;
}());
exports.Leader = Leader;
//# sourceMappingURL=leader.js.map