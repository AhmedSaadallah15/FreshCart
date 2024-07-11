"use strict";(self.webpackChunkmyApp=self.webpackChunkmyApp||[]).push([[91],{7091:(z,d,i)=>{i.r(d),i.d(d,{SettingsModule:()=>L});var u=i(6814),g=i(7163),e=i(4769);let h=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-settings"]],decls:16,vars:0,consts:[[1,"container"],[1,"w-75","mx-auto","py-5"],[1,"row"],[1,"col-md-4","border-end","border-4"],[1,"btn"],["routerLink","settings/userData"],[1,"text-main"],[1,"fa-regular","fa-user"],["routerLink","settings/privacy"],[1,"fa-solid","fa-lock"],[1,"col-md-8"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4)(5,"a",5)(6,"span",6),e._UZ(7,"i",7),e.qZA(),e._uU(8," Account Settings "),e.qZA()(),e.TgZ(9,"button",4)(10,"a",8)(11,"span",6),e._UZ(12,"i",9),e.qZA(),e._uU(13," privacy Settings "),e.qZA()()(),e.TgZ(14,"div",10),e._UZ(15,"router-outlet"),e.qZA()()()())},dependencies:[g.lC,g.rH],styles:[".btn[_ngcontent-%COMP%]{transition:transform .5s}.btn[_ngcontent-%COMP%]:hover{transform:translate(15px);border:1px solid #0aad0a}"]})}return t})();var o=i(95),f=i(8242),Z=i(9862);let m=(()=>{class t{constructor(a){this._HttpClient=a}changePassword(a){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",a)}changeUserData(a){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/users/updateMe/",a)}static#e=this.\u0275fac=function(n){return new(n||t)(e.LFG(Z.eN))};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _=i(2425);function w(t,s){if(1&t&&(e.TgZ(0,"p",12),e._uU(1),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Oqu(a.apiErrorMassage)}}function v(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"Requierd"),e.qZA())}function C(t,s){if(1&t&&(e.TgZ(0,"div",13),e.YNc(1,v,2,0,"p",14),e.qZA()),2&t){const a=e.oxw();let n;e.xp6(1),e.Q6J("ngIf",null==(n=a.changePassword.get("currentPassword"))?null:n.getError("required"))}}function U(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"Requierd"),e.qZA())}function T(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"Password not valid"),e.qZA())}function x(t,s){if(1&t&&(e.TgZ(0,"div",13),e.YNc(1,U,2,0,"p",14),e.YNc(2,T,2,0,"p",14),e.qZA()),2&t){const a=e.oxw();let n,r;e.xp6(1),e.Q6J("ngIf",null==(n=a.changePassword.get("password"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=a.changePassword.get("password"))?null:r.getError("pattern"))}}function P(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"Requierd"),e.qZA())}function q(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"RePassword not valid"),e.qZA())}function A(t,s){if(1&t&&(e.TgZ(0,"div",13),e.YNc(1,P,2,0,"p",14),e.YNc(2,q,2,0,"p",14),e.qZA()),2&t){const a=e.oxw();let n,r;e.xp6(1),e.Q6J("ngIf",null==(n=a.changePassword.get("rePassword"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=a.changePassword.get("rePassword"))?null:r.getError("pattern"))}}function N(t,s){if(1&t&&(e.TgZ(0,"p",12),e._uU(1),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Oqu(a.apiErrorMassage)}}function D(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"Requierd"),e.qZA())}function J(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"minLength is 3"),e.qZA())}function y(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"maxLength is 15"),e.qZA())}function b(t,s){if(1&t&&(e.TgZ(0,"div",13),e.YNc(1,D,2,0,"p",14),e.YNc(2,J,2,0,"p",14),e.YNc(3,y,2,0,"p",14),e.qZA()),2&t){const a=e.oxw();let n,r,l;e.xp6(1),e.Q6J("ngIf",null==(n=a.changeUserData.get("name"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=a.changeUserData.get("name"))?null:r.getError("minLength")),e.xp6(1),e.Q6J("ngIf",null==(l=a.changeUserData.get("name"))?null:l.getError("maxLength"))}}function S(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"Requierd"),e.qZA())}function Y(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"Email is not valid"),e.qZA())}function Q(t,s){if(1&t&&(e.TgZ(0,"div",13),e.YNc(1,S,2,0,"p",14),e.YNc(2,Y,2,0,"p",14),e.qZA()),2&t){const a=e.oxw();let n,r;e.xp6(1),e.Q6J("ngIf",null==(n=a.changeUserData.get("email"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=a.changeUserData.get("email"))?null:r.getError("email"))}}function E(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"Requierd"),e.qZA())}function M(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"this is not egyption phone"),e.qZA())}function k(t,s){if(1&t&&(e.TgZ(0,"div",13),e.YNc(1,E,2,0,"p",14),e.YNc(2,M,2,0,"p",14),e.qZA()),2&t){const a=e.oxw();let n,r;e.xp6(1),e.Q6J("ngIf",null==(n=a.changeUserData.get("phone"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=a.changeUserData.get("phone"))?null:r.getError("pattern"))}}const F=[{path:"",component:h,children:[{path:"settings/privacy",component:(()=>{class t{constructor(a,n){this._SettingService=a,this._ToastrService=n,this.apiErrorMassage="",this.changePassword=new o.cw({currentPassword:new o.NI(null,[o.kI.required]),password:new o.NI(null,[o.kI.required,o.kI.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),rePassword:new o.NI(null,[o.kI.required,o.kI.pattern(/^[A-Z][a-z0-9]{3,8}$/)])},{validators:f.X})}handelForm(a){this._SettingService.changePassword(a.value).subscribe({next:n=>{console.log(n),this._ToastrService.success("User data updated successfully","Succsesfully")},error:n=>{console.log(n),this.apiErrorMassage=n.error.message}})}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(m),e.Y36(_._W))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-change-password"]],decls:19,vars:6,consts:[[3,"formGroup","ngSubmit"],["class","alert alert-danger text-center",4,"ngIf"],[1,"form-floating","mb-3"],["type","password","id","CurrentPassword","placeholder","Current Password","formControlName","currentPassword",1,"form-control"],["for","CurrentPassword"],["class","text-danger",4,"ngIf"],["type","password","id","Password","placeholder","Password","formControlName","password",1,"form-control"],["for","Password"],[1,"form-floating"],["type","password","id","RePassword","placeholder","RePassword","formControlName","rePassword",1,"form-control"],["for","RePassword"],[1,"btn","bg-main","text-white","my-3","ms-auto","d-block",3,"disabled"],[1,"alert","alert-danger","text-center"],[1,"text-danger"],["class","m-0",4,"ngIf"],[1,"m-0"]],template:function(n,r){if(1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return r.handelForm(r.changePassword)}),e.YNc(1,w,2,1,"p",1),e.TgZ(2,"div",2),e._UZ(3,"input",3),e.TgZ(4,"label",4),e._uU(5,"Current Password"),e.qZA(),e.YNc(6,C,2,1,"div",5),e.qZA(),e.TgZ(7,"div",2),e._UZ(8,"input",6),e.TgZ(9,"label",7),e._uU(10,"New Password"),e.qZA(),e.YNc(11,x,3,2,"div",5),e.qZA(),e.TgZ(12,"div",8),e._UZ(13,"input",9),e.TgZ(14,"label",10),e._uU(15,"RePassword"),e.qZA(),e.YNc(16,A,3,2,"div",5),e.qZA(),e.TgZ(17,"button",11),e._uU(18," Update "),e.qZA()()),2&n){let l,c,p;e.Q6J("formGroup",r.changePassword),e.xp6(1),e.Q6J("ngIf",r.apiErrorMassage),e.xp6(5),e.Q6J("ngIf",(null==(l=r.changePassword.get("currentPassword"))?null:l.errors)&&(null==(l=r.changePassword.get("currentPassword"))?null:l.touched)),e.xp6(5),e.Q6J("ngIf",(null==(c=r.changePassword.get("password"))?null:c.errors)&&(null==(c=r.changePassword.get("password"))?null:c.touched)),e.xp6(5),e.Q6J("ngIf",(null==(p=r.changePassword.get("rePassword"))?null:p.errors)&&(null==(p=r.changePassword.get("rePassword"))?null:p.touched)),e.xp6(1),e.Q6J("disabled",r.changePassword.invalid)}},dependencies:[u.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]})}return t})()},{path:"settings/userData",component:(()=>{class t{constructor(a,n){this._SettingService=a,this._ToastrService=n,this.apiErrorMassage="",this.changeUserData=new o.cw({name:new o.NI(null,[o.kI.required,o.kI.minLength(3),o.kI.maxLength(15)]),email:new o.NI(null,[o.kI.required,o.kI.email]),phone:new o.NI(null,[o.kI.required,o.kI.pattern(/^01[0125][0-9]{8}$/)])})}handelForm(a){this._SettingService.changeUserData(a.value).subscribe({next:n=>{console.log(n),this._ToastrService.success("User data updated successfully","Succsesfully")},error:n=>{console.log(n),this.apiErrorMassage=n.error.message}})}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(m),e.Y36(_._W))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-change-user-data"]],decls:19,vars:6,consts:[[3,"formGroup","ngSubmit"],["class","alert alert-danger text-center",4,"ngIf"],[1,"form-floating","mb-3"],["type","text","id","Name","placeholder","Name","formControlName","name",1,"form-control"],["for","Name"],["class","text-danger",4,"ngIf"],["type","email","id","email","placeholder","Email","formControlName","email",1,"form-control"],["for","email"],[1,"form-floating"],["type","tel","id","Phone","placeholder","Phone","formControlName","phone",1,"form-control"],["for","Phone"],[1,"btn","bg-main","text-white","my-3","ms-auto","d-block",3,"disabled"],[1,"alert","alert-danger","text-center"],[1,"text-danger"],["class","m-0",4,"ngIf"],[1,"m-0"]],template:function(n,r){if(1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return r.handelForm(r.changeUserData)}),e.YNc(1,N,2,1,"p",1),e.TgZ(2,"div",2),e._UZ(3,"input",3),e.TgZ(4,"label",4),e._uU(5,"Name"),e.qZA(),e.YNc(6,b,4,3,"div",5),e.qZA(),e.TgZ(7,"div",2),e._UZ(8,"input",6),e.TgZ(9,"label",7),e._uU(10,"Email"),e.qZA(),e.YNc(11,Q,3,2,"div",5),e.qZA(),e.TgZ(12,"div",8),e._UZ(13,"input",9),e.TgZ(14,"label",10),e._uU(15,"Phone"),e.qZA(),e.YNc(16,k,3,2,"div",5),e.qZA(),e.TgZ(17,"button",11),e._uU(18," Update "),e.qZA()()),2&n){let l,c,p;e.Q6J("formGroup",r.changeUserData),e.xp6(1),e.Q6J("ngIf",r.apiErrorMassage),e.xp6(5),e.Q6J("ngIf",(null==(l=r.changeUserData.get("name"))?null:l.errors)&&(null==(l=r.changeUserData.get("name"))?null:l.touched)),e.xp6(5),e.Q6J("ngIf",(null==(c=r.changeUserData.get("email"))?null:c.errors)&&(null==(c=r.changeUserData.get("email"))?null:c.touched)),e.xp6(5),e.Q6J("ngIf",(null==(p=r.changeUserData.get("phone"))?null:p.errors)&&(null==(p=r.changeUserData.get("phone"))?null:p.touched)),e.xp6(1),e.Q6J("disabled",r.changeUserData.invalid)}},dependencies:[u.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]})}return t})()}]}];let R=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[g.Bz.forChild(F),g.Bz]})}return t})(),L=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[u.ez,R,o.UX]})}return t})()}}]);