"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var message_component_1 = require('./message.component');
var message_1 = require('./message');
var MessageListComponent = (function () {
    function MessageListComponent() {
    }
    MessageListComponent.prototype.ngOnInit = function () {
        this.messagesData = [
            new message_1.Message('This is a new clever message', null, 'Clint'),
            new message_1.Message('This is another message', null, 'Sally'),
            new message_1.Message('This is a lame message', null, 'Jim')
        ];
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'message-list',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <message\n                *ngFor=\"let message of messagesData\" \n                [message]=\"message\" \n                (editClicked)=\"message.content = $event\">\n            </message>\n        </section>\n    ",
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UvbWVzc2FnZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLGtDQUFpQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQ3ZELHdCQUF3QixXQUFXLENBQUMsQ0FBQTtBQWdCcEM7SUFBQTtJQVVBLENBQUM7SUFQRyx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRztZQUNoQixJQUFJLGlCQUFPLENBQUMsOEJBQThCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztZQUMxRCxJQUFJLGlCQUFPLENBQUMseUJBQXlCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztZQUNyRCxJQUFJLGlCQUFPLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztTQUNyRCxDQUFDO0lBQ04sQ0FBQztJQXZCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsOFJBUVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUNqQyxDQUFDOzs0QkFBQTtJQVlGLDJCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSw0QkFBb0IsdUJBVWhDLENBQUEiLCJmaWxlIjoibWVzc2FnZS9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtZXNzYWdlLWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICA8bWVzc2FnZVxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzRGF0YVwiIFxuICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cIm1lc3NhZ2VcIiBcbiAgICAgICAgICAgICAgICAoZWRpdENsaWNrZWQpPVwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCI+XG4gICAgICAgICAgICA8L21lc3NhZ2U+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtNZXNzYWdlQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IHtcbiAgICBtZXNzYWdlc0RhdGE6TWVzc2FnZVtdO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXNEYXRhID0gW1xuICAgICAgICAgICAgbmV3IE1lc3NhZ2UoJ1RoaXMgaXMgYSBuZXcgY2xldmVyIG1lc3NhZ2UnLCBudWxsLCAnQ2xpbnQnKSxcbiAgICAgICAgICAgIG5ldyBNZXNzYWdlKCdUaGlzIGlzIGFub3RoZXIgbWVzc2FnZScsIG51bGwsICdTYWxseScpLFxuICAgICAgICAgICAgbmV3IE1lc3NhZ2UoJ1RoaXMgaXMgYSBsYW1lIG1lc3NhZ2UnLCBudWxsLCAnSmltJylcbiAgICAgICAgXTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
