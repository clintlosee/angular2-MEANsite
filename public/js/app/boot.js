"use strict";
/// <reference path="../../typings/index.d.ts" />
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var message_service_1 = require('./message/message.service');
var routes_app_1 = require('./routes.app');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [routes_app_1.APP_ROUTER_PROVIDERS, message_service_1.MessageService, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })]).catch(function (err) { return console.error(err); });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlEQUFpRDtBQUNqRCx5Q0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUM5RCxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFFekUsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsZ0NBQStCLDJCQUEyQixDQUFDLENBQUE7QUFFM0QsMkJBQXFDLGNBQWMsQ0FBQyxDQUFBO0FBRXBELG9DQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLGlDQUFvQixFQUFFLGdDQUFjLEVBQUUsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cbmltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBBUFBfUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJy4vcm91dGVzLmFwcCc7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtBUFBfUk9VVEVSX1BST1ZJREVSUywgTWVzc2FnZVNlcnZpY2UsIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0pXSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
