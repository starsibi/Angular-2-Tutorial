import{Directive,ElementRef,Input,HostListener}from'@angular/core'
import{Form} from'@angular/forms'

@Directive({
    selector:'[employeeAge]'
})
export class EmployeeAge{
    
    constructor(private el:ElementRef){

    }
    @HostListener('keyup') onkeyup(){
        debugger
        if(this.el.nativeElement.value.length>1 && this.el.nativeElement.value.length<3){
            return true;
        }
        else{
            return false;
        }
    }
}