import { Component, OnInit } from '@angular/core';
// import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { CustomValidators } from './customValidators';

import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'signin',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [formGroup]="signinForm" (ngSubmit)="onSubmit(signinForm.value)">
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
                <button type="submit" class="btn btn-primary" [disabled]="!signinForm.valid">Sign Up</button>
            </form>
        </section>
    `,
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class SigninComponent implements OnInit {
    signinForm: FormGroup;
    
    constructor(private _fb: FormBuilder, private formBuilder: FormBuilder) {}

    onSubmit(formContent) {
        console.log(formContent);
    }
    
    ngOnInit() {
        this.signinForm = this.formBuilder.group({
            email: ['', [Validators.required, CustomValidators.isEmail]],
            password: ['', Validators.required]
        });
    }

}