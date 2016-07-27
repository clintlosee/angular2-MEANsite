/// <reference path="../../typings/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { MessageService } from './message/message.service';

bootstrap(AppComponent, [MessageService]);