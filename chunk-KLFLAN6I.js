import {
  HttpClient,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ECP2NGGU.js";

// src/app/helpers/browser-storage.service.ts
var EStorageKeys;
(function(EStorageKeys2) {
  EStorageKeys2["TOKEN"] = "access_token";
  EStorageKeys2["USER"] = "user";
  EStorageKeys2["BREADCRUMB"] = "breadcrumb";
})(EStorageKeys || (EStorageKeys = {}));
var BrowserStorageService = class _BrowserStorageService {
  //SESSION STORAGE
  addToSessionStorage(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  getFromSessionStorage(key) {
    const data = sessionStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
  clearSessionStorage(keys) {
    if (keys === null) {
      sessionStorage.clear();
    } else {
      keys.forEach((key) => sessionStorage.removeItem(key));
    }
  }
  // LOCAL STORAGE
  addToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
  clearLocalStorage(keys) {
    if (keys === null) {
      localStorage.clear();
    } else {
      keys.forEach((key) => localStorage.removeItem(key));
    }
  }
  static {
    this.\u0275fac = function BrowserStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrowserStorageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BrowserStorageService, factory: _BrowserStorageService.\u0275fac, providedIn: "root" });
  }
};

// package.json
var package_default = {
  name: "cleantine-tasman-web",
  version: "0.0.0",
  scripts: {
    ng: "ng",
    start: "ng serve",
    build: "ng build",
    watch: "ng build --watch --configuration development",
    test: "ng test",
    "start:dev": "ng serve --configuration=development",
    "start:prod": "ng serve --configuration=production",
    "build:dev": "ng build --configuration=development",
    "build:prod": "ng build --configuration=production"
  },
  private: true,
  dependencies: {
    "@angular/animations": "^18.2.0",
    "@angular/cdk": "^18.2.8",
    "@angular/common": "^18.2.0",
    "@angular/compiler": "^18.2.0",
    "@angular/core": "^18.2.0",
    "@angular/forms": "^18.2.0",
    "@angular/platform-browser": "^18.2.0",
    "@angular/platform-browser-dynamic": "^18.2.0",
    "@angular/router": "^18.2.0",
    "@ngrx/store": "^18.1.0",
    "@ngrx/store-devtools": "^18.1.0",
    autoprefixer: "^10.4.20",
    postcss: "^8.4.47",
    rxjs: "~7.8.0",
    tailwindcss: "^3.4.13",
    tslib: "^2.3.0",
    "zone.js": "~0.14.10"
  },
  devDependencies: {
    "@angular-devkit/build-angular": "^18.2.1",
    "@angular/cli": "^18.2.1",
    "@angular/compiler-cli": "^18.2.0",
    "@ngrx/schematics": "^18.1.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.2.0",
    karma: "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    typescript: "~5.5.2"
  }
};

// src/environments/environment.ts
var environment = {
  production: false,
  version: package_default.version,
  appName: "Cleanline Tasman",
  apiBaseUrl: "https://cleanline-be-hsggamf9ggh7dycd.eastasia-01.azurewebsites.net/api",
  locales: ["en"],
  defaultLocale: "en"
};

// src/app/core/auth/services/auth/auth.service.ts
var AuthService = class _AuthService {
  constructor(_http, browserStorageService) {
    this._http = _http;
    this.browserStorageService = browserStorageService;
    this.apiUrl = environment.apiBaseUrl;
  }
  isAuthenticated() {
    const token = this.browserStorageService.getFromLocalStorage(EStorageKeys.TOKEN);
    return !!token;
  }
  loginRequest(user) {
    return this._http.post(`${this.apiUrl}/loginRequest`, user);
  }
  login(email, password) {
    return this._http.post(`${this.apiUrl}/login`, { email, password }).pipe(tap((res) => {
      console.log("auth service ", res);
      this.browserStorageService.addToLocalStorage(EStorageKeys.TOKEN, res.data.token.access_token);
    }));
  }
  logout() {
    this.browserStorageService.clearLocalStorage([
      EStorageKeys.USER,
      EStorageKeys.TOKEN,
      EStorageKeys.BREADCRUMB
    ]);
  }
  forgotPassword(email) {
    return this._http.post(`${this.apiUrl}/forgot-password`, { email });
  }
  resetPassword(token, email, password, password_confirmation) {
    return this._http.post(`${this.apiUrl}/reset-password`, {
      token,
      email,
      password,
      password_confirmation
    });
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BrowserStorageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  EStorageKeys,
  BrowserStorageService,
  AuthService
};
//# sourceMappingURL=chunk-KLFLAN6I.js.map
