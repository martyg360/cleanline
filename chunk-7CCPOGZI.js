import {
  CommonModule,
  EventEmitter,
  NgClass,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ECP2NGGU.js";

// src/app/shared/components/modal/modal.component.ts
var _c0 = ["*"];
function ModalComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 9);
    \u0275\u0275listener("click", function ModalComponent_div_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function ModalComponent_div_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cancelText, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.confirmText, " ");
  }
}
var ModalComponent = class _ModalComponent {
  constructor() {
    this.class = "";
    this.title = "Default Title";
    this.cancelText = "Cancel";
    this.confirmText = "Confirm";
    this.withFooterButton = true;
    this.closeModal = new EventEmitter();
    this.confirmAction = new EventEmitter();
  }
  onClose() {
    this.closeModal.emit();
  }
  onConfirm() {
    this.confirmAction.emit();
  }
  static {
    this.\u0275fac = function ModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalComponent, selectors: [["app-modal"]], inputs: { class: "class", title: "title", cancelText: "cancelText", confirmText: "confirmText", withFooterButton: "withFooterButton" }, outputs: { closeModal: "closeModal", confirmAction: "confirmAction" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 10, vars: 3, consts: [[1, "overflow-x-hidden", "overflow-y-auto", "fixed", "inset-0", "z-50", "outline-none", "focus:outline-none", "justify-center", "items-center", "flex", "px-24"], [1, "relative", "w-[500px]", "my-6", "mx-auto", "z-50", 3, "ngClass"], [1, "border-0", "rounded-lg", "shadow-lg", "relative", "flex", "flex-col", "w-full", "bg-white", "outline-none", "focus:outline-none"], [1, "flex", "bg-charcoal", "items-center", "text-center", "p-5", "border-b", "border-solid", "border-blueGray-200", "rounded-t-lg"], [1, "text-lg", "font-medium", "text-center", "mx-auto"], [1, "relative", "pb-6", "flex-auto"], ["class", "flex items-center px-6 justify-end rounded-b-lg", 4, "ngIf"], [1, "opacity-25", "fixed", "inset-0", "z-40", "bg-black"], [1, "flex", "items-center", "px-6", "justify-end", "rounded-b-lg"], ["type", "button", 1, "w-36", "bg-white", "text-charcoal", "font-light", "text-xs", "px-6", "py-2", "rounded-xl", "border-charcoal", "border", "mr-3", "mb-1", "ease-linear", "transition-all", "duration-150", "hover:bg-slate-200", 3, "click"], ["type", "button", 1, "w-40", "bg-charcoal", "text-white", "font-light", "text-xs", "px-6", "py-2", "rounded-xl", "border-charcoal", "border", "shadow", "hover:shadow-lg", "hover:bg-slate-700", "outline-none", "focus:outline-none", "mb-1", "ease-linear", "transition-all", "duration-150", 3, "click"]], template: function ModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275projection(7);
        \u0275\u0275template(8, ModalComponent_div_8_Template, 5, 2, "div", 6);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(9, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.class);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.withFooterButton);
      }
    }, dependencies: [CommonModule, NgClass, NgIf] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "src/app/shared/components/modal/modal.component.ts", lineNumber: 11 });
})();

export {
  ModalComponent
};
//# sourceMappingURL=chunk-7CCPOGZI.js.map
