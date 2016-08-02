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
var SignupComponent = (function () {
    function SignupComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    SignupComponent.prototype.onSubmit = function () {
        console.log(this.signupForm.value);
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, customValidators_1.CustomValidators.isEmail]],
            password: ['', forms_1.Validators.required]
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'signup',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"firstName\">First Name</label>\n                    <input \n                        formControlName=\"firstName\"\n                        type=\"text\" \n                        id=\"firstName\" \n                        class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input \n                        formControlName=\"lastName\" \n                        type=\"text\" \n                        id=\"lastName\" \n                        class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input \n                        formControlName=\"email\" \n                        type=\"email\" \n                        id=\"email\" \n                        class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input \n                        formControlName=\"password\" \n                        type=\"password\" \n                        id=\"password\" \n                        class=\"form-control\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signupForm.valid\">Sign Up</button>\n            </form>\n        </section>\n    ",
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELGlDQUFpQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRXRELHNCQUE2RSxnQkFBZ0IsQ0FBQyxDQUFBO0FBOEM5RjtJQUdJLHlCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFaEQsa0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDckMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxtQ0FBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1RCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTVETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsdW9EQXNDVDtZQUNELFVBQVUsRUFBRSxDQUFDLGdDQUF3QixDQUFDO1NBQ3pDLENBQUM7O3VCQUFBO0lBbUJGLHNCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSx1QkFBZSxrQkFpQjNCLENBQUEiLCJmaWxlIjoidXNlci9zaWdudXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1c3RvbVZhbGlkYXRvcnMgfSBmcm9tICcuL2N1c3RvbVZhbGlkYXRvcnMnO1xuXG5pbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2lnbnVwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzaWdudXBGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3ROYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwibGFzdE5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIXNpZ251cEZvcm0udmFsaWRcIj5TaWduIFVwPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBzaWdudXBGb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpZ251cEZvcm0udmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zaWdudXBGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21WYWxpZGF0b3JzLmlzRW1haWxdXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
