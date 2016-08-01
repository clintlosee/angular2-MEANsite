import { Component } from '@angular/core';
import { SignupComponent } from './signup.component';

@Component({
    selector: 'auth',
    template: `
        <h1>Auth</h1>
        <signup></signup>
    `,
    directives: [SignupComponent]
})

export class AuthenticationComponent {}