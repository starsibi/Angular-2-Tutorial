import{Component} from'@angular/core';

@Component({
  selector:'my-employee',
  templateUrl:'/employee.component.html',
  styleUrls:['./employee.component.css']
})

export class EmployeeComponent{
 employee : object={
  firstname:"",
  lastname:"",
  age:"",
  phonenumber:""
 } 
 onsubmit(employeform){
   debugger
    console.log(JSON.stringify(employeform.form.value));
 }
}