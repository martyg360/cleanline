import {
  AuthService
} from "./chunk-U3KWXGMK.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  InputFieldComponent,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-HBVHDKGB.js";
import {
  ActivatedRoute,
  Router,
  path,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-ECP2NGGU.js";

// src/app/core/auth/update-password/update-password.component.ts
var UpdatePasswordComponent = class _UpdatePasswordComponent {
  constructor(formBuilder, router, activatedRoute, authService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.authService = authService;
    this.LOGIN = `/${path.LOGIN}`;
    this.errorMessage = "";
    this.token = null;
    this.email = null;
    this.formGroup = this.formBuilder.group({
      password: ["", Validators.required],
      confirm_password: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.token = this.activatedRoute.snapshot.paramMap.get("token");
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const encodedEmail = params.get("email");
      this.email = encodedEmail ? decodeURIComponent(encodedEmail) : null;
    });
    console.log("Token:", this.token);
    console.log("Email:", this.email);
  }
  onResetPassword() {
    let errormsg = "";
    console.log("reset password");
    const password = this.formGroup.get("password")?.value;
    const confirmPassword = this.formGroup.get("confirm_password")?.value;
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    } else {
      this.authService.resetPassword(this.token, this.email, password, confirmPassword).subscribe((res) => {
        if (res) {
          this.router.navigate([this.LOGIN]);
        }
      });
    }
    this.errorMessage = errormsg;
  }
  static {
    this.\u0275fac = function UpdatePasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdatePasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdatePasswordComponent, selectors: [["app-update-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 9, consts: [[1, "update-password-section"], [1, "centered-div", "mt-8", "mb-6"], ["src", "assets/favicons/update-password.svg", "alt", "Update Password Icon", 1, "input-icon", "mb-2"], [1, "text-2xl", "font-semibold"], [1, "signup-section__form--form-element", 3, "submit", "formGroup"], [1, "mb-5"], [1, "text-white", "text-sm", "text-center", "font-light", "mb-3"], [1, "mb-2"], ["type", "password", "placeholder", "Enter new password", 1, "flex-1", 3, "formControlName", "isInvalid", "isPassword", "errorMessage"], ["type", "password", "placeholder", "Confirm new password", 1, "flex-1", 3, "formControlName", "isInvalid", "isPassword", "errorMessage"], ["type", "submit", 1, "mb-12", "mt-3", "w-full", "text-sm", "text-white", "bg-tangerine", "border-0", "py-2", "px-6", "focus:outline-none", "hover:bg-orange-800", "rounded-lg"]], template: function UpdatePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementStart(3, "p", 3);
        \u0275\u0275text(4, "Update Password");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "form", 4);
        \u0275\u0275listener("submit", function UpdatePasswordComponent_Template_form_submit_5_listener() {
          return ctx.onResetPassword();
        });
        \u0275\u0275elementStart(6, "div", 5)(7, "p", 6);
        \u0275\u0275text(8, " Update your password for enhanced security. A fresh start ");
        \u0275\u0275element(9, "br");
        \u0275\u0275text(10, "awaits! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7);
        \u0275\u0275element(12, "app-input-field", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275element(14, "app-input-field", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "button", 10);
        \u0275\u0275text(16, " Login ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_6_0;
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.formGroup);
        \u0275\u0275advance(7);
        \u0275\u0275property("formControlName", "password")("isInvalid", ((tmp_2_0 = ctx.formGroup.get("password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.formGroup.get("password")) == null ? null : tmp_2_0.touched))("isPassword", true)("errorMessage", ctx.errorMessage);
        \u0275\u0275advance(2);
        \u0275\u0275property("formControlName", "confirm_password")("isInvalid", ((tmp_6_0 = ctx.formGroup.get("confirm_password")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.formGroup.get("confirm_password")) == null ? null : tmp_6_0.touched))("isPassword", true)("errorMessage", ctx.errorMessage);
      }
    }, dependencies: [InputFieldComponent, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdatePasswordComponent, { className: "UpdatePasswordComponent", filePath: "src/app/core/auth/update-password/update-password.component.ts", lineNumber: 21 });
})();
export {
  UpdatePasswordComponent
};
//# sourceMappingURL=chunk-QRWK3OPO.js.map
