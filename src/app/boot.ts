/// <reference path="../../typings/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MessageService } from './message/message.service';

import { APP_ROUTER_PROVIDERS } from './routes.app';

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, MessageService, provide(LocationStrategy, {useClass: HashLocationStrategy})]).catch(err => console.error(err));