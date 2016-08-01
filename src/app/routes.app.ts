import {provideRouter, RouterConfig} from '@angular/router';

import { MessagesComponent } from './message/messages.component';
import { AuthenticationComponent } from './user/authentication.component';
import { SigninComponent } from './user/signin.component';
import { SignupComponent } from './user/signup.component';
import { LogoutComponent } from './user/logout.component';

export const routes: RouterConfig = [
    { path: '', component: MessagesComponent },
    { path: 'messages', component: MessagesComponent },
    { 
        path: 'auth', 
        component: AuthenticationComponent,
        children: [
            { path: '', component: SigninComponent },
            { path: 'signin', component: SigninComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'logout', component: LogoutComponent },
        ]
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];