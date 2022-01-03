import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdentityValidator } from 'src/app/validator/identityNumber.validator';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm : FormGroup | undefined;
  constructor(private _formBuilder: FormBuilder) { 
   
  }
 
   ngOnInit(): void {
     this.initForm();
   }
 
   initForm(){
     this.userForm = this._formBuilder.group({
       identityNumber : ['', [Validators.required,IdentityValidator.isValidExtension]],
       email : ['',[Validators.required,Validators.email]],
       birthDate : ['',[Validators.required]],
       phone : ['',[Validators.required]],
       password : ['',[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]],
     })
   }

}
