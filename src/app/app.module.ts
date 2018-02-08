import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import{ EmployeeAge }from'./employee/employeeage.directive'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeAge
  ],
  imports: [
    BrowserModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
