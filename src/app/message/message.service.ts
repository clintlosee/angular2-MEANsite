import { Message } from './message';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MessageService {
    messages: Message[] = [];

    constructor(private _http: Http) {}
    
    getMessages() {
        return this._http.get('/messages')
            .map(response => {
                const data = response.json().obj;
                let objs: any[] = [];

                for (let i = 0; i < data.length; i++) {
                    let message = new Message(data[i].content, data[i]._id, 'Dummy', null);
                    objs.push(message);
                }
                return objs;
            })
            .catch(error => Observable.throw(error.json()));
    }

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this._http.post('/messages', body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let message = new Message(data.content, data._id, 'Dummy', null);
                return message;
            })
            .catch(error => Observable.throw(error.json()));
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }

    editMessage(message: Message) {
        this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Dummy');
    }
}