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
// import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
var customValidators_1 = require('./customValidators');
var forms_1 = require('@angular/forms');
var SigninComponent = (function () {
    function SigninComponent(_fb, formBuilder) {
        this._fb = _fb;
        this.formBuilder = formBuilder;
    }
    SigninComponent.prototype.onSubmit = function (formContent) {
        console.log(formContent);
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
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit(signinForm.value)\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input \n                        formControlName=\"email\" \n                        type=\"email\" \n                        id=\"email\" \n                        class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input \n                        formControlName=\"password\" \n                        type=\"password\" \n                        id=\"password\" \n                        class=\"form-control\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signinForm.valid\">Sign Up</button>\n            </form>\n        </section>\n    ",
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, forms_1.FormBuilder])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELG9GQUFvRjtBQUNwRixpQ0FBaUMsb0JBQW9CLENBQUMsQ0FBQTtBQUV0RCxzQkFBNkUsZ0JBQWdCLENBQUMsQ0FBQTtBQThCOUY7SUFHSSx5QkFBb0IsR0FBZ0IsRUFBVSxXQUF3QjtRQUFsRCxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBRTFFLGtDQUFRLEdBQVIsVUFBUyxXQUFXO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3JDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLG1DQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVELFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBMUNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxnK0JBc0JUO1lBQ0QsVUFBVSxFQUFFLENBQUMsZ0NBQXdCLENBQUM7U0FDekMsQ0FBQzs7dUJBQUE7SUFrQkYsc0JBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLHVCQUFlLGtCQWdCM0IsQ0FBQSIsImZpbGUiOiJ1c2VyL3NpZ25pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9ycywgQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3JzIH0gZnJvbSAnLi9jdXN0b21WYWxpZGF0b3JzJztcblxuaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpZ25pbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2lnbmluRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChzaWduaW5Gb3JtLnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIXNpZ25pbkZvcm0udmFsaWRcIj5TaWduIFVwPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBzaWduaW5Gb3JtOiBGb3JtR3JvdXA7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICAgIG9uU3VibWl0KGZvcm1Db250ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1Db250ZW50KTtcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2lnbmluRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbVZhbGlkYXRvcnMuaXNFbWFpbF1dLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
