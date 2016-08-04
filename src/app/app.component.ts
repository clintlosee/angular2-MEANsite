import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from './header.component';
import { MessagesComponent } from './message/messages.component';
import { AuthenticationComponent } from './user/authentication.component';
import { ErrorComponent } from './errors/errors.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <div class="container">
            <header></header>
            <router-outlet></router-outlet>
        </div>
        <error></error>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ErrorComponent],
    precompile: [HeaderComponent, MessagesComponent, AuthenticationComponent]
})

export class AppComponent {}