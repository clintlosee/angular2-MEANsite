import { Component } from '@angular/core';

import { MessageListComponent } from './message-list.component';
import { MessageInputComponent } from './message-input.component';

@Component({
    selector: 'my-messages',
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

export class MessagesComponent {}