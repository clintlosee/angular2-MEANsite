import { Component } from '@angular/core';
import { MessageListComponent } from './message/message-list.component';
import { MessageInputComponent } from './message/message-input.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <div class="row spacing">
            <message-input></message-input>
        </div>
        <div class="row spacing">
            <message-list></message-list>
        </div>
    `,
    directives: [MessageListComponent, MessageInputComponent]
})

export class AppComponent {
    
}