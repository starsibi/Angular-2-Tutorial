import { Component } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: '/employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent {
  employee: object = {
    firstname: "",
    lastname: "",
    age: "",
    phonenumber: ""
  }
  //Condition for update button display.
  updatebutton: boolean;

  //Array of Object Creation to store the employee details
  public employees: Array<any> = [];

  //function while clikcing on the submit button.
  onsubmit(employeform) {
    this.employees.push(employeform.form.value);
    employeform.reset();
    alert("Created Successfully");
  }

  //function to delete the employee detail
  deleteEmployee(employee) {
    for (var i = 0; i < this.employees.length; i++) {
      if (employee.firstname == this.employees[i].firstname) {
        delete this.employees[i];
        alert("Deleted Successfully");
      }
      if (this.employees.length == 1) {
        this.employees.length = 0;
      }
    }
  }
  
  //function will call once we click on update button on the table
  updateEmployee(employee) {
    this.updatebutton = true;
    this.employee = employee;
  }

  //function will call once we need to update the form.
  update(employeeform) {
    var employee = employeeform.form.value;
    for (var i = 0; i < this.employees.length; i++) {
      if (employee.firstname == this.employees[i].firstname) {
        this.employees[i] = employee;
        this.updatebutton = false;
        employeeform.reset();
        alert("updated Successfully");
      }
    }
  }
}