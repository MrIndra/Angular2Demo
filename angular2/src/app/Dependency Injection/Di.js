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
var router_1 = require("@angular/router");
var Di = /** @class */ (function () {
    function Di(EService, _activatedRoute) {
        this.EService = EService;
        this._activatedRoute = _activatedRoute;
        //providers are usud by Angular Injector for creating and injecting Dependency Injection...
        //Dependency provides singleton...single instance of a service
    }
    Di.prototype.ngOnInit = function () {
        var _this = this;
        console.log("hitted");
        var codeParam = this._activatedRoute.snapshot.params['code'];
        this.EService.getDataWithCode(codeParam).subscribe(function (data) {
            if (data == null) {
                _this.message = "no data";
            }
            else {
                _this.serviceCalss = data;
            }
        });
    };
    Di = __decorate([
        core_1.Component({
            template: "",
        }),
        __metadata("design:paramtypes", [webApiService_1.webApiService, router_1.ActivatedRoute])
    ], Di);
    return Di;
}());
exports.Di = Di;
//# sourceMappingURL=Di.js.map