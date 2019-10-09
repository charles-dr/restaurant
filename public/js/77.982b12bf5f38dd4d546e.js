(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1103:function(s,t,a){"use strict";var e=a(362);a.n(e).a},1104:function(s,t,a){var e=a(37);(s.exports=a(2)(!1)).push([s.i,"\n.login-content[data-v-7200bbea] {\n    margin-top: 7%;\n    margin-bottom: 7%;\n    padding-bottom: 20px;\n    box-shadow: 0 0 30px #ccc;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    background-color: #ffffff;\n}\n.img_backgrond[data-v-7200bbea] {\n    background-image: url("+e(a(224))+");\n    background-size: cover;\n    height: 100vh;\n    width: 100%;\n}\nlabel[data-v-7200bbea] {\n    font-size: 14px !important;\n}\n[data-v-7200bbea]::-webkit-input-placeholder {\n    font-size: 14px;\n}\n.user-message[data-v-7200bbea] {\n    padding: 15px 0;\n    font-size: 14px;\n    color: #777;\n}\n.img_backgrond .input-group-text[data-v-7200bbea]{\n    background-color: white;\n}\n.fa[data-v-7200bbea]{\n    color: #ced4da;\n}\n\n",""])},1567:function(s,t,a){"use strict";a.r(t);var e=[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-12 mt-4"},[t("h2",{staticClass:"text-center"},[t("img",{attrs:{src:a(65),alt:"Logo"}})])]),this._v(" "),t("div",{staticClass:"col-sm-12 mt-4"},[t("h3",{staticClass:"page-name text-center"},[this._v("Reset Password")])])])}],o=a(4),n=a.n(o),r=a(10),i=a.n(r),d=a(16),l=a(9);n.a.use(i.a,d.a);var c={name:"resetpassword",data:function(){return{errorShow:!1,successShow:!1,formstate:{},message:"",model:{password:"",password_confirmation:"",token:""}}},methods:{onSubmit:function(){if(!this.formstate.$invalid){var s=this;s.message="",l.a.post("/auth/password_save",this.model).then((function(t){t.data.success?(s.model={},s.message="You can login now with new password!",s.errorShow=!1,s.successShow=!0,s.showLoginPage=!0):(s.model.password="",s.model.password_confirmation="",s.message="Some data is not valid!",s.errorShow=!0,s.successShow=!1,s.showLoginPage=!1)}))}}},beforeMount:function(){this.model.token=this.$route.params.token},mounted:function(){},destroyed:function(){}},m=(a(1103),a(1)),u=Object(m.a)(c,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"container-fluid img_backgrond"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5"},[s._m(0),s._v(" "),a("v-layout",{directives:[{name:"show",rawName:"v-show",value:s.errorShow,expression:"errorShow"}]},[a("span",{staticStyle:{color:"red","text-align":"center"}},[s._v(s._s(s.message))])]),s._v(" "),a("v-layout",{directives:[{name:"show",rawName:"v-show",value:s.successShow,expression:"successShow"}]},[a("span",{staticStyle:{color:"green","text-align":"center"}},[s._v(s._s(s.message))]),a("br"),s._v(" "),a("router-link",{attrs:{tag:"a",to:"/login"}},[s._v("Go to Login page")])],1),s._v(" "),a("vue-form",{directives:[{name:"show",rawName:"v-show",value:!s.successShow,expression:"!successShow"}],attrs:{state:s.formstate},on:{submit:function(t){return t.preventDefault(),s.onSubmit(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.model.token,expression:"model.token"}],attrs:{type:"hidden",id:"token",required:""},domProps:{value:s.model.token},on:{input:function(t){t.target.composing||s.$set(s.model,"token",t.target.value)}}}),s._v(" "),a("div",{staticClass:"col-md-12"},[a("p",{staticClass:"user-message"},[s._v(" * The Password is case sensitive.")]),s._v(" "),a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("div",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-key",attrs:{"aria-hidden":"true"}})])]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.model.password,expression:"model.password"}],staticClass:"form-control",attrs:{name:"password",type:"password",required:"",placeholder:"Password",minlength:"4",maxlength:"10"},domProps:{value:s.model.password},on:{input:function(t){t.target.composing||s.$set(s.model,"password",t.target.value)}}})]),s._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"password",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[s._v("Password is required")]),s._v(" "),a("div",{attrs:{slot:"minlength"},slot:"minlength"},[s._v("Password should be atleast 4 characters long")]),s._v(" "),a("div",{attrs:{slot:"maxlength"},slot:"maxlength"},[s._v("Password should be atmost 10 characters long")])])],1)],1)]),s._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("div",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-key",attrs:{"aria-hidden":"true"}})])]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.model.password_confirmation,expression:"model.password_confirmation"}],staticClass:"form-control",attrs:{name:"repeatpassword",type:"password",required:"",placeholder:"Confirm Password",sameas:s.model.password},domProps:{value:s.model.password_confirmation},on:{input:function(t){t.target.composing||s.$set(s.model,"password_confirmation",t.target.value)}}})]),s._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"repeatpassword",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[s._v("Password confirmatoin is required")]),s._v(" "),a("div",{attrs:{slot:"sameas"},slot:"sameas"},[s._v("Password and Confirm password should match")])])],1)],1)]),s._v(" "),a("div",{staticClass:"col-12 mt-4"},[a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",value:"Reset Password"}})])])])],1)])])}),e,!1,null,"7200bbea",null);t.default=u.exports},16:function(s,t,a){"use strict";t.a={validators:{checkbox:function(s,t,a){return s},sameas:function(s,t,a){return s==t}}}},224:function(s,t){s.exports="public/images/Login-03-01.png?d74e560d86ea931916bcf7f875a009be"},362:function(s,t,a){var e=a(1104);"string"==typeof e&&(e=[[s.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(3)(e,o);e.locals&&(s.exports=e.locals)},65:function(s,t){s.exports="public/images/logo_black.png?c8baf38aa96fc61452370afbea45204a"}}]);