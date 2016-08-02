import { Message } from './message';
import { Http, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MessageService {
    messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

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

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this._http.patch('/messages/' + message.messageId, body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}