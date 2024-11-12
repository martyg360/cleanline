import {
  ModalComponent
} from "./chunk-7CCPOGZI.js";
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
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-ECP2NGGU.js";

// src/app/core/auth/forgot-password/forgot-password.component.ts
var _c0 = (a0) => ({ "cursor-default": a0 });
var _c1 = (a0, a1) => ({ "text-neon-green": a0, "text-red-600": a1 });
function ForgotPasswordComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "path", 15)(3, "path", 16);
    \u0275\u0275elementEnd()();
  }
}
function ForgotPasswordComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-modal", 17);
    \u0275\u0275listener("closeModal", function ForgotPasswordComponent_div_15_Template_app_modal_closeModal_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275elementStart(2, "div", 18)(3, "div", 19);
    \u0275\u0275element(4, "img", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("w-[450px]");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.info.status === "success" ? "assets/favicons/success.svg" : "assets/favicons/error.svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c1, ctx_r1.info.status === "success", ctx_r1.info.error.status === "error"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.info.status === "success" ? "Success!" : "Error!", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.info.status === "success" ? "We have emailed your password reset link." : "We cant find a user with that email address.", " ");
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(formBuilder, router, _authSevice) {
    this.formBuilder = formBuilder;
    this.router = router;
    this._authSevice = _authSevice;
    this.PASSWORD_RESET = `/${path.PASSWORD_RESET}`;
    this.isLoading = false;
    this.isSentRequest = false;
    this.isSuccess = false;
    this.isError = false;
    this.info = {};
    this.formGroup = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  onSendRequest() {
    const email = this.formGroup.get("email")?.value;
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    } else {
      this.isLoading = true;
      this._authSevice.forgotPassword(email).pipe(tap((res) => {
        if (res) {
          this.info = res;
          this.isLoading = false;
          this.isSentRequest = true;
          console.log("res:", res);
        }
      }), catchError((err) => {
        this.isLoading = false;
        this.isSentRequest = true;
        this.info = err;
        console.log("error", this.info);
        return of(err);
      }), finalize(() => {
        this.isLoading = false;
        this.isSentRequest = true;
        console.log("final isSentRequest:", this.isSentRequest);
      })).subscribe();
    }
  }
  onClick() {
    this.isSentRequest = !this.isSentRequest;
    if (this.info.status === "success") {
      this.router.navigate([this.PASSWORD_RESET]);
    }
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 10, consts: [[1, "forgot-password-section"], [1, "centered-div", "mb-10", "mt-20"], ["src", "assets/favicons/forgot-password.svg", "alt", "Forgot Password Icon", 1, "input-icon", "mb-3"], [1, "text-2xl", "font-semibold"], [1, "forgot-password-section__form--form-element", 3, "submit", "formGroup"], [1, "mb-3"], [1, "text-sm", "text-white", "mb-3", "text-center"], [1, "mb-2"], ["type", "text", "placeholder", "Enter Email", 1, "flex-1", 3, "formControlName", "isInvalid", "errorMessage"], ["type", "submit", 1, "mt-4", "w-full", "text-white", "bg-tangerine", "border-0", "py-2", "px-6", "focus:outline-none", "hover:bg-orange-800", "rounded-lg", "flex", "items-center", "justify-center", "cursor-pointer", 3, "ngClass", "disabled"], ["class", "flex items-center justify-center", 4, "ngIf"], [1, "text-sm", "font-light", "text-center"], [4, "ngIf"], [1, "flex", "items-center", "justify-center"], ["aria-hidden", "true", "viewBox", "0 0 100 101", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-5", "h-5", "mr-3", "text-gray-200", "animate-spin", "dark:text-gray-600", "fill-slate-100"], ["d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", "fill", "currentColor"], ["d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", "fill", "currentFill"], ["title", "Forgot Password", "cancelText", "'Done'", 3, "closeModal"], [1, "text-center"], [1, "my-5", "grid", "justify-center"], ["alt", "", 1, "w-30", "h-30", 3, "src"], [1, "text-2xl", "font-semibold", 3, "ngClass"], [1, "text-charcoal", "text-sm", "font-normal", "mt-2"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementStart(3, "p", 3);
        \u0275\u0275text(4, "Forgot Password?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "form", 4);
        \u0275\u0275listener("submit", function ForgotPasswordComponent_Template_form_submit_5_listener() {
          return ctx.onSendRequest();
        });
        \u0275\u0275elementStart(6, "div", 5)(7, "p", 6);
        \u0275\u0275text(8, " No worries! Let's get you back on track in no time. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275element(10, "app-input-field", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "button", 9);
        \u0275\u0275template(12, ForgotPasswordComponent_span_12_Template, 4, 0, "span", 10);
        \u0275\u0275elementStart(13, "span", 11);
        \u0275\u0275text(14, " Send Request ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(15, ForgotPasswordComponent_div_15_Template, 9, 9, "div", 12);
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.formGroup);
        \u0275\u0275advance(5);
        \u0275\u0275property("formControlName", "email")("isInvalid", ((tmp_2_0 = ctx.formGroup.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.formGroup.get("email")) == null ? null : tmp_2_0.touched))("errorMessage", "Email is required.");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c0, ctx.isLoading))("disabled", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.isSentRequest);
      }
    }, dependencies: [
      InputFieldComponent,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      CommonModule,
      NgClass,
      NgIf,
      ModalComponent
    ], styles: ["\n\n.forgot-password-section[_ngcontent-%COMP%] {\n  width: 400px;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/core/auth/forgot-password/forgot-password.component.ts", lineNumber: 29 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-AXUAZYSE.js.map
