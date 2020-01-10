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
var app_service_1 = require("../Service/app.service");
var Singleton = /** @class */ (function () {
    function Singleton(EService) {
        this.EService = EService;
    }
    Object.defineProperty(Singleton.prototype, "color", {
        get: function () {
            console.log("dfdfdfdf");
            return this.eservice.color;
        },
        set: function (value) {
            this.eservice.color = value;
        },
        enumerable: true,
        configurable: true
    });
    Singleton = __decorate([
        core_1.Component({
            template: "<h1 [style.background]='color'>hello</h1>",
        }),
        __metadata("design:paramtypes", [app_service_1.ServiceClass])
    ], Singleton);
    return Singleton;
}());
exports.Singleton = Singleton;
//# sourceMappingURL=singleton.js.map