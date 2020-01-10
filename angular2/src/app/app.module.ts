import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { AppEmployee } from './employee/app.employee';
import { Student } from './student/student.component';
import { StudentPipe } from './student/student.pipe';
import { Child } from './Child/child.component';
import { Parent } from './Parent/parent.component';
import { Simple } from './LifeCycleHooks/app.simple';
import { Lifecycle } from './LifeCycleChild/app.lifecycle';
import { Footer } from './Check2WaysDataBinding/Footer';
import { Header } from './Check2WaysDataBinding/header';
import { Code } from './Check2WaysDataBinding/code';
import { Home } from './routeFolder/home.component';
import { notFound } from './NotFound/notfoundComponent';
import { Leader } from './leader';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, //when localhost:880/projectname will run....
    { path: 'home', component: Home },
    { path: 'list', component: Leader },
    { path: 'cc/:code', component: Code },
    { path: '**', component: notFound } //should be at bottom. (more specific at top, more general at bottom.)
];

//we need to tell angular router about new routes...so do RouterModule.forRoot(appRoutes)]
//include in web config..
    
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [AppComponent, AppEmployee, Student, StudentPipe, Child, Parent, Simple,
        Lifecycle, Header, Footer, Home, notFound, Leader, Code],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
