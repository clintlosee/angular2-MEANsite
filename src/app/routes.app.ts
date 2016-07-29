import {provideRouter, RouterConfig} from '@angular/router';

import { MessagesComponent } from './message/messages.component';
import { AuthenticationComponent } from './user/authentication.component';

export const routes: RouterConfig = [
    { path: '', component: MessagesComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'authentication', component: AuthenticationComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];