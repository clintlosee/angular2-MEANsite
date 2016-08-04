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
var customValidators_1 = require('./customValidators');
var forms_1 = require('@angular/forms');
var user_1 = require('./user');
var auth_service_1 = require('./auth.service');
var error_service_1 = require('../errors/error.service');
var router_1 = require('@angular/router');
var SigninComponent = (function () {
    function SigninComponent(formBuilder, _authService, _router, _errorService) {
        this.formBuilder = formBuilder;
        this._authService = _authService;
        this._router = _router;
        this._errorService = _errorService;
    }
    SigninComponent.prototype.onSubmit = function (formContent) {
        var _this = this;
        var user = new user_1.User(this.signinForm.value.email, this.signinForm.value.password);
        this._authService.signin(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this._router.navigateByUrl('/');
        }, function (error) { return _this._errorService.handleError(error); });
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = this.formBuilder.group({
            email: ['', [forms_1.Validators.required, customValidators_1.CustomValidators.isEmail]],
            password: ['', forms_1.Validators.required]
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'signin',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit(signinForm.value)\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input \n                        formControlName=\"email\" \n                        type=\"email\" \n                        id=\"email\" \n                        class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input \n                        formControlName=\"password\" \n                        type=\"password\" \n                        id=\"password\" \n                        class=\"form-control\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signinForm.valid\">Sign In</button>\n            </form>\n        </section>\n    ",
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, router_1.Router, error_service_1.ErrorService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELGlDQUFpQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3RELHNCQUE2RSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzlGLHFCQUFxQixRQUFRLENBQUMsQ0FBQTtBQUM5Qiw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQThCekM7SUFHSSx5QkFBb0IsV0FBd0IsRUFBVSxZQUF5QixFQUFVLE9BQWUsRUFBVSxhQUEyQjtRQUF6SCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUVqSixrQ0FBUSxHQUFSLFVBQVMsV0FBVztRQUFwQixpQkFXQztRQVZHLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDekIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDckMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsbUNBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUQsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLGcrQkFzQlQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztTQUN6QyxDQUFDOzt1QkFBQTtJQTJCRixzQkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6QlksdUJBQWUsa0JBeUIzQixDQUFBIiwiZmlsZSI6InVzZXIvc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3JzIH0gZnJvbSAnLi9jdXN0b21WYWxpZGF0b3JzJztcbmltcG9ydCB7IFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpZ25pbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2lnbmluRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChzaWduaW5Gb3JtLnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIXNpZ25pbkZvcm0udmFsaWRcIj5TaWduIEluPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBzaWduaW5Gb3JtOiBGb3JtR3JvdXA7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxuXG4gICAgb25TdWJtaXQoZm9ybUNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHRoaXMuc2lnbmluRm9ybS52YWx1ZS5lbWFpbCwgdGhpcy5zaWduaW5Gb3JtLnZhbHVlLnBhc3N3b3JkKTtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbmluKHVzZXIpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIGRhdGEudXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNpZ25pbkZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21WYWxpZGF0b3JzLmlzRW1haWxdXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgIH0pO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
