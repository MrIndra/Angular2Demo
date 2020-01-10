"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var app_employee_1 = require("./employee/app.employee");
var student_component_1 = require("./student/student.component");
var student_pipe_1 = require("./student/student.pipe");
var child_component_1 = require("./Child/child.component");
var parent_component_1 = require("./Parent/parent.component");
var app_simple_1 = require("./LifeCycleHooks/app.simple");
var app_lifecycle_1 = require("./LifeCycleChild/app.lifecycle");
var Footer_1 = require("./Check2WaysDataBinding/Footer");
var header_1 = require("./Check2WaysDataBinding/header");
var code_1 = require("./Check2WaysDataBinding/code");
var home_component_1 = require("./routeFolder/home.component");
var notfoundComponent_1 = require("./NotFound/notfoundComponent");
var leader_1 = require("./leader");
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.Home },
    { path: 'list', component: leader_1.Leader },
    { path: 'cc/:code', component: code_1.Code },
    { path: '**', component: notfoundComponent_1.notFound } //should be at bottom. (more specific at top, more general at bottom.)
];
//we need to tell angular router about new routes...so do RouterModule.forRoot(appRoutes)]
//include in web config..
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes, { useHash: true })],
            declarations: [app_component_1.AppComponent, app_employee_1.AppEmployee, student_component_1.Student, student_pipe_1.StudentPipe, child_component_1.Child, parent_component_1.Parent, app_simple_1.Simple,
                app_lifecycle_1.Lifecycle, header_1.Header, Footer_1.Footer, home_component_1.Home, notfoundComponent_1.notFound, leader_1.Leader, code_1.Code],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map