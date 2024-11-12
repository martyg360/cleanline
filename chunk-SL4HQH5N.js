import {
  CommonModule,
  RouterModule,
  RouterOutlet,
  path,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-ECP2NGGU.js";

// src/app/core/auth/auth/auth.component.ts
var AuthComponent = class _AuthComponent {
  static {
    this.\u0275fac = function AuthComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthComponent, selectors: [["app-auth"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[1, "auth_container"], [1, "centered-div", "w-1/2"], [1, "logo-section"], ["src", "assets/favicons/ct_logo.svg", "alt", "Cleanline Tasman Logo", 1, "w-auto"], [1, "text-white", "text-usm", "sm:text-xs", "lg:text-lg"], [1, "main"]], template: function AuthComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementStart(4, "p", 4);
        \u0275\u0275text(5, " Uniform Management System ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275element(7, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [CommonModule, RouterModule, RouterOutlet], styles: ["\n\n.auth_container[_ngcontent-%COMP%] {\n  background-image: url(/assets/favicons/ct_background.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n.logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n}\n.text-usm[_ngcontent-%COMP%] {\n  letter-spacing: 0.4em;\n}\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=auth.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthComponent, { className: "AuthComponent", filePath: "src/app/core/auth/auth/auth.component.ts", lineNumber: 12 });
})();

// src/app/core/auth/auth.routes.ts
var routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "",
        redirectTo: path.LOGIN,
        pathMatch: "full"
      },
      {
        path: path.LOGIN,
        loadComponent: () => import("./chunk-DMXHRWPF.js").then((m) => m.LoginComponent)
      },
      {
        path: path.FORGOT_PASSWORD,
        loadComponent: () => import("./chunk-AXUAZYSE.js").then((m) => m.ForgotPasswordComponent)
      },
      {
        path: `${path.PASSWORD_RESET}/:token`,
        loadComponent: () => import("./chunk-QRWK3OPO.js").then((m) => m.UpdatePasswordComponent)
      },
      {
        path: path.LOGIN_REQUEST,
        loadComponent: () => import("./chunk-42CG67WI.js").then((m) => m.RegisterComponent)
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-SL4HQH5N.js.map
