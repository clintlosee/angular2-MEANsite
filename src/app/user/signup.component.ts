import { Component, OnInit } from '@angular/core';
import { CustomValidators } from './customValidators';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user';
import { AuthService } from './auth.service';

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

    constructor(private formBuilder: FormBuilder, private _authService: AuthService, private _router: Router) {}

    onSubmit() {
        const user = new User(
            this.signupForm.value.email, 
            this.signupForm.value.password, 
            this.signupForm.value.firstName, 
            this.signupForm.value.lastName
        );
        this._authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this._router.navigate(['/auth/signin']);
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