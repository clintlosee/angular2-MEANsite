"use strict";
var router_1 = require('@angular/router');
var messages_component_1 = require('./message/messages.component');
var authentication_component_1 = require('./user/authentication.component');
exports.routes = [
    { path: '', component: messages_component_1.MessagesComponent },
    { path: 'messages', component: messages_component_1.MessagesComponent },
    { path: 'authentication', component: authentication_component_1.AuthenticationComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTVELG1DQUFrQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2pFLHlDQUF3QyxpQ0FBaUMsQ0FBQyxDQUFBO0FBRTdELGNBQU0sR0FBaUI7SUFDaEMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxrREFBdUIsRUFBRTtDQUNqRSxDQUFDO0FBRVcsNEJBQW9CLEdBQUc7SUFDaEMsc0JBQWEsQ0FBQyxjQUFNLENBQUM7Q0FDeEIsQ0FBQyIsImZpbGUiOiJyb3V0ZXMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm92aWRlUm91dGVyLCBSb3V0ZXJDb25maWd9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE1lc3NhZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdXNlci9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXG4gICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBNZXNzYWdlc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ21lc3NhZ2VzJywgY29tcG9uZW50OiBNZXNzYWdlc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ2F1dGhlbnRpY2F0aW9uJywgY29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB9XG5dO1xuXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUl9QUk9WSURFUlMgPSBbXG4gICAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpXG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==