import {
  AuthService,
  BrowserStorageService,
  EStorageKeys
} from "./chunk-KLFLAN6I.js";
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
  CommonModule,
  NgClass,
  NgIf,
  Router,
  catchError,
  finalize,
  of,
  path,
  tap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-ECP2NGGU.js";

// src/app/core/auth/login/login.component.ts
var _c0 = (a0) => ({ "cursor-default": a0 });
function LoginComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "path", 17)(3, "path", 18);
    \u0275\u0275elementEnd()();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(formBuilder, router, _authService, browserStorageService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this._authService = _authService;
    this.browserStorageService = browserStorageService;
    this.REGISTER = `/${path.LOGIN_REQUEST}`;
    this.HOME = `/${path.HOME}`;
    this.FORGOT_PASSWORD = `/${path.FORGOT_PASSWORD}`;
    this.errorMessage = [{ username: "", password: "" }];
    this.isLoading = false;
    this.formGroup = this.formBuilder.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(3)]]
    });
  }
  ngOnInit() {
  }
  onLogin() {
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
    } else {
      this.isLoading = true;
      console.log("isloading ", this.isLoading);
      const loginData = this.formGroup.value;
      this._authService.login(loginData.username, loginData.password).pipe(tap((res) => {
        if (res) {
          this.isLoading = false;
          console.log("in isloading ", this.isLoading);
          this.browserStorageService.addToLocalStorage(EStorageKeys.USER, JSON.stringify(res.data.user));
          this.router.navigate([this.HOME]);
        }
      }), catchError((err) => {
        this.isLoading = false;
        console.log("catch isloading ", err, this.isLoading);
        return of(err);
      }), finalize(() => {
        this.isLoading = false;
        console.log("final Iisloading ", this.isLoading);
      })).subscribe();
    }
  }
  onForgotPassword() {
    this.router.navigate([this.FORGOT_PASSWORD]);
  }
  onSignUp() {
    this.router.navigate([this.REGISTER]);
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(BrowserStorageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 13, consts: [[1, "login-section", "overflow-hidden"], [1, "login-section__form", "mt-24"], [1, "login-section__form--form-element", 3, "ngSubmit", "formGroup"], [1, "mb-2", "flex", "w-full", "items-center"], ["src", "assets/favicons/user.svg", "alt", "User Icon", 1, "input-icon", "mt-3"], ["type", "text", "label", "Username:", "placeholder", "Enter Username", 1, "flex-1", 3, "formControlName", "isInvalid", "errorMessage"], [1, "flex", "w-full", "items-center"], ["src", "assets/favicons/password.svg", "alt", "User Icon", 1, "input-icon", "mt-5"], ["type", "password", "label", "Password:", "placeholder", "Enter Password", 1, "flex-1", 3, "formControlName", "isInvalid", "isPassword", "errorMessage"], [1, "forgot-password", "mb-10"], [1, "text-white", "text-xs", "cursor-pointer", "hover:text-slate-300", "ml-2", 3, "click"], ["type", "submit", 1, "w-full", "text-white", "bg-tangerine", "border-0", "py-2", "px-6", "focus:outline-none", "hover:bg-orange-800", "rounded-lg", "flex", "items-center", "justify-center", "cursor-pointer", 3, "ngClass", "disabled"], ["class", "flex items-center justify-center", 4, "ngIf"], [1, "text-sm", "font-light", "text-center"], ["type", "button", 1, "w-full", "bg-white", "text-black", "py-2", "text-sm", "px-6", "focus:outline-none", "hover:bg-slate-200", "rounded-lg", "mt-4", 3, "click"], [1, "flex", "items-center", "justify-center"], ["aria-hidden", "true", "viewBox", "0 0 100 101", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-5", "h-5", "mr-3", "text-gray-200", "animate-spin", "dark:text-gray-600", "fill-slate-100"], ["d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", "fill", "currentColor"], ["d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", "fill", "currentFill"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "form", 2);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
          return ctx.onLogin();
        });
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "img", 4)(5, "app-input-field", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275element(7, "img", 7)(8, "app-input-field", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9)(10, "a", 10);
        \u0275\u0275listener("click", function LoginComponent_Template_a_click_10_listener() {
          return ctx.onForgotPassword();
        });
        \u0275\u0275text(11, "Forgot password?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 11);
        \u0275\u0275template(13, LoginComponent_span_13_Template, 4, 0, "span", 12);
        \u0275\u0275elementStart(14, "span", 13);
        \u0275\u0275text(15, " Login ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_16_listener() {
          return ctx.onSignUp();
        });
        \u0275\u0275text(17, " Need an account? Request a login. ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_5_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.formGroup);
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "username")("isInvalid", ((tmp_2_0 = ctx.formGroup.get("username")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.formGroup.get("username")) == null ? null : tmp_2_0.touched))("errorMessage", "Email is required.");
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "password")("isInvalid", ((tmp_5_0 = ctx.formGroup.get("password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.formGroup.get("password")) == null ? null : tmp_5_0.touched))("isPassword", true)("errorMessage", "Password is required.");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c0, ctx.isLoading))("disabled", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, InputFieldComponent, CommonModule, NgClass, NgIf], styles: ["\n\n.login-section[_ngcontent-%COMP%] {\n  width: 400px;\n}\n.text-usm[_ngcontent-%COMP%] {\n  letter-spacing: 0.3em;\n  font-size: 15px;\n}\n.text-spacing[_ngcontent-%COMP%] {\n  letter-spacing: 0.5em;\n}\n.btn-login[_ngcontent-%COMP%] {\n  background-color: #49516b;\n  color: white;\n  width: 100%;\n  margin-top: 20px;\n}\n.input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n  align-items: center;\n}\n.input-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin-right: 8px;\n}\n.forgot-password[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n/*# sourceMappingURL=login.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/core/auth/login/login.component.ts", lineNumber: 27 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-QCP3D4EQ.js.map
