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
var Footer = /** @class */ (function () {
    function Footer() {
    }
    //@Output()
    //forr_header: EventEmitter<string> = new EventEmitter<string>();
    Footer.prototype.ngOnInit = function () {
        console.log("INIT FOOTER");
        //this.forr_header.emit("MAurya");
    };
    Footer.prototype.ngOnChanges = function (changes) {
        console.log("********************** Change footer");
        for (var a in changes) {
            var aa = changes[a];
            console.log(aa + "==" + aa.currentValue + "==" + aa.currentValue);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Footer.prototype, "change", void 0);
    Footer = __decorate([
        core_1.Component({
            selector: 'Footer',
            template: "footer {{change}}",
        })
    ], Footer);
    return Footer;
}());
exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map