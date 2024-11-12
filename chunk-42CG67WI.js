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
  NgForOf,
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
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-ECP2NGGU.js";

// src/app/core/auth/register/register.component.ts
function RegisterComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "app-input-field", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", field_r1.placeholder)("type", field_r1.type)("formControlName", field_r1.controlName);
  }
}
function RegisterComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "app-input-field", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", field_r2.placeholder)("type", field_r2.type)("formControlName", field_r2.controlName);
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(formBuilder, router) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.LOGIN = `/${path.LOGIN}`;
    this.personalDetailsFields = [
      { placeholder: "First Name", type: "text", controlName: "firstName" },
      { placeholder: "Last Name", type: "text", controlName: "lastName" }
    ];
    this.businessDetailsFields = [
      { placeholder: "Business Name", type: "text", controlName: "businessName" },
      { placeholder: "Email", type: "email", controlName: "email" },
      { placeholder: "Phone Number", type: "text", controlName: "phoneNumber" }
    ];
    this.formGroup = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      businessName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", [Validators.required]]
    });
  }
  onSubmit() {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;
      console.log(formData);
    }
  }
  onCancel() {
    this.router.navigate([this.LOGIN]);
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 3, consts: [[1, "register-section"], [1, "register-section__form"], [1, "text-center"], [1, "text-tangerine", "text-2xl", "font-semibold", "mb-10", "mt-10"], [1, "register-section__form--form-element", 3, "submit", "formGroup"], [1, "mb-10"], [1, "text-white", "text-sm", "font-light", "mb-1"], ["class", "mb-2", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "w-full", "text-sm", "text-white", "bg-tangerine", "border-0", "py-2", "px-6", "focus:outline-none", "hover:bg-orange-800", "rounded-lg"], [1, "mt-4", "w-full", "text-sm", "text-black", "bg-white", "border-0", "py-2", "px-6", "focus:outline-none", "hover:bg-slate-200", "rounded-lg", 3, "click"], [1, "mb-2"], [3, "placeholder", "type", "formControlName"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        \u0275\u0275text(4, " Login Request ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "form", 4);
        \u0275\u0275listener("submit", function RegisterComponent_Template_form_submit_5_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(6, "div", 5)(7, "p", 6);
        \u0275\u0275text(8, "Personal Details");
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, RegisterComponent_div_9_Template, 2, 3, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5)(11, "p", 6);
        \u0275\u0275text(12, "Business Details");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, RegisterComponent_div_13_Template, 2, 3, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 8);
        \u0275\u0275text(15, " Submit Request ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 9);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_16_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(17, " Cancel ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.formGroup);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.personalDetailsFields);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.businessDetailsFields);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, InputFieldComponent, CommonModule, NgForOf], styles: ["\n\n.register-section[_ngcontent-%COMP%] {\n  width: 400px;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/core/auth/register/register.component.ts", lineNumber: 20 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-42CG67WI.js.map
