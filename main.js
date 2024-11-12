import {
  ModalComponent
} from "./chunk-7CCPOGZI.js";
import {
  AuthService,
  BrowserStorageService,
  EStorageKeys
} from "./chunk-U3KWXGMK.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  InputFieldComponent,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-HBVHDKGB.js";
import {
  ActivatedRoute,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  DestroyRef,
  EMPTY,
  ENVIRONMENT_INITIALIZER,
  ErrorHandler,
  EventEmitter,
  HTTP_INTERCEPTORS,
  Inject,
  Injectable,
  InjectionToken,
  NavigationEnd,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  Optional,
  ReplaySubject,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  Subject,
  __spreadProps,
  __spreadValues,
  assertInInjectionContext,
  assertNotInReactiveContext,
  bootstrapApplication,
  catchError,
  computed,
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  inject,
  isDevMode,
  makeEnvironmentProviders,
  map,
  merge,
  observeOn,
  of,
  path,
  pluck,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  queueScheduler,
  scan,
  setClassMetadata,
  share,
  signal,
  skip,
  switchMap,
  take,
  takeUntil,
  throwError,
  timeout,
  withLatestFrom,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ECP2NGGU.js";

// src/app/core/auth/guard/auth.guard.ts
var AuthGuard = class _AuthGuard {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.LOGIN = `/${path.LOGIN}`;
  }
  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate([this.LOGIN]);
    return false;
  }
  static {
    this.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(AuthService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
  }
};

// src/app/models/sidebar-menu.model.ts
var MENUS = [
  {
    id: 1,
    title: "Quick Order",
    icon: "assets/favicons/cart.svg",
    route: path.QUICK_ORDER
  },
  {
    id: 2,
    title: "Manage Employee",
    icon: "assets/favicons/user-white.svg",
    route: path.MANAGE_EMPLOYEE,
    hasSubMenu: true,
    subMenuItems: [
      { id: 2.1, title: "Add/Edit Templates", route: path.TEMPLATES },
      { id: 2.2, title: "Add/Edit Employee Group", route: path.EMPLOYEE_GROUP },
      { id: 2.3, title: "Add/Edit Employees", route: path.EMPLOYEE },
      { id: 2.4, title: "Add/Edit Project", route: path.PROJECTS },
      { id: 2.5, title: "Bulk Edit", route: path.BULK_EDIT },
      {
        id: 2.6,
        title: "Make Transaction Adjustments",
        route: path.TRANSANCTION_ADJUSTMENT
      },
      { id: 2.7, title: "Quick Order", route: path.QUICK_ORDER }
    ]
  },
  {
    id: 3,
    title: "Manage Store",
    icon: "assets/favicons/store.svg"
  },
  {
    id: 4,
    title: "Browse Product",
    icon: "assets/favicons/cart-find.svg"
  },
  {
    id: 5,
    title: "Action Items",
    icon: "assets/favicons/action-item.svg"
  },
  {
    id: 6,
    title: "Order History",
    icon: "assets/favicons/order-history.svg"
  },
  {
    id: 7,
    title: "Report Generator",
    icon: "assets/favicons/report-generator.svg"
  },
  {
    id: 8,
    title: "My Account",
    icon: "assets/favicons/my-account.svg",
    route: path.MY_ACCOUNT,
    hasSubMenu: true,
    subMenuItems: [
      { id: 8.1, title: "Delivery Addresses", route: path.DELIVERY_ADDRESSES },
      { id: 8.2, title: "Change Password", route: path.CHANGE_PASSWORD },
      { id: 8.3, title: "Employee Logins", route: path.EMPLOYEE_LOGIN },
      { id: 8.4, title: "Default Permissions", route: path.DEFAULT_PERMISSION },
      { id: 8.5, title: "Purchase Orders", route: path.PURCHASE_ORDERS }
    ]
  },
  {
    id: 9,
    title: "Company Dashboard",
    icon: "assets/favicons/company-dashboard.svg"
  },
  {
    id: 10,
    title: "Help and Support",
    icon: "assets/favicons/help-support.svg"
  }
];

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function toSignal(source, options) {
  ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && assertInInjectionContext(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
      /* StateKind.NoValue */
    }, {
      equal
    });
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, {
      equal
    });
  }
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      if (options?.rejectErrors) {
        throw error;
      }
      state.set({
        kind: 2,
        error
      });
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, {
    equal: options?.equal
  });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}

// node_modules/@ngrx/store/fesm2022/ngrx-store.mjs
var REGISTERED_ACTION_TYPES = {};
function createAction(type, config) {
  REGISTERED_ACTION_TYPES[type] = (REGISTERED_ACTION_TYPES[type] || 0) + 1;
  if (typeof config === "function") {
    return defineType(type, (...args) => __spreadProps(__spreadValues({}, config(...args)), {
      type
    }));
  }
  const as = config ? config._as : "empty";
  switch (as) {
    case "empty":
      return defineType(type, () => ({
        type
      }));
    case "props":
      return defineType(type, (props2) => __spreadProps(__spreadValues({}, props2), {
        type
      }));
    default:
      throw new Error("Unexpected config.");
  }
}
function props() {
  return {
    _as: "props",
    _p: void 0
  };
}
function defineType(type, creator) {
  return Object.defineProperty(creator, "type", {
    value: type,
    writable: false
  });
}
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.substring(1);
}
function uncapitalize(text) {
  return text.charAt(0).toLowerCase() + text.substring(1);
}
function createActionGroup(config) {
  const {
    source,
    events
  } = config;
  return Object.keys(events).reduce((actionGroup, eventName) => __spreadProps(__spreadValues({}, actionGroup), {
    [toActionName(eventName)]: createAction(toActionType(source, eventName), events[eventName])
  }), {});
}
function emptyProps() {
  return props();
}
function toActionName(eventName) {
  return eventName.trim().split(" ").map((word, i) => i === 0 ? uncapitalize(word) : capitalize(word)).join("");
}
function toActionType(source, eventName) {
  return `[${source}] ${eventName}`;
}
var INIT = "@ngrx/store/init";
var ActionsSubject = class _ActionsSubject extends BehaviorSubject {
  constructor() {
    super({
      type: INIT
    });
  }
  next(action) {
    if (typeof action === "function") {
      throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);
    } else if (typeof action === "undefined") {
      throw new TypeError(`Actions must be objects`);
    } else if (typeof action.type === "undefined") {
      throw new TypeError(`Actions must have a type property`);
    }
    super.next(action);
  }
  complete() {
  }
  ngOnDestroy() {
    super.complete();
  }
  static {
    this.\u0275fac = function ActionsSubject_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActionsSubject)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ActionsSubject,
      factory: _ActionsSubject.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionsSubject, [{
    type: Injectable
  }], () => [], null);
})();
var ACTIONS_SUBJECT_PROVIDERS = [ActionsSubject];
var _ROOT_STORE_GUARD = new InjectionToken("@ngrx/store Internal Root Guard");
var _INITIAL_STATE = new InjectionToken("@ngrx/store Internal Initial State");
var INITIAL_STATE = new InjectionToken("@ngrx/store Initial State");
var REDUCER_FACTORY = new InjectionToken("@ngrx/store Reducer Factory");
var _REDUCER_FACTORY = new InjectionToken("@ngrx/store Internal Reducer Factory Provider");
var INITIAL_REDUCERS = new InjectionToken("@ngrx/store Initial Reducers");
var _INITIAL_REDUCERS = new InjectionToken("@ngrx/store Internal Initial Reducers");
var STORE_FEATURES = new InjectionToken("@ngrx/store Store Features");
var _STORE_REDUCERS = new InjectionToken("@ngrx/store Internal Store Reducers");
var _FEATURE_REDUCERS = new InjectionToken("@ngrx/store Internal Feature Reducers");
var _FEATURE_CONFIGS = new InjectionToken("@ngrx/store Internal Feature Configs");
var _STORE_FEATURES = new InjectionToken("@ngrx/store Internal Store Features");
var _FEATURE_REDUCERS_TOKEN = new InjectionToken("@ngrx/store Internal Feature Reducers Token");
var FEATURE_REDUCERS = new InjectionToken("@ngrx/store Feature Reducers");
var USER_PROVIDED_META_REDUCERS = new InjectionToken("@ngrx/store User Provided Meta Reducers");
var META_REDUCERS = new InjectionToken("@ngrx/store Meta Reducers");
var _RESOLVED_META_REDUCERS = new InjectionToken("@ngrx/store Internal Resolved Meta Reducers");
var USER_RUNTIME_CHECKS = new InjectionToken("@ngrx/store User Runtime Checks Config");
var _USER_RUNTIME_CHECKS = new InjectionToken("@ngrx/store Internal User Runtime Checks Config");
var ACTIVE_RUNTIME_CHECKS = new InjectionToken("@ngrx/store Internal Runtime Checks");
var _ACTION_TYPE_UNIQUENESS_CHECK = new InjectionToken("@ngrx/store Check if Action types are unique");
var ROOT_STORE_PROVIDER = new InjectionToken("@ngrx/store Root Store Provider");
var FEATURE_STATE_PROVIDER = new InjectionToken("@ngrx/store Feature State Provider");
function combineReducers(reducers, initialState2 = {}) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  return function combination(state, action) {
    state = state === void 0 ? initialState2 : state;
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
function omit(object, keyToRemove) {
  return Object.keys(object).filter((key) => key !== keyToRemove).reduce((result, key) => Object.assign(result, {
    [key]: object[key]
  }), {});
}
function compose(...functions) {
  return function(arg) {
    if (functions.length === 0) {
      return arg;
    }
    const last = functions[functions.length - 1];
    const rest = functions.slice(0, -1);
    return rest.reduceRight((composed, fn) => fn(composed), last(arg));
  };
}
function createReducerFactory(reducerFactory, metaReducers) {
  if (Array.isArray(metaReducers) && metaReducers.length > 0) {
    reducerFactory = compose.apply(null, [...metaReducers, reducerFactory]);
  }
  return (reducers, initialState2) => {
    const reducer = reducerFactory(reducers);
    return (state, action) => {
      state = state === void 0 ? initialState2 : state;
      return reducer(state, action);
    };
  };
}
function createFeatureReducerFactory(metaReducers) {
  const reducerFactory = Array.isArray(metaReducers) && metaReducers.length > 0 ? compose(...metaReducers) : (r) => r;
  return (reducer, initialState2) => {
    reducer = reducerFactory(reducer);
    return (state, action) => {
      state = state === void 0 ? initialState2 : state;
      return reducer(state, action);
    };
  };
}
var ReducerObservable = class extends Observable {
};
var ReducerManagerDispatcher = class extends ActionsSubject {
};
var UPDATE = "@ngrx/store/update-reducers";
var ReducerManager = class _ReducerManager extends BehaviorSubject {
  get currentReducers() {
    return this.reducers;
  }
  constructor(dispatcher, initialState2, reducers, reducerFactory) {
    super(reducerFactory(reducers, initialState2));
    this.dispatcher = dispatcher;
    this.initialState = initialState2;
    this.reducers = reducers;
    this.reducerFactory = reducerFactory;
  }
  addFeature(feature) {
    this.addFeatures([feature]);
  }
  addFeatures(features) {
    const reducers = features.reduce((reducerDict, {
      reducers: reducers2,
      reducerFactory,
      metaReducers,
      initialState: initialState2,
      key
    }) => {
      const reducer = typeof reducers2 === "function" ? createFeatureReducerFactory(metaReducers)(reducers2, initialState2) : createReducerFactory(reducerFactory, metaReducers)(reducers2, initialState2);
      reducerDict[key] = reducer;
      return reducerDict;
    }, {});
    this.addReducers(reducers);
  }
  removeFeature(feature) {
    this.removeFeatures([feature]);
  }
  removeFeatures(features) {
    this.removeReducers(features.map((p) => p.key));
  }
  addReducer(key, reducer) {
    this.addReducers({
      [key]: reducer
    });
  }
  addReducers(reducers) {
    this.reducers = __spreadValues(__spreadValues({}, this.reducers), reducers);
    this.updateReducers(Object.keys(reducers));
  }
  removeReducer(featureKey) {
    this.removeReducers([featureKey]);
  }
  removeReducers(featureKeys) {
    featureKeys.forEach((key) => {
      this.reducers = omit(this.reducers, key);
    });
    this.updateReducers(featureKeys);
  }
  updateReducers(featureKeys) {
    this.next(this.reducerFactory(this.reducers, this.initialState));
    this.dispatcher.next({
      type: UPDATE,
      features: featureKeys
    });
  }
  ngOnDestroy() {
    this.complete();
  }
  static {
    this.\u0275fac = function ReducerManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReducerManager)(\u0275\u0275inject(ReducerManagerDispatcher), \u0275\u0275inject(INITIAL_STATE), \u0275\u0275inject(INITIAL_REDUCERS), \u0275\u0275inject(REDUCER_FACTORY));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ReducerManager,
      factory: _ReducerManager.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReducerManager, [{
    type: Injectable
  }], () => [{
    type: ReducerManagerDispatcher
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [INITIAL_STATE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [INITIAL_REDUCERS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [REDUCER_FACTORY]
    }]
  }], null);
})();
var REDUCER_MANAGER_PROVIDERS = [ReducerManager, {
  provide: ReducerObservable,
  useExisting: ReducerManager
}, {
  provide: ReducerManagerDispatcher,
  useExisting: ActionsSubject
}];
var ScannedActionsSubject = class _ScannedActionsSubject extends Subject {
  ngOnDestroy() {
    this.complete();
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ScannedActionsSubject_BaseFactory;
      return function ScannedActionsSubject_Factory(__ngFactoryType__) {
        return (\u0275ScannedActionsSubject_BaseFactory || (\u0275ScannedActionsSubject_BaseFactory = \u0275\u0275getInheritedFactory(_ScannedActionsSubject)))(__ngFactoryType__ || _ScannedActionsSubject);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ScannedActionsSubject,
      factory: _ScannedActionsSubject.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScannedActionsSubject, [{
    type: Injectable
  }], null, null);
})();
var SCANNED_ACTIONS_SUBJECT_PROVIDERS = [ScannedActionsSubject];
var StateObservable = class extends Observable {
};
var State = class _State extends BehaviorSubject {
  static {
    this.INIT = INIT;
  }
  constructor(actions$, reducer$, scannedActions, initialState2) {
    super(initialState2);
    const actionsOnQueue$ = actions$.pipe(observeOn(queueScheduler));
    const withLatestReducer$ = actionsOnQueue$.pipe(withLatestFrom(reducer$));
    const seed = {
      state: initialState2
    };
    const stateAndAction$ = withLatestReducer$.pipe(scan(reduceState, seed));
    this.stateSubscription = stateAndAction$.subscribe(({
      state,
      action
    }) => {
      this.next(state);
      scannedActions.next(action);
    });
    this.state = toSignal(this, {
      manualCleanup: true,
      requireSync: true
    });
  }
  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
    this.complete();
  }
  static {
    this.\u0275fac = function State_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _State)(\u0275\u0275inject(ActionsSubject), \u0275\u0275inject(ReducerObservable), \u0275\u0275inject(ScannedActionsSubject), \u0275\u0275inject(INITIAL_STATE));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _State,
      factory: _State.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(State, [{
    type: Injectable
  }], () => [{
    type: ActionsSubject
  }, {
    type: ReducerObservable
  }, {
    type: ScannedActionsSubject
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [INITIAL_STATE]
    }]
  }], null);
})();
function reduceState(stateActionPair = {
  state: void 0
}, [action, reducer]) {
  const {
    state
  } = stateActionPair;
  return {
    state: reducer(state, action),
    action
  };
}
var STATE_PROVIDERS = [State, {
  provide: StateObservable,
  useExisting: State
}];
var Store = class _Store extends Observable {
  constructor(state$, actionsObserver, reducerManager) {
    super();
    this.actionsObserver = actionsObserver;
    this.reducerManager = reducerManager;
    this.source = state$;
    this.state = state$.state;
  }
  select(pathOrMapFn, ...paths) {
    return select.call(null, pathOrMapFn, ...paths)(this);
  }
  /**
   * Returns a signal of the provided selector.
   *
   * @param selector selector function
   * @param options select signal options
   */
  selectSignal(selector, options) {
    return computed(() => selector(this.state()), options);
  }
  lift(operator) {
    const store = new _Store(this, this.actionsObserver, this.reducerManager);
    store.operator = operator;
    return store;
  }
  dispatch(action) {
    this.actionsObserver.next(action);
  }
  next(action) {
    this.actionsObserver.next(action);
  }
  error(err) {
    this.actionsObserver.error(err);
  }
  complete() {
    this.actionsObserver.complete();
  }
  addReducer(key, reducer) {
    this.reducerManager.addReducer(key, reducer);
  }
  removeReducer(key) {
    this.reducerManager.removeReducer(key);
  }
  static {
    this.\u0275fac = function Store_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Store)(\u0275\u0275inject(StateObservable), \u0275\u0275inject(ActionsSubject), \u0275\u0275inject(ReducerManager));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Store,
      factory: _Store.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Store, [{
    type: Injectable
  }], () => [{
    type: StateObservable
  }, {
    type: ActionsSubject
  }, {
    type: ReducerManager
  }], null);
})();
var STORE_PROVIDERS = [Store];
function select(pathOrMapFn, propsOrPath, ...paths) {
  return function selectOperator(source$) {
    let mapped$;
    if (typeof pathOrMapFn === "string") {
      const pathSlices = [propsOrPath, ...paths].filter(Boolean);
      mapped$ = source$.pipe(pluck(pathOrMapFn, ...pathSlices));
    } else if (typeof pathOrMapFn === "function") {
      mapped$ = source$.pipe(map((source) => pathOrMapFn(source, propsOrPath)));
    } else {
      throw new TypeError(`Unexpected type '${typeof pathOrMapFn}' in select operator, expected 'string' or 'function'`);
    }
    return mapped$.pipe(distinctUntilChanged());
  };
}
var RUNTIME_CHECK_URL = "https://ngrx.io/guide/store/configuration/runtime-checks";
function isUndefined(target) {
  return target === void 0;
}
function isNull(target) {
  return target === null;
}
function isArray(target) {
  return Array.isArray(target);
}
function isString(target) {
  return typeof target === "string";
}
function isBoolean(target) {
  return typeof target === "boolean";
}
function isNumber(target) {
  return typeof target === "number";
}
function isObjectLike(target) {
  return typeof target === "object" && target !== null;
}
function isObject(target) {
  return isObjectLike(target) && !isArray(target);
}
function isPlainObject(target) {
  if (!isObject(target)) {
    return false;
  }
  const targetPrototype = Object.getPrototypeOf(target);
  return targetPrototype === Object.prototype || targetPrototype === null;
}
function isFunction(target) {
  return typeof target === "function";
}
function isComponent(target) {
  return isFunction(target) && target.hasOwnProperty("\u0275cmp");
}
function hasOwnProperty(target, propertyName) {
  return Object.prototype.hasOwnProperty.call(target, propertyName);
}
var _ngrxMockEnvironment = false;
function isNgrxMockEnvironment() {
  return _ngrxMockEnvironment;
}
function isEqualCheck(a, b) {
  return a === b;
}
function isArgumentsChanged(args, lastArguments, comparator) {
  for (let i = 0; i < args.length; i++) {
    if (!comparator(args[i], lastArguments[i])) {
      return true;
    }
  }
  return false;
}
function defaultMemoize(projectionFn, isArgumentsEqual = isEqualCheck, isResultEqual = isEqualCheck) {
  let lastArguments = null;
  let lastResult = null;
  let overrideResult;
  function reset() {
    lastArguments = null;
    lastResult = null;
  }
  function setResult(result = void 0) {
    overrideResult = {
      result
    };
  }
  function clearResult() {
    overrideResult = void 0;
  }
  function memoized() {
    if (overrideResult !== void 0) {
      return overrideResult.result;
    }
    if (!lastArguments) {
      lastResult = projectionFn.apply(null, arguments);
      lastArguments = arguments;
      return lastResult;
    }
    if (!isArgumentsChanged(arguments, lastArguments, isArgumentsEqual)) {
      return lastResult;
    }
    const newResult = projectionFn.apply(null, arguments);
    lastArguments = arguments;
    if (isResultEqual(lastResult, newResult)) {
      return lastResult;
    }
    lastResult = newResult;
    return newResult;
  }
  return {
    memoized,
    reset,
    setResult,
    clearResult
  };
}
function createSelector(...input) {
  return createSelectorFactory(defaultMemoize)(...input);
}
function defaultStateFn(state, selectors, props2, memoizedProjector) {
  if (props2 === void 0) {
    const args2 = selectors.map((fn) => fn(state));
    return memoizedProjector.memoized.apply(null, args2);
  }
  const args = selectors.map((fn) => fn(state, props2));
  return memoizedProjector.memoized.apply(null, [...args, props2]);
}
function createSelectorFactory(memoize, options = {
  stateFn: defaultStateFn
}) {
  return function(...input) {
    let args = input;
    if (Array.isArray(args[0])) {
      const [head, ...tail] = args;
      args = [...head, ...tail];
    } else if (args.length === 1 && isSelectorsDictionary(args[0])) {
      args = extractArgsFromSelectorsDictionary(args[0]);
    }
    const selectors = args.slice(0, args.length - 1);
    const projector = args[args.length - 1];
    const memoizedSelectors = selectors.filter((selector) => selector.release && typeof selector.release === "function");
    const memoizedProjector = memoize(function(...selectors2) {
      return projector.apply(null, selectors2);
    });
    const memoizedState = defaultMemoize(function(state, props2) {
      return options.stateFn.apply(null, [state, selectors, props2, memoizedProjector]);
    });
    function release() {
      memoizedState.reset();
      memoizedProjector.reset();
      memoizedSelectors.forEach((selector) => selector.release());
    }
    return Object.assign(memoizedState.memoized, {
      release,
      projector: memoizedProjector.memoized,
      setResult: memoizedState.setResult,
      clearResult: memoizedState.clearResult
    });
  };
}
function createFeatureSelector(featureName) {
  return createSelector((state) => {
    const featureState = state[featureName];
    if (!isNgrxMockEnvironment() && isDevMode() && !(featureName in state)) {
      console.warn(`@ngrx/store: The feature name "${featureName}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${featureName}', ...) or StoreModule.forFeature('${featureName}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`);
    }
    return featureState;
  }, (featureState) => featureState);
}
function isSelectorsDictionary(selectors) {
  return !!selectors && typeof selectors === "object" && Object.values(selectors).every((selector) => typeof selector === "function");
}
function extractArgsFromSelectorsDictionary(selectorsDictionary) {
  const selectors = Object.values(selectorsDictionary);
  const resultKeys = Object.keys(selectorsDictionary);
  const projector = (...selectorResults) => resultKeys.reduce((result, key, index) => __spreadProps(__spreadValues({}, result), {
    [key]: selectorResults[index]
  }), {});
  return [...selectors, projector];
}
function _createStoreReducers(reducers) {
  return reducers instanceof InjectionToken ? inject(reducers) : reducers;
}
function _createFeatureStore(configs, featureStores) {
  return featureStores.map((feat, index) => {
    if (configs[index] instanceof InjectionToken) {
      const conf = inject(configs[index]);
      return {
        key: feat.key,
        reducerFactory: conf.reducerFactory ? conf.reducerFactory : combineReducers,
        metaReducers: conf.metaReducers ? conf.metaReducers : [],
        initialState: conf.initialState
      };
    }
    return feat;
  });
}
function _createFeatureReducers(reducerCollection) {
  return reducerCollection.map((reducer) => {
    return reducer instanceof InjectionToken ? inject(reducer) : reducer;
  });
}
function _initialStateFactory(initialState2) {
  if (typeof initialState2 === "function") {
    return initialState2();
  }
  return initialState2;
}
function _concatMetaReducers(metaReducers, userProvidedMetaReducers) {
  return metaReducers.concat(userProvidedMetaReducers);
}
function _provideForRootGuard() {
  const store = inject(Store, {
    optional: true,
    skipSelf: true
  });
  if (store) {
    throw new TypeError(`The root Store has been provided more than once. Feature modules should provide feature states instead.`);
  }
  return "guarded";
}
function immutabilityCheckMetaReducer(reducer, checks) {
  return function(state, action) {
    const act = checks.action(action) ? freeze(action) : action;
    const nextState = reducer(state, act);
    return checks.state() ? freeze(nextState) : nextState;
  };
}
function freeze(target) {
  Object.freeze(target);
  const targetIsFunction = isFunction(target);
  Object.getOwnPropertyNames(target).forEach((prop) => {
    if (prop.startsWith("\u0275")) {
      return;
    }
    if (hasOwnProperty(target, prop) && (targetIsFunction ? prop !== "caller" && prop !== "callee" && prop !== "arguments" : true)) {
      const propValue = target[prop];
      if ((isObjectLike(propValue) || isFunction(propValue)) && !Object.isFrozen(propValue)) {
        freeze(propValue);
      }
    }
  });
  return target;
}
function serializationCheckMetaReducer(reducer, checks) {
  return function(state, action) {
    if (checks.action(action)) {
      const unserializableAction = getUnserializable(action);
      throwIfUnserializable(unserializableAction, "action");
    }
    const nextState = reducer(state, action);
    if (checks.state()) {
      const unserializableState = getUnserializable(nextState);
      throwIfUnserializable(unserializableState, "state");
    }
    return nextState;
  };
}
function getUnserializable(target, path2 = []) {
  if ((isUndefined(target) || isNull(target)) && path2.length === 0) {
    return {
      path: ["root"],
      value: target
    };
  }
  const keys = Object.keys(target);
  return keys.reduce((result, key) => {
    if (result) {
      return result;
    }
    const value = target[key];
    if (isComponent(value)) {
      return result;
    }
    if (isUndefined(value) || isNull(value) || isNumber(value) || isBoolean(value) || isString(value) || isArray(value)) {
      return false;
    }
    if (isPlainObject(value)) {
      return getUnserializable(value, [...path2, key]);
    }
    return {
      path: [...path2, key],
      value
    };
  }, false);
}
function throwIfUnserializable(unserializable, context) {
  if (unserializable === false) {
    return;
  }
  const unserializablePath = unserializable.path.join(".");
  const error = new Error(`Detected unserializable ${context} at "${unserializablePath}". ${RUNTIME_CHECK_URL}#strict${context}serializability`);
  error.value = unserializable.value;
  error.unserializablePath = unserializablePath;
  throw error;
}
function inNgZoneAssertMetaReducer(reducer, checks) {
  return function(state, action) {
    if (checks.action(action) && !NgZone.isInAngularZone()) {
      throw new Error(`Action '${action.type}' running outside NgZone. ${RUNTIME_CHECK_URL}#strictactionwithinngzone`);
    }
    return reducer(state, action);
  };
}
function createActiveRuntimeChecks(runtimeChecks) {
  if (isDevMode()) {
    return __spreadValues({
      strictStateSerializability: false,
      strictActionSerializability: false,
      strictStateImmutability: true,
      strictActionImmutability: true,
      strictActionWithinNgZone: false,
      strictActionTypeUniqueness: false
    }, runtimeChecks);
  }
  return {
    strictStateSerializability: false,
    strictActionSerializability: false,
    strictStateImmutability: false,
    strictActionImmutability: false,
    strictActionWithinNgZone: false,
    strictActionTypeUniqueness: false
  };
}
function createSerializationCheckMetaReducer({
  strictActionSerializability,
  strictStateSerializability
}) {
  return (reducer) => strictActionSerializability || strictStateSerializability ? serializationCheckMetaReducer(reducer, {
    action: (action) => strictActionSerializability && !ignoreNgrxAction(action),
    state: () => strictStateSerializability
  }) : reducer;
}
function createImmutabilityCheckMetaReducer({
  strictActionImmutability,
  strictStateImmutability
}) {
  return (reducer) => strictActionImmutability || strictStateImmutability ? immutabilityCheckMetaReducer(reducer, {
    action: (action) => strictActionImmutability && !ignoreNgrxAction(action),
    state: () => strictStateImmutability
  }) : reducer;
}
function ignoreNgrxAction(action) {
  return action.type.startsWith("@ngrx");
}
function createInNgZoneCheckMetaReducer({
  strictActionWithinNgZone
}) {
  return (reducer) => strictActionWithinNgZone ? inNgZoneAssertMetaReducer(reducer, {
    action: (action) => strictActionWithinNgZone && !ignoreNgrxAction(action)
  }) : reducer;
}
function provideRuntimeChecks(runtimeChecks) {
  return [{
    provide: _USER_RUNTIME_CHECKS,
    useValue: runtimeChecks
  }, {
    provide: USER_RUNTIME_CHECKS,
    useFactory: _runtimeChecksFactory,
    deps: [_USER_RUNTIME_CHECKS]
  }, {
    provide: ACTIVE_RUNTIME_CHECKS,
    deps: [USER_RUNTIME_CHECKS],
    useFactory: createActiveRuntimeChecks
  }, {
    provide: META_REDUCERS,
    multi: true,
    deps: [ACTIVE_RUNTIME_CHECKS],
    useFactory: createImmutabilityCheckMetaReducer
  }, {
    provide: META_REDUCERS,
    multi: true,
    deps: [ACTIVE_RUNTIME_CHECKS],
    useFactory: createSerializationCheckMetaReducer
  }, {
    provide: META_REDUCERS,
    multi: true,
    deps: [ACTIVE_RUNTIME_CHECKS],
    useFactory: createInNgZoneCheckMetaReducer
  }];
}
function checkForActionTypeUniqueness() {
  return [{
    provide: _ACTION_TYPE_UNIQUENESS_CHECK,
    multi: true,
    deps: [ACTIVE_RUNTIME_CHECKS],
    useFactory: _actionTypeUniquenessCheck
  }];
}
function _runtimeChecksFactory(runtimeChecks) {
  return runtimeChecks;
}
function _actionTypeUniquenessCheck(config) {
  if (!config.strictActionTypeUniqueness) {
    return;
  }
  const duplicates = Object.entries(REGISTERED_ACTION_TYPES).filter(([, registrations]) => registrations > 1).map(([type]) => type);
  if (duplicates.length) {
    throw new Error(`Action types are registered more than once, ${duplicates.map((type) => `"${type}"`).join(", ")}. ${RUNTIME_CHECK_URL}#strictactiontypeuniqueness`);
  }
}
function _provideStore(reducers = {}, config = {}) {
  return [{
    provide: _ROOT_STORE_GUARD,
    useFactory: _provideForRootGuard
  }, {
    provide: _INITIAL_STATE,
    useValue: config.initialState
  }, {
    provide: INITIAL_STATE,
    useFactory: _initialStateFactory,
    deps: [_INITIAL_STATE]
  }, {
    provide: _INITIAL_REDUCERS,
    useValue: reducers
  }, {
    provide: _STORE_REDUCERS,
    useExisting: reducers instanceof InjectionToken ? reducers : _INITIAL_REDUCERS
  }, {
    provide: INITIAL_REDUCERS,
    deps: [_INITIAL_REDUCERS, [new Inject(_STORE_REDUCERS)]],
    useFactory: _createStoreReducers
  }, {
    provide: USER_PROVIDED_META_REDUCERS,
    useValue: config.metaReducers ? config.metaReducers : []
  }, {
    provide: _RESOLVED_META_REDUCERS,
    deps: [META_REDUCERS, USER_PROVIDED_META_REDUCERS],
    useFactory: _concatMetaReducers
  }, {
    provide: _REDUCER_FACTORY,
    useValue: config.reducerFactory ? config.reducerFactory : combineReducers
  }, {
    provide: REDUCER_FACTORY,
    deps: [_REDUCER_FACTORY, _RESOLVED_META_REDUCERS],
    useFactory: createReducerFactory
  }, ACTIONS_SUBJECT_PROVIDERS, REDUCER_MANAGER_PROVIDERS, SCANNED_ACTIONS_SUBJECT_PROVIDERS, STATE_PROVIDERS, STORE_PROVIDERS, provideRuntimeChecks(config.runtimeChecks), checkForActionTypeUniqueness()];
}
function rootStoreProviderFactory() {
  inject(ActionsSubject);
  inject(ReducerObservable);
  inject(ScannedActionsSubject);
  inject(Store);
  inject(_ROOT_STORE_GUARD, {
    optional: true
  });
  inject(_ACTION_TYPE_UNIQUENESS_CHECK, {
    optional: true
  });
}
var ENVIRONMENT_STORE_PROVIDER = [{
  provide: ROOT_STORE_PROVIDER,
  useFactory: rootStoreProviderFactory
}, {
  provide: ENVIRONMENT_INITIALIZER,
  multi: true,
  useFactory() {
    return () => inject(ROOT_STORE_PROVIDER);
  }
}];
function provideStore(reducers, config) {
  return makeEnvironmentProviders([..._provideStore(reducers, config), ENVIRONMENT_STORE_PROVIDER]);
}
function _provideState(featureNameOrSlice, reducers, config = {}) {
  return [{
    provide: _FEATURE_CONFIGS,
    multi: true,
    useValue: featureNameOrSlice instanceof Object ? {} : config
  }, {
    provide: STORE_FEATURES,
    multi: true,
    useValue: {
      key: featureNameOrSlice instanceof Object ? featureNameOrSlice.name : featureNameOrSlice,
      reducerFactory: !(config instanceof InjectionToken) && config.reducerFactory ? config.reducerFactory : combineReducers,
      metaReducers: !(config instanceof InjectionToken) && config.metaReducers ? config.metaReducers : [],
      initialState: !(config instanceof InjectionToken) && config.initialState ? config.initialState : void 0
    }
  }, {
    provide: _STORE_FEATURES,
    deps: [_FEATURE_CONFIGS, STORE_FEATURES],
    useFactory: _createFeatureStore
  }, {
    provide: _FEATURE_REDUCERS,
    multi: true,
    useValue: featureNameOrSlice instanceof Object ? featureNameOrSlice.reducer : reducers
  }, {
    provide: _FEATURE_REDUCERS_TOKEN,
    multi: true,
    useExisting: reducers instanceof InjectionToken ? reducers : _FEATURE_REDUCERS
  }, {
    provide: FEATURE_REDUCERS,
    multi: true,
    deps: [_FEATURE_REDUCERS, [new Inject(_FEATURE_REDUCERS_TOKEN)]],
    useFactory: _createFeatureReducers
  }, checkForActionTypeUniqueness()];
}
var StoreRootModule = class _StoreRootModule {
  constructor(actions$, reducer$, scannedActions$, store, guard, actionCheck) {
  }
  static {
    this.\u0275fac = function StoreRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreRootModule)(\u0275\u0275inject(ActionsSubject), \u0275\u0275inject(ReducerObservable), \u0275\u0275inject(ScannedActionsSubject), \u0275\u0275inject(Store), \u0275\u0275inject(_ROOT_STORE_GUARD, 8), \u0275\u0275inject(_ACTION_TYPE_UNIQUENESS_CHECK, 8));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _StoreRootModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreRootModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: ActionsSubject
  }, {
    type: ReducerObservable
  }, {
    type: ScannedActionsSubject
  }, {
    type: Store
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [_ROOT_STORE_GUARD]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [_ACTION_TYPE_UNIQUENESS_CHECK]
    }]
  }], null);
})();
var StoreFeatureModule = class _StoreFeatureModule {
  constructor(features, featureReducers, reducerManager, root, actionCheck) {
    this.features = features;
    this.featureReducers = featureReducers;
    this.reducerManager = reducerManager;
    const feats = features.map((feature, index) => {
      const featureReducerCollection = featureReducers.shift();
      const reducers = featureReducerCollection[index];
      return __spreadProps(__spreadValues({}, feature), {
        reducers,
        initialState: _initialStateFactory(feature.initialState)
      });
    });
    reducerManager.addFeatures(feats);
  }
  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngOnDestroy() {
    this.reducerManager.removeFeatures(this.features);
  }
  static {
    this.\u0275fac = function StoreFeatureModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFeatureModule)(\u0275\u0275inject(_STORE_FEATURES), \u0275\u0275inject(FEATURE_REDUCERS), \u0275\u0275inject(ReducerManager), \u0275\u0275inject(StoreRootModule), \u0275\u0275inject(_ACTION_TYPE_UNIQUENESS_CHECK, 8));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _StoreFeatureModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFeatureModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [_STORE_FEATURES]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [FEATURE_REDUCERS]
    }]
  }, {
    type: ReducerManager
  }, {
    type: StoreRootModule
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [_ACTION_TYPE_UNIQUENESS_CHECK]
    }]
  }], null);
})();
var StoreModule = class _StoreModule {
  static forRoot(reducers, config) {
    return {
      ngModule: StoreRootModule,
      providers: [..._provideStore(reducers, config)]
    };
  }
  static forFeature(featureNameOrSlice, reducers, config = {}) {
    return {
      ngModule: StoreFeatureModule,
      providers: [..._provideState(featureNameOrSlice, reducers, config)]
    };
  }
  static {
    this.\u0275fac = function StoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _StoreModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
function on(...args) {
  const reducer = args.pop();
  const types = args.map((creator) => creator.type);
  return {
    reducer,
    types
  };
}
function createReducer(initialState2, ...ons) {
  const map2 = /* @__PURE__ */ new Map();
  for (const on2 of ons) {
    for (const type of on2.types) {
      const existingReducer = map2.get(type);
      if (existingReducer) {
        const newReducer = (state, action) => on2.reducer(existingReducer(state, action), action);
        map2.set(type, newReducer);
      } else {
        map2.set(type, on2.reducer);
      }
    }
  }
  return function(state = initialState2, action) {
    const reducer = map2.get(action.type);
    return reducer ? reducer(state, action) : state;
  };
}

// src/app/features/components/sidenav/store/sidenav.selectors.ts
var selectSidenavState = createFeatureSelector("sidenav");
var selectIsSidenavOpen = createSelector(selectSidenavState, (state) => state.isOpen);
var selectSelectedMenu = createSelector(selectSidenavState, (state) => state.selectedMenu);

// src/app/features/components/sidenav/store/sidenav.actions.ts
var SidenavActions = createActionGroup({
  source: "Sidenav",
  events: {
    "[Sidenav] Load Sidenavs": emptyProps(),
    "[Sidenav] Open": emptyProps(),
    "[Sidenav] Close": emptyProps(),
    "[Sidenav] Toggle": emptyProps(),
    "[Sidenav] Select Menu": props()
  }
});

// src/app/features/components/sidenav/sidenav.component.ts
var _c0 = (a0) => ({ "p-3": a0 });
var _c1 = (a0, a1) => ({ "pt-5 pl-10 ": a0, "p-2": a1 });
var _c2 = (a0, a1) => ({ "w-16": a0, "w-64": a1 });
var _c3 = (a0, a1) => ({ "pt-5 pl-10 w-64": a0, "p-2": a1 });
var _c4 = (a0, a1) => ({ "w-6": a0, "w-48 ": a1 });
var _c5 = (a0) => ({ "py-2 pr-1": a0 });
var _c6 = (a0) => ({ "hidden mb-0": a0 });
var _c7 = (a0, a1) => ({ "py-2": a0, "bg-steel-blue rounded-xl ": a1 });
var _c8 = (a0, a1) => ({ "w-7 ml-2": a0, "w-48 ": a1 });
var _c9 = (a0) => ({ hidden: a0 });
var _c10 = (a0) => ({ "bg-steel-blue rounded-xl ": a0 });
function SidenavComponent_li_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c8, !ctx_r2.isOpen, ctx_r2.isOpen));
  }
}
function SidenavComponent_li_6_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function SidenavComponent_li_6_ul_7_li_1_Template_li_click_0_listener() {
      const subItem_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const menu_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onClickSubMenu(menu_r2, subItem_r5));
    });
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subItem_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c10, \u0275\u0275pipeBind1(1, 2, ctx_r2.selectedMenu$) === subItem_r5.route));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(subItem_r5.title);
  }
}
function SidenavComponent_li_6_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 18);
    \u0275\u0275template(1, SidenavComponent_li_6_ul_7_li_1_Template, 4, 6, "li", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c9, !ctx_r2.isOpen));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", menu_r2.subMenuItems);
  }
}
function SidenavComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 11)(1, "div", 12);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("click", function SidenavComponent_li_6_Template_div_click_1_listener() {
      const menu_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onClickMenu(menu_r2));
    });
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SidenavComponent_li_6_div_6_Template, 1, 4, "div", 15)(7, SidenavComponent_li_6_ul_7_Template, 2, 4, "ul", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c7, !ctx_r2.isOpen, \u0275\u0275pipeBind1(2, 7, ctx_r2.selectedMenu$) === menu_r2.route));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("alt", menu_r2.title);
    \u0275\u0275property("src", menu_r2.icon, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c6, !ctx_r2.isOpen));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", menu_r2.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r6 === 3 || i_r6 === 6 || i_r6 === 10);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menu_r2.hasSubMenu && ctx_r2.openSubMenuId === menu_r2.id);
  }
}
var SidenavComponent = class _SidenavComponent {
  constructor(router, _authService, store) {
    this.router = router;
    this._authService = _authService;
    this.store = store;
    this.isOpen$ = this.store.select(selectIsSidenavOpen);
    this.selectedMenu$ = this.store.select(selectSelectedMenu);
    this.isOpen = true;
    this.toggleSideBar = new EventEmitter();
    this.menus = MENUS;
    this.activeMenuId = null;
    this.activeSubMenuId = null;
    this.openSubMenuId = null;
    this.activeMenu = "";
  }
  selectMenu(menu) {
    this.store.dispatch(SidenavActions["[Sidenav]SelectMenu"]({
      selectedMenu: menu
    }));
  }
  onToggleSidenav() {
    this.toggleSideBar.emit();
  }
  navigate(route) {
    this.router.navigate([`/${route}`]);
  }
  onLogout() {
    this._authService.logout();
    this.navigate(path.LOGIN);
  }
  onClickMenu(menu) {
    if (!this.isOpen) {
      this.onToggleSidenav();
    }
    this.selectMenu(menu.route);
    if (this.activeMenuId === menu.id) {
      this.openSubMenuId = this.openSubMenuId === menu.id ? null : menu.id;
    } else {
      this.openSubMenuId = menu.id;
      this.activeMenuId = menu.id;
      this.activeSubMenuId = null;
    }
    this.navigate(menu.route);
  }
  onClickSubMenu(menu, subMenu) {
    this.activeSubMenuId = subMenu.id;
    this.selectMenu(subMenu.route);
    this.selectedMenu$.subscribe((x) => {
      this.activeMenu = x;
      console.log("menu ", this.activeMenu, subMenu.title);
    });
    if (subMenu.route === path.QUICK_ORDER) {
      this.router.navigate([`/${subMenu.route}`]);
    } else {
      this.router.navigate([`/${menu.route}/${subMenu.route}`]);
    }
  }
  static {
    this.\u0275fac = function SidenavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SidenavComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidenavComponent, selectors: [["app-sidenav"]], inputs: { isOpen: "isOpen" }, outputs: { toggleSideBar: "toggleSideBar" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 28, consts: [[1, "sidenav-container", "h-screen", "relative", "drop-shadow-2xl", "flex", "flex-col", "justify-between"], [1, "flex", "items-center", 3, "ngClass"], ["alt", "Toggle Sidenav", 1, "w-7", "h-7", "mt-5", "ml-5", "cursor-pointer", 3, "click", "src"], [1, "mt-5", "w-full", 3, "ngClass"], [3, "ngClass"], ["class", "py-2 pr-5", 4, "ngFor", "ngForOf"], [1, "bottom-0", "duration-200", 3, "ngClass"], [1, "border-t", "border-gray-400", "my-2", "ml-3", "duration-100", 3, "ngClass"], [1, "flex", "mb-3", "py-1", "hover:bg-steel-blue", "hover:rounded-2xl", "cursor-pointer", 3, "click", "ngClass"], ["alt", "Logout", 1, "w-6", "h-6", "ml-3", "mr-2", "mt-1", 3, "src"], [1, "pt-1", "ml-3", "font-light", "text-sm", "hover:font-semibold", 3, "ngClass"], [1, "py-2", "pr-5"], [1, "flex", "py-1", "hover:bg-steel-blue", "hover:rounded-2xl", "cursor-pointer", 3, "click", "ngClass"], [1, "w-5", "h-5", "ml-3", "mr-2", "mt-1", 3, "src", "alt"], [1, "font-light", "text-sm", "pt-1", "ml-3", "hover:font-semibold", 3, "ngClass"], ["class", "border-t border-gray-400 mt-5 duration-100", 3, "ngClass", 4, "ngIf"], ["class", "w-full duration-300 ease-in-out", 3, "ngClass", 4, "ngIf"], [1, "border-t", "border-gray-400", "mt-5", "duration-100", 3, "ngClass"], [1, "w-full", "duration-300", "ease-in-out", 3, "ngClass"], ["class", "w-60 pl-10 duration-300 text-white text-xs font-light hover:bg-steel-blue hover:rounded-xl cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "w-60", "pl-10", "duration-300", "text-white", "text-xs", "font-light", "hover:bg-steel-blue", "hover:rounded-xl", "cursor-pointer", 3, "click", "ngClass"], [1, "py-1", "my-2"]], template: function SidenavComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "img", 2);
        \u0275\u0275listener("click", function SidenavComponent_Template_img_click_3_listener() {
          return ctx.onToggleSidenav();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "ul", 4);
        \u0275\u0275template(6, SidenavComponent_li_6_Template, 8, 14, "li", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275element(8, "div", 7);
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275listener("click", function SidenavComponent_Template_div_click_9_listener() {
          return ctx.onLogout();
        });
        \u0275\u0275element(10, "img", 9);
        \u0275\u0275elementStart(11, "p", 10);
        \u0275\u0275text(12, " Logout ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c0, ctx.isOpen));
        \u0275\u0275advance();
        \u0275\u0275property("src", "assets/favicons/burger.svg", \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(12, _c1, ctx.isOpen, !ctx.isOpen));
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(15, _c2, !ctx.isOpen, ctx.isOpen));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.menus);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(18, _c3, ctx.isOpen, !ctx.isOpen));
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(21, _c4, !ctx.isOpen, ctx.isOpen));
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c5, !ctx.isOpen));
        \u0275\u0275advance();
        \u0275\u0275property("src", "assets/favicons/logout.svg", \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c6, !ctx.isOpen));
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, AsyncPipe, FormsModule], styles: ["\n\n.sidenav-container[_ngcontent-%COMP%] {\n  background-color: var(--default-color);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=sidenav.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidenavComponent, { className: "SidenavComponent", filePath: "src/app/features/components/sidenav/sidenav.component.ts", lineNumber: 22 });
})();

// src/app/shared/components/branch-selector/branch-selector.component.ts
var _c02 = (a0, a1) => ({ "opacity-0 pointer-events-none": a0, "opacity-100 cursor-pointer": a1 });
function BranchSelectorComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "p", 8);
    \u0275\u0275text(3, " CDE Test Office ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275text(5, " Testing HO ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 10);
    \u0275\u0275text(7, " Office HQ ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c02, !ctx_r0.isShowBranch, ctx_r0.isShowBranch));
  }
}
var BranchSelectorComponent = class _BranchSelectorComponent {
  constructor() {
    this.isShowBranch = false;
  }
  onChangeBranch() {
    this.isShowBranch = !this.isShowBranch;
  }
  static {
    this.\u0275fac = function BranchSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BranchSelectorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BranchSelectorComponent, selectors: [["app-branch-selector"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "flex", "items-center", "px-4", "w-full", "md:w-fit"], [1, "w-full"], ["type", "button", "id", "menu-button", "aria-expanded", "true", "aria-haspopup", "true", 1, "inline-flex", "w-full", "justify-between", "items-center", "gap-x-1.5", "rounded-md", "bg-white", "px-3", "py-2", "text-sm", "font-semibold", "text-gray-900", "shadow-sm", "ring-1", "ring-inset", "ring-gray-300", "hover:bg-gray-200", 3, "click"], ["viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", "data-slot", "icon", 1, "-mr-1", "h-5", "w-5", "text-gray-400"], ["fill-rule", "evenodd", "d", "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z", "clip-rule", "evenodd"], ["class", "absolute left-0 z-10 lg:-ml-3 -ml-5 -mr-5 mt-40 w-full lg:w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-300 ease-in-out", "role", "menu", "aria-orientation", "vertical", "aria-labelledby", "menu-button", "tabindex", "-1", 3, "ngClass", 4, "ngIf"], ["role", "menu", "aria-orientation", "vertical", "aria-labelledby", "menu-button", "tabindex", "-1", 1, "absolute", "left-0", "z-10", "lg:-ml-3", "-ml-5", "-mr-5", "mt-40", "w-full", "lg:w-56", "rounded-md", "bg-white", "shadow-lg", "ring-1", "ring-black", "ring-opacity-5", "transition-opacity", "duration-300", "ease-in-out", 3, "ngClass"], ["role", "none", 1, "py-1", "duration-200"], ["role", "menuitem", "tabindex", "-1", "id", "menu-item-0", 1, "block", "px-4", "py-2", "text-sm", "text-gray-700", "hover:bg-slate-100"], ["role", "menuitem", "tabindex", "-1", "id", "menu-item-1", 1, "block", "px-4", "py-2", "text-sm", "text-gray-700", "hover:bg-slate-100"], ["role", "menuitem", "tabindex", "-1", "id", "menu-item-2", 1, "block", "px-4", "py-2", "text-sm", "text-gray-700", "hover:bg-slate-100"]], template: function BranchSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function BranchSelectorComponent_Template_button_click_2_listener() {
          return ctx.onChangeBranch();
        });
        \u0275\u0275text(3, " ABC Test Head Office ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 3);
        \u0275\u0275element(5, "path", 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, BranchSelectorComponent_div_6_Template, 8, 4, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.isShowBranch);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, FormsModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BranchSelectorComponent, { className: "BranchSelectorComponent", filePath: "src/app/shared/components/branch-selector/branch-selector.component.ts", lineNumber: 12 });
})();

// src/app/features/components/navbar/navbar.component.ts
var NavbarComponent = class _NavbarComponent {
  constructor() {
    this.sidenavOpen = true;
    this.toggleSideBar = new EventEmitter();
  }
  onToggleSidenav() {
    this.toggleSideBar.emit();
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], inputs: { sidenavOpen: "sidenavOpen" }, outputs: { toggleSideBar: "toggleSideBar" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [[1, "flex", "items-center", "navbar-container", "p-4", "drop-shadow-2xl"], [1, "flex", "w-full", "columns-md"], [1, "w-1/3", "flex"], [1, "inline-block", "text-left", "lg:hidden"], ["alt", "Toggle Sidenav", 1, "w-7", "h-7", "mt-1", "mr-3", "cursor-pointer", 3, "click", "src"], [1, "md:block", "hidden"], [1, "logo-section", "w-1/3"], ["src", "assets/favicons/ct_logo.svg", "alt", "Cleanline Tasman Logo", 1, "w-52", "h-7"], [1, "w-1/3", "h-10"], ["src", "assets/favicons/cart.svg", "alt", "Cleanline Tasman Cart", 1, "mr-5", "h-8", "right-0", "absolute", "mt-2", "cursor-pointer", "p-1", "rounded-full", "hover:bg-steel-blue"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "img", 4);
        \u0275\u0275listener("click", function NavbarComponent_Template_img_click_4_listener() {
          return ctx.onToggleSidenav();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275element(6, "app-branch-selector");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275element(8, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275element(10, "img", 9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("src", "assets/favicons/burger.svg", \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [CommonModule, BranchSelectorComponent], styles: ["\n\n.navbar-container[_ngcontent-%COMP%] {\n  background-color: var(--default-color);\n}\n.logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/features/components/navbar/navbar.component.ts", lineNumber: 12 });
})();

// src/app/features/components/breadcrumb/component/breadcrumb.component.ts
var _c03 = (a0) => ({ "font-semibold": a0 });
function BreadcrumbComponent_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const crumb_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", crumb_r1.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(crumb_r1.label);
  }
}
function BreadcrumbComponent_li_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const crumb_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(crumb_r1.label);
  }
}
function BreadcrumbComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 3);
    \u0275\u0275template(1, BreadcrumbComponent_li_2_a_1_Template, 2, 2, "a", 4)(2, BreadcrumbComponent_li_2_span_2_Template, 2, 1, "span", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const last_r2 = ctx.last;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c03, last_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", last_r2);
  }
}
var BreadcrumbComponent = class _BreadcrumbComponent {
  constructor(router, activatedRoute) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.breadcrumbs = [];
  }
  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map(() => this.buildBreadcrumb(this.activatedRoute.root))).subscribe((breadcrumbs) => this.breadcrumbs = breadcrumbs);
    this.buildBreadcrumbOnInit();
  }
  buildBreadcrumbOnInit() {
    const breadcrumbs = this.buildBreadcrumb(this.activatedRoute.root);
    this.breadcrumbs = breadcrumbs;
  }
  buildBreadcrumb(route, url = "", breadcrumbs = []) {
    const children = route.children;
    if (!breadcrumbs.length || breadcrumbs[0].label !== "Home") {
      breadcrumbs.unshift({
        label: "Home",
        url: "/home"
      });
    }
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      const routeURL = child.snapshot.url.map((segment) => segment.path).join("/");
      if (routeURL !== "") {
        url += `/${routeURL}`;
      }
      const label = child.snapshot.data["breadcrumb"];
      if (label && label !== "Home") {
        breadcrumbs.push({ label, url });
      }
      return this.buildBreadcrumb(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
  static {
    this.\u0275fac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BreadcrumbComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BreadcrumbComponent, selectors: [["app-breadcrumb"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [["aria-label", "breadcrumb", 1, "pt-12", "pl-10", "flex"], [1, "breadcrumb"], ["class", "breadcrumb-item font-semibold text-base", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item", "font-semibold", "text-base", 3, "ngClass"], ["class", "text-tangerine text-sm", 3, "routerLink", 4, "ngIf"], ["class", "text-tangerine text-sm", 4, "ngIf"], [1, "text-tangerine", "text-sm", 3, "routerLink"], [1, "text-tangerine", "text-sm"]], template: function BreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "ul", 1);
        \u0275\u0275template(2, BreadcrumbComponent_li_2_Template, 3, 5, "li", 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.breadcrumbs);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink], styles: ['\n\n.breadcrumb[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 0;\n  margin-bottom: 1rem;\n  list-style: none;\n  display: flex;\n}\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  font-weight: bold;\n  width: 15px;\n  height: 15px;\n  background-image: url(/assets/favicons/chevron-right.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin: 0 5px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=breadcrumb.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BreadcrumbComponent, { className: "BreadcrumbComponent", filePath: "src/app/features/components/breadcrumb/component/breadcrumb.component.ts", lineNumber: 20 });
})();

// src/app/features/components/main/main.component.ts
var MainComponent = class _MainComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function MainComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MainComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainComponent, selectors: [["app-main"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 0, consts: [[1, "main-container", "overflow-auto", "h-full", "w-full"], [1, "md:hidden", "w-full", "mt-5"]], template: function MainComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-branch-selector");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "app-breadcrumb")(4, "router-outlet");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterModule, RouterOutlet, BreadcrumbComponent, BranchSelectorComponent], styles: ["\n\n.main-container[_ngcontent-%COMP%] {\n  background-image: url(/assets/favicons/ct_background.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=main.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainComponent, { className: "MainComponent", filePath: "src/app/features/components/main/main.component.ts", lineNumber: 13 });
})();

// src/app/core/layout/layout.component.ts
var _c04 = (a0, a1, a2, a3) => ({ "sidenav-container": a0, "w-16": a1, hidden: a2, "fixed z-50 w-64": a3 });
var LayoutComponent = class _LayoutComponent {
  constructor(store) {
    this.store = store;
    this.isOpen$ = this.store.select(selectIsSidenavOpen);
    this.selectedMenu$ = this.store.select(selectSelectedMenu);
    this.isOpen = false;
    this.screenWidth = window.innerWidth;
  }
  // Listen to screen resize
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }
  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }
  static {
    this.\u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LayoutComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], hostBindings: function LayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function LayoutComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 8, consts: [[1, "flex", "h-screen", "bg-green-300"], [1, "duration-300", 3, "ngClass"], [3, "toggleSideBar", "isOpen"], [1, "flex", "flex-col", "w-full", "h-screen"], [3, "toggleSideBar", "sidenavOpen"], [1, "flex-grow", "bg-white", "overflow-y-auto"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-sidenav", 2);
        \u0275\u0275listener("toggleSideBar", function LayoutComponent_Template_app_sidenav_toggleSideBar_2_listener() {
          return ctx.toggleSidenav();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 3)(4, "div")(5, "app-navbar", 4);
        \u0275\u0275listener("toggleSideBar", function LayoutComponent_Template_app_navbar_toggleSideBar_5_listener() {
          return ctx.toggleSidenav();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275element(7, "app-main");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(3, _c04, ctx.isOpen, !ctx.isOpen && ctx.screenWidth >= 1024, ctx.screenWidth < 1024 && !ctx.isOpen, ctx.screenWidth < 1024 && ctx.isOpen));
        \u0275\u0275advance();
        \u0275\u0275property("isOpen", ctx.isOpen);
        \u0275\u0275advance(3);
        \u0275\u0275property("sidenavOpen", ctx.isOpen);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      RouterModule,
      SidenavComponent,
      NavbarComponent,
      MainComponent
    ], styles: ["\n\n.sidenav-container[_ngcontent-%COMP%] {\n  width: 320px !important;\n}\n.ml-26[_ngcontent-%COMP%] {\n  margin-left: 6.4rem;\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/core/layout/layout.component.ts", lineNumber: 27 });
})();

// src/app/shared/components/card-link/card-link.component.ts
var CardLinkComponent = class _CardLinkComponent {
  constructor(router, store) {
    this.router = router;
    this.store = store;
    this.selectedMenu$ = this.store.select(selectSelectedMenu);
    this.cardlink = {
      title: "",
      icon: "",
      route: "",
      parentRoute: ""
    };
  }
  selectMenu(menu) {
    this.store.dispatch(SidenavActions["[Sidenav]SelectMenu"]({
      selectedMenu: menu
    }));
  }
  onClick() {
    if (this.cardlink.route) {
      if (this.cardlink.parentRoute) {
        this.router.navigate([
          `/${this.cardlink.parentRoute}/${this.cardlink.route}`
        ]);
      } else {
        this.router.navigate([`/${this.cardlink.route}`]);
      }
      this.selectMenu(this.cardlink.route);
      this.selectedMenu$.subscribe((x) => {
        console.log("cl ", x);
      });
    } else {
      console.log("No route defined for this link");
    }
  }
  static {
    this.\u0275fac = function CardLinkComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardLinkComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardLinkComponent, selectors: [["app-card-link"]], inputs: { cardlink: "cardlink" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 3, consts: [[1, "flex", "cursor-pointer", 3, "click"], [1, "border", "border-gray-200", "bg-charcoal", "p-5", "rounded-lg", "w-40", "h-48", "text-center", "hover:font-extrabold", "hover:bg-steel-blue"], [1, "inline-flex", "items-center", "justify-center", "mb-1", "mt-3"], [1, "w-10", "h-10", "ml-3", "mr-2", "mt-1", "mb-3", 3, "src", "alt"], [1, "text-base", "text-white", "font-normal", "title-font", "mb-2", "hover:font-medium", 3, "innerHTML"]], template: function CardLinkComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function CardLinkComponent_Template_div_click_0_listener() {
          return ctx.onClick();
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "p", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("alt", ctx.cardlink.title);
        \u0275\u0275property("src", ctx.cardlink.icon, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275property("innerHTML", ctx.cardlink.title, \u0275\u0275sanitizeHtml);
      }
    }, dependencies: [CommonModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardLinkComponent, { className: "CardLinkComponent", filePath: "src/app/shared/components/card-link/card-link.component.ts", lineNumber: 16 });
})();

// src/app/models/card-link.model.ts
var DashboardCardLink = [
  {
    title: "Quick Order",
    icon: "assets/favicons/cart.svg",
    route: path.QUICK_ORDER
  },
  {
    title: "Manage Employee",
    icon: "assets/favicons/user-white.svg",
    route: path.MANAGE_EMPLOYEE
  },
  {
    title: "Manage <br/> Store",
    icon: "assets/favicons/store.svg"
  },
  {
    title: "Browse Product",
    icon: "assets/favicons/cart-find.svg"
  },
  {
    title: "Action Items",
    icon: "assets/favicons/action-item.svg"
  },
  {
    title: "Order History",
    icon: "assets/favicons/order-history.svg"
  }
];
var ManageEmployeeLink = [
  {
    title: "Add/Edit Templates",
    icon: "assets/favicons/template.svg",
    route: path.TEMPLATES,
    parentRoute: "manage-employee"
  },
  {
    title: "Add/Edit Employee Group",
    icon: "assets/favicons/employee-group.svg",
    route: path.EMPLOYEE_GROUP,
    parentRoute: "manage-employee"
  },
  {
    title: "Add/Edit Employee",
    icon: "assets/favicons/employee.svg",
    route: path.EMPLOYEE,
    parentRoute: "manage-employee"
  },
  {
    title: "Add/Edit <br/>Project",
    icon: "assets/favicons/project.svg",
    route: path.PROJECTS,
    parentRoute: "manage-employee"
  },
  {
    title: "Bulk Edit",
    icon: "assets/favicons/bulk-edit.svg",
    route: path.BULK_EDIT,
    parentRoute: "manage-employee"
  },
  {
    title: "Make Transaction Adjustments",
    icon: "assets/favicons/transaction.svg",
    route: path.TRANSANCTION_ADJUSTMENT,
    parentRoute: "manage-employee"
  },
  {
    title: "Quick Order",
    icon: "assets/favicons/cart.svg",
    route: path.QUICK_ORDER
  }
];
var MyAccontLink = [
  {
    title: "Delivery Addresses",
    icon: "assets/favicons/delivery-address.svg",
    route: path.DELIVERY_ADDRESSES,
    parentRoute: "my-account"
  },
  {
    title: "Change Password",
    icon: "assets/favicons/change-password.svg",
    route: path.CHANGE_PASSWORD,
    parentRoute: "my-account"
  },
  {
    title: "Employee Logins",
    icon: "assets/favicons/employee-login.svg",
    route: path.EMPLOYEE_LOGIN,
    parentRoute: "my-account"
  },
  {
    title: "Default Permissions",
    icon: "assets/favicons/default-permission.svg",
    route: path.DEFAULT_PERMISSION,
    parentRoute: "my-account"
  },
  {
    title: "Purchase Orders",
    icon: "assets/favicons/purchase-order.svg",
    route: path.PURCHASE_ORDERS,
    parentRoute: "my-account"
  }
];

// src/app/shared/components/chat-box/chat-box.component.ts
var ChatBoxComponent = class _ChatBoxComponent {
  static {
    this.\u0275fac = function ChatBoxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatBoxComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatBoxComponent, selectors: [["app-chat-box"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[1, "chat-icon-container", "fixed", "bottom-0", "right-0", "mr-20"], ["src", "assets/favicons/chat.svg", "alt", "Cleanline Tasman Chat"]], template: function ChatBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275elementEnd();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatBoxComponent, { className: "ChatBoxComponent", filePath: "src/app/shared/components/chat-box/chat-box.component.ts", lineNumber: 10 });
})();

// src/app/features/pages/home/home.component.ts
function HomeComponent_app_card_link_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-card-link", 7);
  }
  if (rf & 2) {
    const cardlink_r1 = ctx.$implicit;
    \u0275\u0275property("cardlink", cardlink_r1);
  }
}
var HomeComponent = class _HomeComponent {
  constructor(browserStorageService) {
    this.browserStorageService = browserStorageService;
    this.user = "";
    this.cardlinks = DashboardCardLink;
  }
  ngOnInit() {
    const userString = this.browserStorageService.getFromLocalStorage(EStorageKeys.USER);
    if (userString) {
      const userInfo = JSON.parse(userString);
      this.user = userInfo.first_name + " " + userInfo.last_name;
    }
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(BrowserStorageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [[1, "home-container", "p-10"], [1, "welcome", "centered-div", "mt-14", "mb-10"], [1, "font-normal", "text-charcoal", "text-xl"], [1, "text-tangerine", "font-semibold"], [1, "flex", "justify-center"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "gap-4", "mt", "p-10"], [3, "cardlink", 4, "ngFor", "ngForOf"], [3, "cardlink"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
        \u0275\u0275text(3, " Welcome ");
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, ", what would you like to do first today? ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5);
        \u0275\u0275template(9, HomeComponent_app_card_link_9_Template, 1, 1, "app-card-link", 6);
        \u0275\u0275element(10, "app-chat-box");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.user);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.cardlinks);
      }
    }, dependencies: [CardLinkComponent, CommonModule, NgForOf, ChatBoxComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/pages/home/home.component.ts", lineNumber: 19 });
})();

// src/app/features/pages/manage-employess/manage-employess.component.ts
function ManageEmployeesComponent_div_2_app_card_link_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-card-link", 6);
  }
  if (rf & 2) {
    const cardlink_r1 = ctx.$implicit;
    \u0275\u0275property("cardlink", cardlink_r1);
  }
}
function ManageEmployeesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, ManageEmployeesComponent_div_2_app_card_link_1_Template, 1, 1, "app-card-link", 5);
    \u0275\u0275element(2, "app-chat-box");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cardlinks);
  }
}
function ManageEmployeesComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementEnd();
  }
}
var ManageEmployeesComponent = class _ManageEmployeesComponent {
  constructor(router) {
    this.router = router;
    this.cardlinks = ManageEmployeeLink;
    this.isManageEmployeeDashboard = false;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.updateDashboardState(this.router.url);
    this.handleRouteChanges();
  }
  handleRouteChanges() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe((event) => {
      this.updateDashboardState(event.urlAfterRedirects);
    });
  }
  updateDashboardState(url) {
    this.isManageEmployeeDashboard = url === "/manage-employee";
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.\u0275fac = function ManageEmployeesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageEmployeesComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageEmployeesComponent, selectors: [["app-manage-employess"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [["isPage", ""], [1, "home-container"], [1, "flex", "justify-center"], ["class", "grid grid-cols-2 md:grid-cols-3 gap-4 mt p-10", 4, "ngIf", "ngIfElse"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "gap-4", "mt", "p-10"], [3, "cardlink", 4, "ngFor", "ngForOf"], [3, "cardlink"], [1, "w-full", "px-10"]], template: function ManageEmployeesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275template(2, ManageEmployeesComponent_div_2_Template, 3, 1, "div", 3)(3, ManageEmployeesComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const isPage_r3 = \u0275\u0275reference(4);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isManageEmployeeDashboard)("ngIfElse", isPage_r3);
      }
    }, dependencies: [CardLinkComponent, CommonModule, NgForOf, NgIf, RouterModule, RouterOutlet, ChatBoxComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageEmployeesComponent, { className: "ManageEmployeesComponent", filePath: "src/app/features/pages/manage-employess/manage-employess.component.ts", lineNumber: 16 });
})();

// src/app/features/pages/quick-order/quick-order.component.ts
var QuickOrderComponent = class _QuickOrderComponent {
  constructor(router) {
    this.router = router;
  }
  onClick() {
    this.router.navigate(["/home"]);
  }
  static {
    this.\u0275fac = function QuickOrderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuickOrderComponent, selectors: [["app-quick-order"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "home-container", "pt-10", "centered-div"], [1, "text-tangerine"]], template: function QuickOrderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
        \u0275\u0275text(2, "quick-order works!");
        \u0275\u0275elementEnd()();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuickOrderComponent, { className: "QuickOrderComponent", filePath: "src/app/features/pages/quick-order/quick-order.component.ts", lineNumber: 11 });
})();

// src/app/features/pages/manage-employess/components/templates/templates.component.ts
var TemplatesComponent = class _TemplatesComponent {
  static {
    this.\u0275fac = function TemplatesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplatesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplatesComponent, selectors: [["app-templates"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[1, "text-tangerine"]], template: function TemplatesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p", 0);
        \u0275\u0275text(1, "templates works!");
        \u0275\u0275elementEnd();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplatesComponent, { className: "TemplatesComponent", filePath: "src/app/features/pages/manage-employess/components/templates/templates.component.ts", lineNumber: 10 });
})();

// src/app/shared/components/switch/switch.component.ts
var SwitchComponent = class _SwitchComponent {
  static {
    this.\u0275fac = function SwitchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SwitchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SwitchComponent, selectors: [["app-switch"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 0, consts: [[1, ""], [1, "inline-flex", "items-center", "mb-5", "cursor-pointer"], ["type", "checkbox", "value", "", "checked", "", 1, "sr-only", "peer"], [1, "relative", "w-28", "h-6", "bg-gray-200", "peer-focus:outline-none", "rounded-full", "peer", "dark:bg-gray-700", "peer-checked:after:translate-x-[82px]", "rtl:peer-checked:after:-translate-x-full", "peer-checked:after:border-white", "after:content-['']", "after:absolute", "after:top-[4px]", "after:left-[5px]", "after:start-[7px]", "after:bg-white", "after:border-gray-300", "after:border", "after:rounded-full", "after:h-4", "after:w-4", "after:transition-all", "peer-checked:bg-neon-green"], [1, "text-white", "text-sm", "pt-0.5", "pl-7"]], template: function SwitchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "label", 1);
        \u0275\u0275element(2, "input", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "p", 4);
        \u0275\u0275text(5, "Active");
        \u0275\u0275elementEnd()()()();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SwitchComponent, { className: "SwitchComponent", filePath: "src/app/shared/components/switch/switch.component.ts", lineNumber: 10 });
})();

// src/app/shared/components/search-input/search-input.component.ts
var SearchInputComponent = class _SearchInputComponent {
  constructor() {
    this.placeholder = "";
  }
  static {
    this.\u0275fac = function SearchInputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchInputComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchInputComponent, selectors: [["app-search-input"]], inputs: { placeholder: "placeholder" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "w-full", "pt-0"], [1, "relative"], ["type", "text", 1, "w-full", "pl-3", "pr-10", "py-2", "bg-white", "placeholder:text-slate-600", "text-slate-600", "text-sm", "text-center", "border", "border-charcoal", "rounded-md", "transition", "duration-300", "ease", "focus:outline-none", "focus:border-slate-400", "hover:border-slate-300", "shadow-sm", "focus:shadow", 3, "placeholder"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "absolute", "w-7", "h-7", "top-2.5", "right-2.5", "text-slate-600"], ["fill-rule", "evenodd", "d", "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z", "clip-rule", "evenodd"]], template: function SearchInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "input", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "path", 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", ctx.placeholder);
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchInputComponent, { className: "SearchInputComponent", filePath: "src/app/shared/components/search-input/search-input.component.ts", lineNumber: 10 });
})();

// src/app/features/pages/manage-employess/components/employee-group/employee-group.component.ts
var EmployeeGroupComponent = class _EmployeeGroupComponent {
  constructor() {
    this.checked = false;
  }
  static {
    this.\u0275fac = function EmployeeGroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmployeeGroupComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeGroupComponent, selectors: [["app-employee-group"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[1, "pt-2", "m-0", "flex", "w-full"], [1, "mt-1.5"], [1, ""], [1, "w-full", "mx-10"], ["placeholder", "Search Employee Group"], ["type", "button", 1, "text-white", "bg-tangerine", "hover:bg-orange-700", "focus:ring-4", "focus:ring-orange-300", "font-light", "rounded-lg", "text-sm", "px-5", "py-2.5", "me-2", "mb-2focus:outline-none"]], template: function EmployeeGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-switch", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "app-search-input", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "button", 5);
        \u0275\u0275text(7, " Import/Export ");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [CommonModule, SwitchComponent, SearchInputComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeGroupComponent, { className: "EmployeeGroupComponent", filePath: "src/app/features/pages/manage-employess/components/employee-group/employee-group.component.ts", lineNumber: 13 });
})();

// src/app/features/pages/manage-employess/components/employee/employee.component.ts
var EmployeeComponent = class _EmployeeComponent {
  static {
    this.\u0275fac = function EmployeeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmployeeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeComponent, selectors: [["app-employee"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[1, "text-tangerine"]], template: function EmployeeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p", 0);
        \u0275\u0275text(1, "employee works!");
        \u0275\u0275elementEnd();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeComponent, { className: "EmployeeComponent", filePath: "src/app/features/pages/manage-employess/components/employee/employee.component.ts", lineNumber: 10 });
})();

// src/app/features/pages/manage-employess/components/projects/projects.component.ts
var ProjectsComponent = class _ProjectsComponent {
  static {
    this.\u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[1, "text-tangerine"]], template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p", 0);
        \u0275\u0275text(1, "projects works!");
        \u0275\u0275elementEnd();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src/app/features/pages/manage-employess/components/projects/projects.component.ts", lineNumber: 10 });
})();

// src/app/features/pages/manage-employess/components/bulk-edit/bulk-edit.component.ts
var BulkEditComponent = class _BulkEditComponent {
  static {
    this.\u0275fac = function BulkEditComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkEditComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BulkEditComponent, selectors: [["app-bulk-edit"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[1, "text-tangerine"]], template: function BulkEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p", 0);
        \u0275\u0275text(1, "bulk-edit works!");
        \u0275\u0275elementEnd();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BulkEditComponent, { className: "BulkEditComponent", filePath: "src/app/features/pages/manage-employess/components/bulk-edit/bulk-edit.component.ts", lineNumber: 10 });
})();

// src/app/features/pages/manage-employess/components/transaction-adjustment/transaction-adjustment.component.ts
var TransactionAdjustmentComponent = class _TransactionAdjustmentComponent {
  static {
    this.\u0275fac = function TransactionAdjustmentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TransactionAdjustmentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionAdjustmentComponent, selectors: [["app-transaction-adjustment"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[1, "text-tangerine"]], template: function TransactionAdjustmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p", 0);
        \u0275\u0275text(1, "transaction-adjustment works!");
        \u0275\u0275elementEnd();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionAdjustmentComponent, { className: "TransactionAdjustmentComponent", filePath: "src/app/features/pages/manage-employess/components/transaction-adjustment/transaction-adjustment.component.ts", lineNumber: 10 });
})();

// src/app/features/pages/my-account/my-account.component.ts
function MyAccountComponent_div_2_app_card_link_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-card-link", 6);
  }
  if (rf & 2) {
    const cardlink_r1 = ctx.$implicit;
    \u0275\u0275property("cardlink", cardlink_r1);
  }
}
function MyAccountComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, MyAccountComponent_div_2_app_card_link_1_Template, 1, 1, "app-card-link", 5);
    \u0275\u0275element(2, "app-chat-box");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cardlinks);
  }
}
function MyAccountComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementEnd();
  }
}
var MyAccountComponent = class _MyAccountComponent {
  constructor(router) {
    this.router = router;
    this.cardlinks = MyAccontLink;
    this.isMyAccountDashboard = false;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.updateDashboardState(this.router.url);
    this.handleRouteChanges();
  }
  handleRouteChanges() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe((event) => {
      this.updateDashboardState(event.urlAfterRedirects);
    });
  }
  updateDashboardState(url) {
    this.isMyAccountDashboard = url === "/my-account";
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.\u0275fac = function MyAccountComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAccountComponent, selectors: [["app-my-account"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [["isPage", ""], [1, "home-container"], [1, "flex", "justify-center"], ["class", "grid grid-cols-2 md:grid-cols-3 gap-4 mt p-10", 4, "ngIf", "ngIfElse"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "gap-4", "mt", "p-10"], [3, "cardlink", 4, "ngFor", "ngForOf"], [3, "cardlink"], [1, "w-full", "px-10"]], template: function MyAccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275template(2, MyAccountComponent_div_2_Template, 3, 1, "div", 3)(3, MyAccountComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const isPage_r3 = \u0275\u0275reference(4);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isMyAccountDashboard)("ngIfElse", isPage_r3);
      }
    }, dependencies: [CardLinkComponent, CommonModule, NgForOf, NgIf, RouterModule, RouterOutlet, ChatBoxComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAccountComponent, { className: "MyAccountComponent", filePath: "src/app/features/pages/my-account/my-account.component.ts", lineNumber: 16 });
})();

// src/app/features/pages/my-account/delivery-addresses/delivery-addresses.component.ts
var DeliveryAddressesComponent = class _DeliveryAddressesComponent {
  static {
    this.\u0275fac = function DeliveryAddressesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeliveryAddressesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeliveryAddressesComponent, selectors: [["app-delivery-addresses"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[1, "text-tangerine"]], template: function DeliveryAddressesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p", 0);
        \u0275\u0275text(1, "delivery-addresses works!");
        \u0275\u0275elementEnd();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeliveryAddressesComponent, { className: "DeliveryAddressesComponent", filePath: "src/app/features/pages/my-account/delivery-addresses/delivery-addresses.component.ts", lineNumber: 10 });
})();

// src/app/helpers/password-validators.ts
var PasswordValidator = class {
  static matchPasswords() {
    return (control) => {
      const password = control.get("password")?.value;
      const confirmPassword = control.get("confirm_password")?.value;
      return password && confirmPassword && password !== confirmPassword ? { passwordMismatch: true } : null;
    };
  }
};

// src/app/features/pages/my-account/change-password/change-password.component.ts
function ChangePasswordComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p");
    \u0275\u0275text(2, "Password must be at least 8 characters long");
    \u0275\u0275elementEnd()();
  }
}
function ChangePasswordComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p");
    \u0275\u0275text(2, "Passwords do not match");
    \u0275\u0275elementEnd()();
  }
}
function ChangePasswordComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "app-modal", 3);
    \u0275\u0275listener("closeModal", function ChangePasswordComponent_div_0_Template_app_modal_closeModal_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    })("confirmAction", function ChangePasswordComponent_div_0_Template_app_modal_confirmAction_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdatePassword());
    });
    \u0275\u0275elementStart(2, "div", 4)(3, "div", 5);
    \u0275\u0275element(4, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 7);
    \u0275\u0275listener("submit", function ChangePasswordComponent_div_0_Template_form_submit_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdatePassword());
    });
    \u0275\u0275elementStart(6, "div", 8)(7, "p", 9);
    \u0275\u0275text(8, "Current Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275element(10, "app-input-field", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8)(12, "p", 9);
    \u0275\u0275text(13, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275element(15, "app-input-field", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275element(17, "app-input-field", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ChangePasswordComponent_div_0_div_18_Template, 3, 0, "div", 1)(19, ChangePasswordComponent_div_0_div_19_Template, 3, 0, "div", 1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_7_0;
    let tmp_11_0;
    let tmp_14_0;
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.formGroup);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "current_password")("isInvalid", ((tmp_3_0 = ctx_r1.formGroup.get("current_password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.formGroup.get("current_password")) == null ? null : tmp_3_0.touched))("isPassword", true)("errorMessage", ctx_r1.errorMessage);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "password")("isInvalid", ((tmp_7_0 = ctx_r1.formGroup.get("password")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.formGroup.get("password")) == null ? null : tmp_7_0.touched))("isPassword", true)("errorMessage", ctx_r1.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", "confirm_password")("isInvalid", ((tmp_11_0 = ctx_r1.formGroup.get("confirm_password")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.formGroup.get("confirm_password")) == null ? null : tmp_11_0.touched))("isPassword", true)("errorMessage", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_14_0 = ctx_r1.formGroup.get("password")) == null ? null : tmp_14_0.hasError("passwordTooShort")) && ((tmp_14_0 = ctx_r1.formGroup.get("password")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formGroup.hasError("passwordMismatch") && ((tmp_15_0 = ctx_r1.formGroup.get("confirm_password")) == null ? null : tmp_15_0.touched));
  }
}
function ChangePasswordComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-modal", 14);
    \u0275\u0275listener("confirmAction", function ChangePasswordComponent_div_1_Template_app_modal_confirmAction_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdatePassword());
    });
    \u0275\u0275elementStart(2, "div", 15)(3, "div", 16);
    \u0275\u0275element(4, "img", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6, "Success!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 19);
    \u0275\u0275text(8, " Your password is updated. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 20);
    \u0275\u0275listener("click", function ChangePasswordComponent_div_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(10, " Done ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275classMap("w-[450px]");
    \u0275\u0275property("withFooterButton", false);
  }
}
var ChangePasswordComponent = class _ChangePasswordComponent {
  constructor(router, formBuilder) {
    this.router = router;
    this.formBuilder = formBuilder;
    this.showModal = true;
    this.isSuccess = false;
    this.errorMessage = "";
    this.formGroup = this.formBuilder.group({
      current_password: ["", Validators.required],
      password: ["", Validators.required, Validators.minLength(8)],
      confirm_password: [
        "",
        Validators.required,
        PasswordValidator.matchPasswords
      ]
    });
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }
  onCancel() {
    this.router.navigate(["/my-account"]);
  }
  onUpdatePassword() {
    if (this.formGroup.valid) {
      this.isSuccess = true;
      this.errorMessage = "";
    } else {
      this.formGroup.markAllAsTouched();
      this.isSuccess = false;
    }
    console.log("errors ", this.errorMessage);
    this.errorMessage = this.getFormErrors();
  }
  getFormErrors() {
    return "";
  }
  static {
    this.\u0275fac = function ChangePasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChangePasswordComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordComponent, selectors: [["app-change-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "px-10", 4, "ngIf"], [4, "ngIf"], [1, "px-10"], ["title", "Change Password", "cancelText", "Cancel", "confirmText", "Update Password", 3, "closeModal", "confirmAction"], ["id", "body", 1, "relative", "p-10", "flex-auto"], [1, "mb-10", "grid", "justify-center"], ["src", "assets/favicons/change-password-org.svg", "alt", "", 1, "w-30", "h-30"], [1, "signup-section__form--form-element", 3, "submit", "formGroup"], [1, "mb-5", "z-50"], [1, "text-black", "text-sm", "font-medium", "mb-1"], [1, "mb-2"], ["type", "password", "placeholder", "Enter current password", 1, "flex-1", 3, "formControlName", "isInvalid", "isPassword", "errorMessage"], ["type", "password", "placeholder", "Enter new password", 1, "flex-1", 3, "formControlName", "isInvalid", "isPassword", "errorMessage"], ["type", "password", "placeholder", "Confirm new password", 1, "flex-1", 3, "formControlName", "isInvalid", "isPassword", "errorMessage"], ["title", "Change Password", 3, "confirmAction", "withFooterButton"], [1, "text-center"], [1, "my-5", "grid", "justify-center"], ["src", "assets/favicons/success.svg", "alt", "", 1, "w-30", "h-30"], [1, "text-neon-green", "text-2xl", "font-semibold"], [1, "text-charcoal", "text-sm", "font-normal", "mt-2"], ["type", "button", 1, "w-40", "mt-12", "mb-5", "bg-charcoal", "text-white", "font-light", "text-xs", "px-6", "py-2", "rounded-xl", "border-charcoal", "border", "shadow", "hover:shadow-lg", "hover:bg-slate-700", "outline-none", "focus:outline-none", "ease-linear", "transition-all", "duration-150", 3, "click"]], template: function ChangePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ChangePasswordComponent_div_0_Template, 20, 15, "div", 0)(1, ChangePasswordComponent_div_1_Template, 11, 3, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.isSuccess);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSuccess);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      InputFieldComponent,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      ModalComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordComponent, { className: "ChangePasswordComponent", filePath: "src/app/features/pages/my-account/change-password/change-password.component.ts", lineNumber: 26 });
})();

// src/app/features/pages/my-account/employee-logins/employee-logins.component.ts
var EmployeeLoginsComponent = class _EmployeeLoginsComponent {
  static {
    this.\u0275fac = function EmployeeLoginsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmployeeLoginsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeLoginsComponent, selectors: [["app-employee-logins"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[1, "text-tangerine"]], template: function EmployeeLoginsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p", 0);
        \u0275\u0275text(1, "employee-logins works!");
        \u0275\u0275elementEnd();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeLoginsComponent, { className: "EmployeeLoginsComponent", filePath: "src/app/features/pages/my-account/employee-logins/employee-logins.component.ts", lineNumber: 10 });
})();

// src/app/features/pages/my-account/default-permissions/default-permissions.component.ts
var DefaultPermissionsComponent = class _DefaultPermissionsComponent {
  static {
    this.\u0275fac = function DefaultPermissionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultPermissionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DefaultPermissionsComponent, selectors: [["app-default-permissions"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[1, "text-tangerine"]], template: function DefaultPermissionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p", 0);
        \u0275\u0275text(1, "default-permissions works!");
        \u0275\u0275elementEnd();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DefaultPermissionsComponent, { className: "DefaultPermissionsComponent", filePath: "src/app/features/pages/my-account/default-permissions/default-permissions.component.ts", lineNumber: 10 });
})();

// src/app/features/pages/my-account/purchase-orders/purchase-orders.component.ts
var PurchaseOrdersComponent = class _PurchaseOrdersComponent {
  static {
    this.\u0275fac = function PurchaseOrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PurchaseOrdersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseOrdersComponent, selectors: [["app-purchase-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[1, "text-tangerine"]], template: function PurchaseOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p", 0);
        \u0275\u0275text(1, "purchase-orders works!");
        \u0275\u0275elementEnd();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseOrdersComponent, { className: "PurchaseOrdersComponent", filePath: "src/app/features/pages/my-account/purchase-orders/purchase-orders.component.ts", lineNumber: 10 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadChildren: () => import("./chunk-SL4HQH5N.js").then((m) => m.routes)
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: path.HOME,
        component: HomeComponent,
        data: { breadcrumb: "Home" }
      },
      {
        path: path.QUICK_ORDER,
        component: QuickOrderComponent,
        data: { breadcrumb: "Quick Order" }
      },
      {
        path: path.MANAGE_EMPLOYEE,
        component: ManageEmployeesComponent,
        data: { breadcrumb: "Manage Employee" },
        children: [
          {
            path: path.TEMPLATES,
            component: TemplatesComponent,
            data: { breadcrumb: "Add/Edit Templates" }
          },
          {
            path: path.EMPLOYEE_GROUP,
            component: EmployeeGroupComponent,
            data: { breadcrumb: "Add/Edit Employee Group" }
          },
          {
            path: path.EMPLOYEE,
            component: EmployeeComponent,
            data: { breadcrumb: "Add/Edit Employee" }
          },
          {
            path: path.PROJECTS,
            component: ProjectsComponent,
            data: { breadcrumb: "Add/Edit Project" }
          },
          {
            path: path.BULK_EDIT,
            component: BulkEditComponent,
            data: { breadcrumb: "Bulk Edit" }
          },
          {
            path: path.TRANSANCTION_ADJUSTMENT,
            component: TransactionAdjustmentComponent,
            data: { breadcrumb: "Make Transaction Adjustments" }
          }
        ]
      },
      {
        path: path.MY_ACCOUNT,
        component: MyAccountComponent,
        data: { breadcrumb: "My Account" },
        children: [
          {
            path: path.DELIVERY_ADDRESSES,
            component: DeliveryAddressesComponent,
            data: { breadcrumb: "Delivery Addresses" }
          },
          {
            path: path.CHANGE_PASSWORD,
            component: ChangePasswordComponent,
            data: { breadcrumb: "Change Password" }
          },
          {
            path: path.EMPLOYEE_LOGIN,
            component: EmployeeLoginsComponent,
            data: { breadcrumb: "Employee Logins" }
          },
          {
            path: path.DEFAULT_PERMISSION,
            component: DefaultPermissionsComponent,
            data: { breadcrumb: "Default Permissions" }
          },
          {
            path: path.PURCHASE_ORDERS,
            component: PurchaseOrdersComponent,
            data: { breadcrumb: "Purchase Orders" }
          }
        ]
      },
      {
        path: "**",
        redirectTo: path.HOME
        // Redirect to home or a 404 page
      }
    ]
  }
];

// src/app/core/auth/interceptors/auth-interceptor.service.ts
var AuthInterceptor = class _AuthInterceptor {
  constructor(browserStorageService, router) {
    this.browserStorageService = browserStorageService;
    this.router = router;
  }
  intercept(req, next) {
    const token = this.browserStorageService.getFromLocalStorage(EStorageKeys.TOKEN);
    const clonedRequest = token ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }) : req;
    return next.handle(clonedRequest).pipe(catchError((error) => this.handleError(error)));
  }
  handleError(error) {
    console.error("HTTP Error:", error);
    if (error.status === 401) {
      this.router.navigate(["/login"]);
    }
    return throwError(() => new Error("An error occurred. Please try again."));
  }
  static {
    this.\u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthInterceptor)(\u0275\u0275inject(BrowserStorageService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac, providedIn: "root" });
  }
};

// node_modules/@ngrx/store-devtools/fesm2022/ngrx-store-devtools.mjs
var PERFORM_ACTION = "PERFORM_ACTION";
var REFRESH = "REFRESH";
var RESET = "RESET";
var ROLLBACK = "ROLLBACK";
var COMMIT = "COMMIT";
var SWEEP = "SWEEP";
var TOGGLE_ACTION = "TOGGLE_ACTION";
var SET_ACTIONS_ACTIVE = "SET_ACTIONS_ACTIVE";
var JUMP_TO_STATE = "JUMP_TO_STATE";
var JUMP_TO_ACTION = "JUMP_TO_ACTION";
var IMPORT_STATE = "IMPORT_STATE";
var LOCK_CHANGES = "LOCK_CHANGES";
var PAUSE_RECORDING = "PAUSE_RECORDING";
var PerformAction = class {
  constructor(action, timestamp) {
    this.action = action;
    this.timestamp = timestamp;
    this.type = PERFORM_ACTION;
    if (typeof action.type === "undefined") {
      throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
    }
  }
};
var Refresh = class {
  constructor() {
    this.type = REFRESH;
  }
};
var Reset = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = RESET;
  }
};
var Rollback = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = ROLLBACK;
  }
};
var Commit = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = COMMIT;
  }
};
var Sweep = class {
  constructor() {
    this.type = SWEEP;
  }
};
var ToggleAction = class {
  constructor(id) {
    this.id = id;
    this.type = TOGGLE_ACTION;
  }
};
var JumpToState = class {
  constructor(index) {
    this.index = index;
    this.type = JUMP_TO_STATE;
  }
};
var JumpToAction = class {
  constructor(actionId) {
    this.actionId = actionId;
    this.type = JUMP_TO_ACTION;
  }
};
var ImportState = class {
  constructor(nextLiftedState) {
    this.nextLiftedState = nextLiftedState;
    this.type = IMPORT_STATE;
  }
};
var LockChanges = class {
  constructor(status) {
    this.status = status;
    this.type = LOCK_CHANGES;
  }
};
var PauseRecording = class {
  constructor(status) {
    this.status = status;
    this.type = PAUSE_RECORDING;
  }
};
var StoreDevtoolsConfig = class {
  constructor() {
    this.maxAge = false;
  }
};
var STORE_DEVTOOLS_CONFIG = new InjectionToken("@ngrx/store-devtools Options");
var INITIAL_OPTIONS = new InjectionToken("@ngrx/store-devtools Initial Config");
function noMonitor() {
  return null;
}
var DEFAULT_NAME = "NgRx Store DevTools";
function createConfig(optionsInput) {
  const DEFAULT_OPTIONS = {
    maxAge: false,
    monitor: noMonitor,
    actionSanitizer: void 0,
    stateSanitizer: void 0,
    name: DEFAULT_NAME,
    serialize: false,
    logOnly: false,
    autoPause: false,
    trace: false,
    traceLimit: 75,
    // Add all features explicitly. This prevent buggy behavior for
    // options like "lock" which might otherwise not show up.
    features: {
      pause: true,
      // Start/pause recording of dispatched actions
      lock: true,
      // Lock/unlock dispatching actions and side effects
      persist: true,
      // Persist states on page reloading
      export: true,
      // Export history of actions in a file
      import: "custom",
      // Import history of actions from a file
      jump: true,
      // Jump back and forth (time travelling)
      skip: true,
      // Skip (cancel) actions
      reorder: true,
      // Drag and drop actions in the history list
      dispatch: true,
      // Dispatch custom actions or action creators
      test: true
      // Generate tests for the selected actions
    },
    connectInZone: false
  };
  const options = typeof optionsInput === "function" ? optionsInput() : optionsInput;
  const logOnly = options.logOnly ? {
    pause: true,
    export: true,
    test: true
  } : false;
  const features = options.features || logOnly || DEFAULT_OPTIONS.features;
  if (features.import === true) {
    features.import = "custom";
  }
  const config = Object.assign({}, DEFAULT_OPTIONS, {
    features
  }, options);
  if (config.maxAge && config.maxAge < 2) {
    throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${config.maxAge}`);
  }
  return config;
}
function difference(first, second) {
  return first.filter((item) => second.indexOf(item) < 0);
}
function unliftState(liftedState) {
  const {
    computedStates,
    currentStateIndex
  } = liftedState;
  if (currentStateIndex >= computedStates.length) {
    const {
      state: state2
    } = computedStates[computedStates.length - 1];
    return state2;
  }
  const {
    state
  } = computedStates[currentStateIndex];
  return state;
}
function liftAction(action) {
  return new PerformAction(action, +Date.now());
}
function sanitizeActions(actionSanitizer, actions) {
  return Object.keys(actions).reduce((sanitizedActions, actionIdx) => {
    const idx = Number(actionIdx);
    sanitizedActions[idx] = sanitizeAction(actionSanitizer, actions[idx], idx);
    return sanitizedActions;
  }, {});
}
function sanitizeAction(actionSanitizer, action, actionIdx) {
  return __spreadProps(__spreadValues({}, action), {
    action: actionSanitizer(action.action, actionIdx)
  });
}
function sanitizeStates(stateSanitizer, states) {
  return states.map((computedState, idx) => ({
    state: sanitizeState(stateSanitizer, computedState.state, idx),
    error: computedState.error
  }));
}
function sanitizeState(stateSanitizer, state, stateIdx) {
  return stateSanitizer(state, stateIdx);
}
function shouldFilterActions(config) {
  return config.predicate || config.actionsSafelist || config.actionsBlocklist;
}
function filterLiftedState(liftedState, predicate, safelist, blocklist) {
  const filteredStagedActionIds = [];
  const filteredActionsById = {};
  const filteredComputedStates = [];
  liftedState.stagedActionIds.forEach((id, idx) => {
    const liftedAction = liftedState.actionsById[id];
    if (!liftedAction) return;
    if (idx && isActionFiltered(liftedState.computedStates[idx], liftedAction, predicate, safelist, blocklist)) {
      return;
    }
    filteredActionsById[id] = liftedAction;
    filteredStagedActionIds.push(id);
    filteredComputedStates.push(liftedState.computedStates[idx]);
  });
  return __spreadProps(__spreadValues({}, liftedState), {
    stagedActionIds: filteredStagedActionIds,
    actionsById: filteredActionsById,
    computedStates: filteredComputedStates
  });
}
function isActionFiltered(state, action, predicate, safelist, blockedlist) {
  const predicateMatch = predicate && !predicate(state, action.action);
  const safelistMatch = safelist && !action.action.type.match(safelist.map((s) => escapeRegExp(s)).join("|"));
  const blocklistMatch = blockedlist && action.action.type.match(blockedlist.map((s) => escapeRegExp(s)).join("|"));
  return predicateMatch || safelistMatch || blocklistMatch;
}
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function injectZoneConfig(connectInZone) {
  const ngZone = connectInZone ? inject(NgZone) : null;
  return {
    ngZone,
    connectInZone
  };
}
var DevtoolsDispatcher = class _DevtoolsDispatcher extends ActionsSubject {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DevtoolsDispatcher_BaseFactory;
      return function DevtoolsDispatcher_Factory(__ngFactoryType__) {
        return (\u0275DevtoolsDispatcher_BaseFactory || (\u0275DevtoolsDispatcher_BaseFactory = \u0275\u0275getInheritedFactory(_DevtoolsDispatcher)))(__ngFactoryType__ || _DevtoolsDispatcher);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DevtoolsDispatcher,
      factory: _DevtoolsDispatcher.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsDispatcher, [{
    type: Injectable
  }], null, null);
})();
var ExtensionActionTypes = {
  START: "START",
  DISPATCH: "DISPATCH",
  STOP: "STOP",
  ACTION: "ACTION"
};
var REDUX_DEVTOOLS_EXTENSION = new InjectionToken("@ngrx/store-devtools Redux Devtools Extension");
var DevtoolsExtension = class _DevtoolsExtension {
  constructor(devtoolsExtension, config, dispatcher) {
    this.config = config;
    this.dispatcher = dispatcher;
    this.zoneConfig = injectZoneConfig(this.config.connectInZone);
    this.devtoolsExtension = devtoolsExtension;
    this.createActionStreams();
  }
  notify(action, state) {
    if (!this.devtoolsExtension) {
      return;
    }
    if (action.type === PERFORM_ACTION) {
      if (state.isLocked || state.isPaused) {
        return;
      }
      const currentState = unliftState(state);
      if (shouldFilterActions(this.config) && isActionFiltered(currentState, action, this.config.predicate, this.config.actionsSafelist, this.config.actionsBlocklist)) {
        return;
      }
      const sanitizedState = this.config.stateSanitizer ? sanitizeState(this.config.stateSanitizer, currentState, state.currentStateIndex) : currentState;
      const sanitizedAction = this.config.actionSanitizer ? sanitizeAction(this.config.actionSanitizer, action, state.nextActionId) : action;
      this.sendToReduxDevtools(() => this.extensionConnection.send(sanitizedAction, sanitizedState));
    } else {
      const sanitizedLiftedState = __spreadProps(__spreadValues({}, state), {
        stagedActionIds: state.stagedActionIds,
        actionsById: this.config.actionSanitizer ? sanitizeActions(this.config.actionSanitizer, state.actionsById) : state.actionsById,
        computedStates: this.config.stateSanitizer ? sanitizeStates(this.config.stateSanitizer, state.computedStates) : state.computedStates
      });
      this.sendToReduxDevtools(() => this.devtoolsExtension.send(null, sanitizedLiftedState, this.getExtensionConfig(this.config)));
    }
  }
  createChangesObservable() {
    if (!this.devtoolsExtension) {
      return EMPTY;
    }
    return new Observable((subscriber) => {
      const connection = this.zoneConfig.connectInZone ? (
        // To reduce change detection cycles, we need to run the `connect` method
        // outside of the Angular zone. The `connect` method adds a `message`
        // event listener to communicate with an extension using `window.postMessage`
        // and handle message events.
        this.zoneConfig.ngZone.runOutsideAngular(() => this.devtoolsExtension.connect(this.getExtensionConfig(this.config)))
      ) : this.devtoolsExtension.connect(this.getExtensionConfig(this.config));
      this.extensionConnection = connection;
      connection.init();
      connection.subscribe((change) => subscriber.next(change));
      return connection.unsubscribe;
    });
  }
  createActionStreams() {
    const changes$ = this.createChangesObservable().pipe(share());
    const start$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.START));
    const stop$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.STOP));
    const liftedActions$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.DISPATCH), map((change) => this.unwrapAction(change.payload)), concatMap((action) => {
      if (action.type === IMPORT_STATE) {
        return this.dispatcher.pipe(filter((action2) => action2.type === UPDATE), timeout(1e3), debounceTime(1e3), map(() => action), catchError(() => of(action)), take(1));
      } else {
        return of(action);
      }
    }));
    const actions$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.ACTION), map((change) => this.unwrapAction(change.payload)));
    const actionsUntilStop$ = actions$.pipe(takeUntil(stop$));
    const liftedUntilStop$ = liftedActions$.pipe(takeUntil(stop$));
    this.start$ = start$.pipe(takeUntil(stop$));
    this.actions$ = this.start$.pipe(switchMap(() => actionsUntilStop$));
    this.liftedActions$ = this.start$.pipe(switchMap(() => liftedUntilStop$));
  }
  unwrapAction(action) {
    return typeof action === "string" ? (0, eval)(`(${action})`) : action;
  }
  getExtensionConfig(config) {
    const extensionOptions = {
      name: config.name,
      features: config.features,
      serialize: config.serialize,
      autoPause: config.autoPause ?? false,
      trace: config.trace ?? false,
      traceLimit: config.traceLimit ?? 75
      // The action/state sanitizers are not added to the config
      // because sanitation is done in this class already.
      // It is done before sending it to the devtools extension for consistency:
      // - If we call extensionConnection.send(...),
      //   the extension would call the sanitizers.
      // - If we call devtoolsExtension.send(...) (aka full state update),
      //   the extension would NOT call the sanitizers, so we have to do it ourselves.
    };
    if (config.maxAge !== false) {
      extensionOptions.maxAge = config.maxAge;
    }
    return extensionOptions;
  }
  sendToReduxDevtools(send) {
    try {
      send();
    } catch (err) {
      console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools", err);
    }
  }
  static {
    this.\u0275fac = function DevtoolsExtension_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DevtoolsExtension)(\u0275\u0275inject(REDUX_DEVTOOLS_EXTENSION), \u0275\u0275inject(STORE_DEVTOOLS_CONFIG), \u0275\u0275inject(DevtoolsDispatcher));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DevtoolsExtension,
      factory: _DevtoolsExtension.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsExtension, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [REDUX_DEVTOOLS_EXTENSION]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }, {
    type: DevtoolsDispatcher
  }], null);
})();
var INIT_ACTION = {
  type: INIT
};
var RECOMPUTE = "@ngrx/store-devtools/recompute";
var RECOMPUTE_ACTION = {
  type: RECOMPUTE
};
function computeNextEntry(reducer, action, state, error, errorHandler) {
  if (error) {
    return {
      state,
      error: "Interrupted by an error up the chain"
    };
  }
  let nextState = state;
  let nextError;
  try {
    nextState = reducer(state, action);
  } catch (err) {
    nextError = err.toString();
    errorHandler.handleError(err);
  }
  return {
    state: nextState,
    error: nextError
  };
}
function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused) {
  if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
    return computedStates;
  }
  const nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
  const lastIncludedActionId = stagedActionIds.length - (isPaused ? 1 : 0);
  for (let i = minInvalidatedStateIndex; i < lastIncludedActionId; i++) {
    const actionId = stagedActionIds[i];
    const action = actionsById[actionId].action;
    const previousEntry = nextComputedStates[i - 1];
    const previousState = previousEntry ? previousEntry.state : committedState;
    const previousError = previousEntry ? previousEntry.error : void 0;
    const shouldSkip = skippedActionIds.indexOf(actionId) > -1;
    const entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError, errorHandler);
    nextComputedStates.push(entry);
  }
  if (isPaused) {
    nextComputedStates.push(computedStates[computedStates.length - 1]);
  }
  return nextComputedStates;
}
function liftInitialState(initialCommittedState, monitorReducer) {
  return {
    monitorState: monitorReducer(void 0, {}),
    nextActionId: 1,
    actionsById: {
      0: liftAction(INIT_ACTION)
    },
    stagedActionIds: [0],
    skippedActionIds: [],
    committedState: initialCommittedState,
    currentStateIndex: 0,
    computedStates: [],
    isLocked: false,
    isPaused: false
  };
}
function liftReducerWith(initialCommittedState, initialLiftedState, errorHandler, monitorReducer, options = {}) {
  return (reducer) => (liftedState, liftedAction) => {
    let {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    } = liftedState || initialLiftedState;
    if (!liftedState) {
      actionsById = Object.create(actionsById);
    }
    function commitExcessActions(n) {
      let excess = n;
      let idsToDelete = stagedActionIds.slice(1, excess + 1);
      for (let i = 0; i < idsToDelete.length; i++) {
        if (computedStates[i + 1].error) {
          excess = i;
          idsToDelete = stagedActionIds.slice(1, excess + 1);
          break;
        } else {
          delete actionsById[idsToDelete[i]];
        }
      }
      skippedActionIds = skippedActionIds.filter((id) => idsToDelete.indexOf(id) === -1);
      stagedActionIds = [0, ...stagedActionIds.slice(excess + 1)];
      committedState = computedStates[excess].state;
      computedStates = computedStates.slice(excess);
      currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
    }
    function commitChanges() {
      actionsById = {
        0: liftAction(INIT_ACTION)
      };
      nextActionId = 1;
      stagedActionIds = [0];
      skippedActionIds = [];
      committedState = computedStates[currentStateIndex].state;
      currentStateIndex = 0;
      computedStates = [];
    }
    let minInvalidatedStateIndex = 0;
    switch (liftedAction.type) {
      case LOCK_CHANGES: {
        isLocked = liftedAction.status;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case PAUSE_RECORDING: {
        isPaused = liftedAction.status;
        if (isPaused) {
          stagedActionIds = [...stagedActionIds, nextActionId];
          actionsById[nextActionId] = new PerformAction({
            type: "@ngrx/devtools/pause"
          }, +Date.now());
          nextActionId++;
          minInvalidatedStateIndex = stagedActionIds.length - 1;
          computedStates = computedStates.concat(computedStates[computedStates.length - 1]);
          if (currentStateIndex === stagedActionIds.length - 2) {
            currentStateIndex++;
          }
          minInvalidatedStateIndex = Infinity;
        } else {
          commitChanges();
        }
        break;
      }
      case RESET: {
        actionsById = {
          0: liftAction(INIT_ACTION)
        };
        nextActionId = 1;
        stagedActionIds = [0];
        skippedActionIds = [];
        committedState = initialCommittedState;
        currentStateIndex = 0;
        computedStates = [];
        break;
      }
      case COMMIT: {
        commitChanges();
        break;
      }
      case ROLLBACK: {
        actionsById = {
          0: liftAction(INIT_ACTION)
        };
        nextActionId = 1;
        stagedActionIds = [0];
        skippedActionIds = [];
        currentStateIndex = 0;
        computedStates = [];
        break;
      }
      case TOGGLE_ACTION: {
        const {
          id: actionId
        } = liftedAction;
        const index = skippedActionIds.indexOf(actionId);
        if (index === -1) {
          skippedActionIds = [actionId, ...skippedActionIds];
        } else {
          skippedActionIds = skippedActionIds.filter((id) => id !== actionId);
        }
        minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
        break;
      }
      case SET_ACTIONS_ACTIVE: {
        const {
          start,
          end,
          active
        } = liftedAction;
        const actionIds = [];
        for (let i = start; i < end; i++) actionIds.push(i);
        if (active) {
          skippedActionIds = difference(skippedActionIds, actionIds);
        } else {
          skippedActionIds = [...skippedActionIds, ...actionIds];
        }
        minInvalidatedStateIndex = stagedActionIds.indexOf(start);
        break;
      }
      case JUMP_TO_STATE: {
        currentStateIndex = liftedAction.index;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case JUMP_TO_ACTION: {
        const index = stagedActionIds.indexOf(liftedAction.actionId);
        if (index !== -1) currentStateIndex = index;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case SWEEP: {
        stagedActionIds = difference(stagedActionIds, skippedActionIds);
        skippedActionIds = [];
        currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
        break;
      }
      case PERFORM_ACTION: {
        if (isLocked) {
          return liftedState || initialLiftedState;
        }
        if (isPaused || liftedState && isActionFiltered(liftedState.computedStates[currentStateIndex], liftedAction, options.predicate, options.actionsSafelist, options.actionsBlocklist)) {
          const lastState = computedStates[computedStates.length - 1];
          computedStates = [...computedStates.slice(0, -1), computeNextEntry(reducer, liftedAction.action, lastState.state, lastState.error, errorHandler)];
          minInvalidatedStateIndex = Infinity;
          break;
        }
        if (options.maxAge && stagedActionIds.length === options.maxAge) {
          commitExcessActions(1);
        }
        if (currentStateIndex === stagedActionIds.length - 1) {
          currentStateIndex++;
        }
        const actionId = nextActionId++;
        actionsById[actionId] = liftedAction;
        stagedActionIds = [...stagedActionIds, actionId];
        minInvalidatedStateIndex = stagedActionIds.length - 1;
        break;
      }
      case IMPORT_STATE: {
        ({
          monitorState,
          actionsById,
          nextActionId,
          stagedActionIds,
          skippedActionIds,
          committedState,
          currentStateIndex,
          computedStates,
          isLocked,
          isPaused
        } = liftedAction.nextLiftedState);
        break;
      }
      case INIT: {
        minInvalidatedStateIndex = 0;
        if (options.maxAge && stagedActionIds.length > options.maxAge) {
          computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
          commitExcessActions(stagedActionIds.length - options.maxAge);
          minInvalidatedStateIndex = Infinity;
        }
        break;
      }
      case UPDATE: {
        const stateHasErrors = computedStates.filter((state) => state.error).length > 0;
        if (stateHasErrors) {
          minInvalidatedStateIndex = 0;
          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
            commitExcessActions(stagedActionIds.length - options.maxAge);
            minInvalidatedStateIndex = Infinity;
          }
        } else {
          if (!isPaused && !isLocked) {
            if (currentStateIndex === stagedActionIds.length - 1) {
              currentStateIndex++;
            }
            const actionId = nextActionId++;
            actionsById[actionId] = new PerformAction(liftedAction, +Date.now());
            stagedActionIds = [...stagedActionIds, actionId];
            minInvalidatedStateIndex = stagedActionIds.length - 1;
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
          }
          computedStates = computedStates.map((cmp) => __spreadProps(__spreadValues({}, cmp), {
            state: reducer(cmp.state, RECOMPUTE_ACTION)
          }));
          currentStateIndex = stagedActionIds.length - 1;
          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            commitExcessActions(stagedActionIds.length - options.maxAge);
          }
          minInvalidatedStateIndex = Infinity;
        }
        break;
      }
      default: {
        minInvalidatedStateIndex = Infinity;
        break;
      }
    }
    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
    monitorState = monitorReducer(monitorState, liftedAction);
    return {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    };
  };
}
var StoreDevtools = class _StoreDevtools {
  constructor(dispatcher, actions$, reducers$, extension, scannedActions, errorHandler, initialState2, config) {
    const liftedInitialState = liftInitialState(initialState2, config.monitor);
    const liftReducer = liftReducerWith(initialState2, liftedInitialState, errorHandler, config.monitor, config);
    const liftedAction$ = merge(merge(actions$.asObservable().pipe(skip(1)), extension.actions$).pipe(map(liftAction)), dispatcher, extension.liftedActions$).pipe(observeOn(queueScheduler));
    const liftedReducer$ = reducers$.pipe(map(liftReducer));
    const zoneConfig = injectZoneConfig(config.connectInZone);
    const liftedStateSubject = new ReplaySubject(1);
    this.liftedStateSubscription = liftedAction$.pipe(
      withLatestFrom(liftedReducer$),
      // The extension would post messages back outside of the Angular zone
      // because we call `connect()` wrapped with `runOutsideAngular`. We run change
      // detection only once at the end after all the required asynchronous tasks have
      // been processed (for instance, `setInterval` scheduled by the `timeout` operator).
      // We have to re-enter the Angular zone before the `scan` since it runs the reducer
      // which must be run within the Angular zone.
      emitInZone(zoneConfig),
      scan(({
        state: liftedState
      }, [action, reducer]) => {
        let reducedLiftedState = reducer(liftedState, action);
        if (action.type !== PERFORM_ACTION && shouldFilterActions(config)) {
          reducedLiftedState = filterLiftedState(reducedLiftedState, config.predicate, config.actionsSafelist, config.actionsBlocklist);
        }
        extension.notify(action, reducedLiftedState);
        return {
          state: reducedLiftedState,
          action
        };
      }, {
        state: liftedInitialState,
        action: null
      })
    ).subscribe(({
      state,
      action
    }) => {
      liftedStateSubject.next(state);
      if (action.type === PERFORM_ACTION) {
        const unliftedAction = action.action;
        scannedActions.next(unliftedAction);
      }
    });
    this.extensionStartSubscription = extension.start$.pipe(emitInZone(zoneConfig)).subscribe(() => {
      this.refresh();
    });
    const liftedState$ = liftedStateSubject.asObservable();
    const state$ = liftedState$.pipe(map(unliftState));
    Object.defineProperty(state$, "state", {
      value: toSignal(state$, {
        manualCleanup: true,
        requireSync: true
      })
    });
    this.dispatcher = dispatcher;
    this.liftedState = liftedState$;
    this.state = state$;
  }
  ngOnDestroy() {
    this.liftedStateSubscription.unsubscribe();
    this.extensionStartSubscription.unsubscribe();
  }
  dispatch(action) {
    this.dispatcher.next(action);
  }
  next(action) {
    this.dispatcher.next(action);
  }
  error(error) {
  }
  complete() {
  }
  performAction(action) {
    this.dispatch(new PerformAction(action, +Date.now()));
  }
  refresh() {
    this.dispatch(new Refresh());
  }
  reset() {
    this.dispatch(new Reset(+Date.now()));
  }
  rollback() {
    this.dispatch(new Rollback(+Date.now()));
  }
  commit() {
    this.dispatch(new Commit(+Date.now()));
  }
  sweep() {
    this.dispatch(new Sweep());
  }
  toggleAction(id) {
    this.dispatch(new ToggleAction(id));
  }
  jumpToAction(actionId) {
    this.dispatch(new JumpToAction(actionId));
  }
  jumpToState(index) {
    this.dispatch(new JumpToState(index));
  }
  importState(nextLiftedState) {
    this.dispatch(new ImportState(nextLiftedState));
  }
  lockChanges(status) {
    this.dispatch(new LockChanges(status));
  }
  pauseRecording(status) {
    this.dispatch(new PauseRecording(status));
  }
  static {
    this.\u0275fac = function StoreDevtools_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreDevtools)(\u0275\u0275inject(DevtoolsDispatcher), \u0275\u0275inject(ActionsSubject), \u0275\u0275inject(ReducerObservable), \u0275\u0275inject(DevtoolsExtension), \u0275\u0275inject(ScannedActionsSubject), \u0275\u0275inject(ErrorHandler), \u0275\u0275inject(INITIAL_STATE), \u0275\u0275inject(STORE_DEVTOOLS_CONFIG));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _StoreDevtools,
      factory: _StoreDevtools.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtools, [{
    type: Injectable
  }], () => [{
    type: DevtoolsDispatcher
  }, {
    type: ActionsSubject
  }, {
    type: ReducerObservable
  }, {
    type: DevtoolsExtension
  }, {
    type: ScannedActionsSubject
  }, {
    type: ErrorHandler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [INITIAL_STATE]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }], null);
})();
function emitInZone({
  ngZone,
  connectInZone
}) {
  return (source) => connectInZone ? new Observable((subscriber) => source.subscribe({
    next: (value) => ngZone.run(() => subscriber.next(value)),
    error: (error) => ngZone.run(() => subscriber.error(error)),
    complete: () => ngZone.run(() => subscriber.complete())
  })) : source;
}
var IS_EXTENSION_OR_MONITOR_PRESENT = new InjectionToken("@ngrx/store-devtools Is Devtools Extension or Monitor Present");
function createIsExtensionOrMonitorPresent(extension, config) {
  return Boolean(extension) || config.monitor !== noMonitor;
}
function createReduxDevtoolsExtension() {
  const extensionKey = "__REDUX_DEVTOOLS_EXTENSION__";
  if (typeof window === "object" && typeof window[extensionKey] !== "undefined") {
    return window[extensionKey];
  } else {
    return null;
  }
}
function provideStoreDevtools(options = {}) {
  return makeEnvironmentProviders([DevtoolsExtension, DevtoolsDispatcher, StoreDevtools, {
    provide: INITIAL_OPTIONS,
    useValue: options
  }, {
    provide: IS_EXTENSION_OR_MONITOR_PRESENT,
    deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
    useFactory: createIsExtensionOrMonitorPresent
  }, {
    provide: REDUX_DEVTOOLS_EXTENSION,
    useFactory: createReduxDevtoolsExtension
  }, {
    provide: STORE_DEVTOOLS_CONFIG,
    deps: [INITIAL_OPTIONS],
    useFactory: createConfig
  }, {
    provide: StateObservable,
    deps: [StoreDevtools],
    useFactory: createStateObservable
  }, {
    provide: ReducerManagerDispatcher,
    useExisting: DevtoolsDispatcher
  }]);
}
function createStateObservable(devtools) {
  return devtools.state;
}
var StoreDevtoolsModule = class _StoreDevtoolsModule {
  static instrument(options = {}) {
    return {
      ngModule: _StoreDevtoolsModule,
      providers: [provideStoreDevtools(options)]
    };
  }
  static {
    this.\u0275fac = function StoreDevtoolsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreDevtoolsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _StoreDevtoolsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtoolsModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// src/app/features/components/sidenav/store/sidenav.reducer.ts
var initialState = {
  isOpen: false,
  selectedMenu: ""
};
var sidenavReducer = createReducer(initialState, on(SidenavActions["[Sidenav]Open"], (state) => __spreadProps(__spreadValues({}, state), { isOpen: true })), on(SidenavActions["[Sidenav]Close"], (state) => __spreadProps(__spreadValues({}, state), {
  isOpen: false
})), on(SidenavActions["[Sidenav]Toggle"], (state) => __spreadProps(__spreadValues({}, state), {
  isOpen: !state.isOpen
})), on(SidenavActions["[Sidenav]SelectMenu"], (state, { selectedMenu }) => __spreadProps(__spreadValues({}, state), {
  selectedMenu
})));

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideStore({ sidenav: sidenavReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.title = "cleantine-tasman-web";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 12 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v18.2.7
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
