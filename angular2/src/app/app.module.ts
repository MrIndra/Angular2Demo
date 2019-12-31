import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppEmployee } from './employee/app.employee';
import { Student } from './student/student.component';
import { StudentPipe } from './student/student.pipe';
import { Child } from './Child/child.component';
import { Parent } from './Parent/parent.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, AppEmployee, Student, StudentPipe, Child, Parent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
