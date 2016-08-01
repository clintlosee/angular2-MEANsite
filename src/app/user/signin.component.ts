import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { CustomValidators } from './customValidators';

@Component({
    selector: 'signin',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input [ngFormControl]="myForm.find('email')" type="email" id="email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input [ngFormControl]="myForm.find('password')" type="password" id="password" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign Up</button>
            </form>
        </section>
    `
})

export class SigninComponent implements OnInit {
    myForm: ControlGroup;

    constructor(private _fb: FormBuilder) {
        this.myForm = this._fb.group({
            email: ['', Validators.compose([
                Validators.required,
                CustomValidators.isEmail
            ])],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        console.log(this.myForm.value);
    }

    ngOnInit() {
        
    }
}