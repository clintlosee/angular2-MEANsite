import { Component } from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [MessageComponent]
})

export class AppComponent {}