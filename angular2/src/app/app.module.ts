import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppEmployee } from './employee/app.employee';
import { Student } from './student/student.component';
import { StudentPipe } from './student/student.pipe';
import { Child } from './Child/child.component';
import { Parent } from './Parent/parent.component';
import { Simple } from './LifeCycleHooks/app.simple';
import { Lifecycle } from './LifeCycleChild/app.lifecycle';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, AppEmployee, Student, StudentPipe, Child, Parent, Simple, Lifecycle],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
