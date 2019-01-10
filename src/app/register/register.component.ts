import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:  FormGroup;
  submitted = false;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      first_name : ['',[Validators.required,Validators.minLength(3)]],
      last_name : ['',[Validators.required,Validators.minLength(3)]],
      address : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      birth_date : ['',Validators.required],
      gender : ['',Validators.required],
      admission : ['',Validators.required],
      university : ['',Validators.required],
      college : ['',Validators.required],
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    //console.log(this.registerForm.controls.first_name.errors);
    console.log(JSON.stringify(this.registerForm.value));
    //console.log(this.registerForm);
  }

  reset() {
    this.registerForm.reset();
  }


}
