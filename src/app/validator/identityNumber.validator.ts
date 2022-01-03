import { AbstractControl, ValidationErrors } from "@angular/forms";

export class IdentityValidator{

   //todo:Identification number check will be added
     static isValidExtension(control:AbstractControl) : ValidationErrors | null{

        const element = control.value;

        if(!element)
            return null;
            
        if (Number.isNaN(element.someValue)){
            return { wrongIdentityNumber : {message: "Identification number must be number only" }}
        }
       
        if(element.toString().length != 11){
            return { wrongIdentityNumber : {message: "Identification number must be 11 characters"}}
        }
        
        return null;
     }

     
}