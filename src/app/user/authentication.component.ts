import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';

@Component({
    selector: 'auth',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li><a [routerLink]="['./signin']">Signin</a></li>
                    <li><a [routerLink]="['./signup']">Signup</a></li>
                    <li><a [routerLink]="['./logout']">Logout</a></li>
                </ul>
            </nav>
        </header>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [SignupComponent, ROUTER_DIRECTIVES],
    precompile: [SignupComponent, SigninComponent, LogoutComponent],
    styles: [`
        .router-link-active {
            color: #555;
            cursor: default;
            background-color: #fff;
            border: 1px solid #ddd;
            border-bottom-color: transparent;
        }
    `]
})

export class AuthenticationComponent {}