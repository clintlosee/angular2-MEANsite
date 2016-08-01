"use strict";
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.isEmail = function (control) {
        if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?")) {
            return { invalidEmail: true };
        }
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvY3VzdG9tVmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFBQTtJQU1BLENBQUM7SUFMVSx3QkFBTyxHQUFkLFVBQWUsT0FBZ0I7UUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzSUFBc0ksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvSixNQUFNLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUE7UUFDakMsQ0FBQztJQUNMLENBQUM7SUFDTCx1QkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksd0JBQWdCLG1CQU01QixDQUFBIiwiZmlsZSI6InVzZXIvY3VzdG9tVmFsaWRhdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2wsIENvbnRyb2xHcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21WYWxpZGF0b3JzIHtcbiAgICBzdGF0aWMgaXNFbWFpbChjb250cm9sOiBDb250cm9sKSB7XG4gICAgICAgIGlmICghY29udHJvbC52YWx1ZS5tYXRjaChcIlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05XSpbYS16MC05XSk/XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4geyBpbnZhbGlkRW1haWw6IHRydWUgfVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
