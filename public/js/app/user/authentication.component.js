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
var signup_component_1 = require('./signup.component');
var AuthenticationComponent = (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'auth',
            template: "\n        <h1>Auth</h1>\n        <signup></signup>\n    ",
            directives: [signup_component_1.SignupComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFXckQ7SUFBQTtJQUFzQyxDQUFDO0lBVHZDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSwwREFHVDtZQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLENBQUM7U0FDaEMsQ0FBQzs7K0JBQUE7SUFFb0MsOEJBQUM7QUFBRCxDQUF0QyxBQUF1QyxJQUFBO0FBQTFCLCtCQUF1QiwwQkFBRyxDQUFBIiwiZmlsZSI6InVzZXIvYXV0aGVudGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL3NpZ251cC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2F1dGgnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMT5BdXRoPC9oMT5cbiAgICAgICAgPHNpZ251cD48L3NpZ251cD5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtTaWdudXBDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db21wb25lbnQge30iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
