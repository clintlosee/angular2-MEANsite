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
var router_1 = require('@angular/router');
var header_component_1 = require('./header.component');
var messages_component_1 = require('./message/messages.component');
var authentication_component_1 = require('./user/authentication.component');
var errors_component_1 = require('./errors/errors.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n        <div class=\"container\">\n            <header></header>\n            <router-outlet></router-outlet>\n        </div>\n        <error></error>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, errors_component_1.ErrorComponent],
            precompile: [header_component_1.HeaderComponent, messages_component_1.MessagesComponent, authentication_component_1.AuthenticationComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxtQ0FBa0MsOEJBQThCLENBQUMsQ0FBQTtBQUNqRSx5Q0FBd0MsaUNBQWlDLENBQUMsQ0FBQTtBQUMxRSxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQWdCM0Q7SUFBQTtJQUEyQixDQUFDO0lBZDVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsZ0tBTVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxrQ0FBZSxFQUFFLGlDQUFjLENBQUM7WUFDaEUsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBRSxzQ0FBaUIsRUFBRSxrREFBdUIsQ0FBQztTQUM1RSxDQUFDOztvQkFBQTtJQUV5QixtQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixvQkFBWSxlQUFHLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdXNlci9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9ycy9lcnJvcnMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGhlYWRlcj48L2hlYWRlcj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxlcnJvcj48L2Vycm9yPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBIZWFkZXJDb21wb25lbnQsIEVycm9yQ29tcG9uZW50XSxcbiAgICBwcmVjb21waWxlOiBbSGVhZGVyQ29tcG9uZW50LCBNZXNzYWdlc0NvbXBvbmVudCwgQXV0aGVudGljYXRpb25Db21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHt9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
