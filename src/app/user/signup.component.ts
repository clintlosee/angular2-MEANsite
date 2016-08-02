import { Component, OnInit } from '@angular/core';
import { CustomValidators } from './customValidators';

import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'signup',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input 
                        formControlName="firstName"
                        type="text" 
                        id="firstName" 
                        class="form-control">
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input 
                        formControlName="lastName" 
                        type="text" 
                        id="lastName" 
                        class="form-control">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input 
                        formControlName="email" 
                        type="email" 
                        id="email" 
                        class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input 
                        formControlName="password" 
                        type="password" 
                        id="password" 
                        class="form-control">
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!signupForm.valid">Sign Up</button>
            </form>
        </section>
    `,
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class SignupComponent implements OnInit {
    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    onSubmit() {
        console.log(this.signupForm.value);
    }
    
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, CustomValidators.isEmail]],
            password: ['', Validators.required]
        });
    }
}