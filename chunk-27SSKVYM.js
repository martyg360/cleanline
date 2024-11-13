import{D as s,H as a,K as i,Ta as l}from"./chunk-CLYTRT3L.js";var n=class t{addToSessionStorage(e,r){sessionStorage.setItem(e,JSON.stringify(r))}getFromSessionStorage(e){let r=sessionStorage.getItem(e);return r?JSON.parse(r):null}clearSessionStorage(e){e===null?sessionStorage.clear():e.forEach(r=>sessionStorage.removeItem(r))}addToLocalStorage(e,r){localStorage.setItem(e,JSON.stringify(r))}getFromLocalStorage(e){let r=localStorage.getItem(e);return r?JSON.parse(r):null}clearLocalStorage(e){e===null?localStorage.clear():e.forEach(r=>localStorage.removeItem(r))}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})}};var c={name:"cleantine-tasman-web",version:"0.0.0",scripts:{ng:"ng",start:"ng serve",build:"ng build",watch:"ng build --watch --configuration development",test:"ng test","start:dev":"ng serve --configuration=development","start:prod":"ng serve --configuration=production","build:dev":"ng build --configuration=development","build:prod":"ng build --configuration=production"},private:!0,dependencies:{"@angular/animations":"^18.2.0","@angular/cdk":"^18.2.8","@angular/common":"^18.2.0","@angular/compiler":"^18.2.0","@angular/core":"^18.2.0","@angular/forms":"^18.2.0","@angular/platform-browser":"^18.2.0","@angular/platform-browser-dynamic":"^18.2.0","@angular/router":"^18.2.0","@ngrx/store":"^18.1.0","@ngrx/store-devtools":"^18.1.0",autoprefixer:"^10.4.20",postcss:"^8.4.47",rxjs:"~7.8.0",tailwindcss:"^3.4.13",tslib:"^2.3.0","zone.js":"~0.14.10"},devDependencies:{"@angular-devkit/build-angular":"^18.2.1","@angular/cli":"^18.2.1","@angular/compiler-cli":"^18.2.0","@ngrx/schematics":"^18.1.0","@types/jasmine":"~5.1.0","jasmine-core":"~5.2.0",karma:"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0",typescript:"~5.5.2"}};var g={production:!1,version:c.version,appName:"Cleanline Tasman",apiBaseUrl:"https://cleanline-be-hsggamf9ggh7dycd.eastasia-01.azurewebsites.net/api",locales:["en"],defaultLocale:"en"};var p=class t{constructor(e,r){this._http=e;this.browserStorageService=r;this.apiUrl=g.apiBaseUrl}isAuthenticated(){return!!this.browserStorageService.getFromLocalStorage("access_token")}loginRequest(e){return this._http.post(`${this.apiUrl}/loginRequest`,e)}login(e,r){return this._http.post(`${this.apiUrl}/login`,{email:e,password:r}).pipe(s(o=>{console.log("auth service ",o),this.browserStorageService.addToLocalStorage("access_token",o.data.token.access_token)}))}logout(){this.browserStorageService.clearLocalStorage(["user","access_token","breadcrumb"])}forgotPassword(e){return this._http.post(`${this.apiUrl}/forgot-password`,{email:e})}resetPassword(e,r,o,m){return this._http.post(`${this.apiUrl}/reset-password`,{token:e,email:r,password:o,password_confirmation:m})}static{this.\u0275fac=function(r){return new(r||t)(i(l),i(n))}}static{this.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})}};export{n as a,p as b};
