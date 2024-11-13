import{a as M,b as E}from"./chunk-27SSKVYM.js";import{a as p,b as F,c as P,d as R,e as N,f as T,g as k,i as D,j as B}from"./chunk-WHBKGZ7H.js";import{Ba as x,Ca as L,D as S,O as w,Oa as O,Qa as y,Sa as G,W as _,_a as I,cb as f,ea as a,fa as m,ja as b,k as h,ka as l,na as i,oa as r,pa as c,r as v,ra as g,w as C,xa as d}from"./chunk-CLYTRT3L.js";var U=n=>({"cursor-default":n});function j(n,s){n&1&&(i(0,"span",15),_(),i(1,"svg",16),c(2,"path",17)(3,"path",18),r()())}var A=class n{constructor(s,t,e,o){this.formBuilder=s;this.router=t;this._authService=e;this.browserStorageService=o;this.REGISTER=`/${f.LOGIN_REQUEST}`;this.HOME=`/${f.HOME}`;this.FORGOT_PASSWORD=`/${f.FORGOT_PASSWORD}`;this.errorMessage=[{username:"",password:""}];this.isLoading=!1;this.formGroup=this.formBuilder.group({username:["",[p.required,p.email]],password:["",[p.required,p.minLength(3)]]})}ngOnInit(){}onLogin(){if(!this.formGroup.valid)this.formGroup.markAllAsTouched();else{this.isLoading=!0,console.log("isloading ",this.isLoading);let s=this.formGroup.value;this._authService.login(s.username,s.password).pipe(S(t=>{t&&(this.isLoading=!1,console.log("in isloading ",this.isLoading),this.browserStorageService.addToLocalStorage("user",JSON.stringify(t.data.user)),this.router.navigate([this.HOME]))}),v(t=>(this.isLoading=!1,console.log("catch isloading ",t,this.isLoading),h(t))),C(()=>{this.isLoading=!1,console.log("final Iisloading ",this.isLoading)})).subscribe()}}onForgotPassword(){this.router.navigate([this.FORGOT_PASSWORD])}onSignUp(){this.router.navigate([this.REGISTER])}static{this.\u0275fac=function(t){return new(t||n)(m(k),m(I),m(E),m(M))}}static{this.\u0275cmp=w({type:n,selectors:[["app-login"]],standalone:!0,features:[x],decls:18,vars:13,consts:[[1,"login-section","overflow-hidden"],[1,"login-section__form","mt-24"],[1,"login-section__form--form-element",3,"ngSubmit","formGroup"],[1,"mb-2","flex","w-full","items-center"],["src","assets/favicons/user.svg","alt","User Icon",1,"input-icon","mt-3"],["type","text","label","Username:","placeholder","Enter Username",1,"flex-1",3,"formControlName","isInvalid","errorMessage"],[1,"flex","w-full","items-center"],["src","assets/favicons/password.svg","alt","User Icon",1,"input-icon","mt-5"],["type","password","label","Password:","placeholder","Enter Password",1,"flex-1",3,"formControlName","isInvalid","isPassword","errorMessage"],[1,"forgot-password","mb-10"],[1,"text-white","text-xs","cursor-pointer","hover:text-slate-300","ml-2",3,"click"],["type","submit",1,"w-full","text-white","bg-tangerine","border-0","py-2","px-6","focus:outline-none","hover:bg-orange-800","rounded-lg","flex","items-center","justify-center","cursor-pointer",3,"ngClass","disabled"],["class","flex items-center justify-center",4,"ngIf"],[1,"text-sm","font-light","text-center"],["type","button",1,"w-full","bg-white","text-black","py-2","text-sm","px-6","focus:outline-none","hover:bg-slate-200","rounded-lg","mt-4",3,"click"],[1,"flex","items-center","justify-center"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-5","h-5","mr-3","text-gray-200","animate-spin","dark:text-gray-600","fill-slate-100"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"]],template:function(t,e){if(t&1&&(i(0,"section",0)(1,"div",1)(2,"form",2),g("ngSubmit",function(){return e.onLogin()}),i(3,"div",3),c(4,"img",4)(5,"app-input-field",5),r(),i(6,"div",6),c(7,"img",7)(8,"app-input-field",8),r(),i(9,"div",9)(10,"a",10),g("click",function(){return e.onForgotPassword()}),d(11,"Forgot password?"),r()(),i(12,"button",11),b(13,j,4,0,"span",12),i(14,"span",13),d(15," Login "),r()(),i(16,"button",14),g("click",function(){return e.onSignUp()}),d(17," Need an account? Request a login. "),r()()()()),t&2){let o,u;a(2),l("formGroup",e.formGroup),a(3),l("formControlName","username")("isInvalid",((o=e.formGroup.get("username"))==null?null:o.invalid)&&((o=e.formGroup.get("username"))==null?null:o.touched))("errorMessage","Email is required."),a(3),l("formControlName","password")("isInvalid",((u=e.formGroup.get("password"))==null?null:u.invalid)&&((u=e.formGroup.get("password"))==null?null:u.touched))("isPassword",!0)("errorMessage","Password is required."),a(4),l("ngClass",L(11,U,e.isLoading))("disabled",e.isLoading),a(),l("ngIf",e.isLoading)}},dependencies:[D,R,F,P,N,T,B,G,O,y],styles:[".login-section[_ngcontent-%COMP%]{width:400px}.text-usm[_ngcontent-%COMP%]{letter-spacing:.3em;font-size:15px}.text-spacing[_ngcontent-%COMP%]{letter-spacing:.5em}.btn-login[_ngcontent-%COMP%]{background-color:#49516b;color:#fff;width:100%;margin-top:20px}.input-with-icon[_ngcontent-%COMP%]{position:relative;align-items:center}.input-icon[_ngcontent-%COMP%]{width:30px;height:30px;margin-right:8px}.forgot-password[_ngcontent-%COMP%]{margin-left:30px}"],changeDetection:0})}};export{A as LoginComponent};