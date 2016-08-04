import { Component, OnInit } from '@angular/core';
import { CustomValidators } from './customValidators';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { AuthService } from './auth.service';
import { ErrorService } from '../errors/error.service';
import { Router } from '@angular/router';

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
                <button type="submit" class="btn btn-primary" [disabled]="!signinForm.valid">Sign In</button>
            </form>
        </section>
    `,
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class SigninComponent implements OnInit {
    signinForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder, private _authService: AuthService, private _router: Router, private _errorService: ErrorService) {}

    onSubmit(formContent) {
        const user = new User(this.signinForm.value.email, this.signinForm.value.password);
        this._authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this._router.navigateByUrl('/');
                },
                error => this._errorService.handleError(error)
            );
    }
    
    ngOnInit() {
        this.signinForm = this.formBuilder.group({
            email: ['', [Validators.required, CustomValidators.isEmail]],
            password: ['', Validators.required]
        });
    }

}