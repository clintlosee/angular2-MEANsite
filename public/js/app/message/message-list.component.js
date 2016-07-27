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
var message_service_1 = require('./message.service');
var MessageListComponent = (function () {
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        this.messagesData = this._messageService.getMessages();
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'message-list',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <message\n                *ngFor=\"let message of messagesData\" \n                [message]=\"message\" \n                (editClicked)=\"message.content = $event\">\n            </message>\n        </section>\n    ",
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UvbWVzc2FnZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELGtDQUFpQyxxQkFBcUIsQ0FBQyxDQUFBO0FBRXZELGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBZ0JuRDtJQUdJLDhCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFFbkQsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQXZCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsOFJBUVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUNqQyxDQUFDOzs0QkFBQTtJQVlGLDJCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSw0QkFBb0IsdUJBVWhDLENBQUEiLCJmaWxlIjoibWVzc2FnZS9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWVzc2FnZS1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc0RhdGFcIiBcbiAgICAgICAgICAgICAgICBbbWVzc2FnZV09XCJtZXNzYWdlXCIgXG4gICAgICAgICAgICAgICAgKGVkaXRDbGlja2VkKT1cIm1lc3NhZ2UuY29udGVudCA9ICRldmVudFwiPlxuICAgICAgICAgICAgPC9tZXNzYWdlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbWVzc2FnZXNEYXRhOk1lc3NhZ2VbXTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXNEYXRhID0gdGhpcy5fbWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZXMoKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
