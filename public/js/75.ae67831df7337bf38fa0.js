(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1101:function(t,s,a){"use strict";var e=a(361);a.n(e).a},1102:function(t,s,a){var e=a(37);(t.exports=a(2)(!1)).push([t.i,"\n.login-content[data-v-1acc8cbb] {\n    margin-top: 7%;\n    margin-bottom: 7%;\n    padding-bottom: 20px;\n    box-shadow: 0 0 20px #ccc;\n    background-size: 100% 100%;\n    border-radius: 7px;\n    background-color: #ffffff;\n}\n.user-message[data-v-1acc8cbb] {\n    padding: 15px 0;\n    font-size: 14px;\n    color: #777;\n}\n.img_backgrond[data-v-1acc8cbb] {\n    background-image: url("+e(a(224))+");\n    background-size: cover;\n    height: 100vh;\n    width: 100%;\n}\nlabel[data-v-1acc8cbb] {\n    font-size: 14px !important;\n}\n[data-v-1acc8cbb]::-webkit-input-placeholder {\n    font-size: 14px;\n}\n.img_backgrond .input-group-text[data-v-1acc8cbb] {\n    background-color: white;\n}\n.fa[data-v-1acc8cbb] {\n    color: #ced4da;\n}\n\n",""])},1566:function(t,s,a){"use strict";a.r(s);var e=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 mt-4"},[s("h2",{staticClass:"text-center"},[s("img",{attrs:{src:a(65),alt:"Logo"}})])]),this._v(" "),s("div",{staticClass:"col-sm-12 mt-4"},[s("h3",{staticClass:"page-name text-center"},[this._v("Forgot Password")])])])}],i=a(4),n=a.n(i),o=a(10),r=a.n(o),c=a(16),l=a(9);n.a.use(r.a,c.a);var d={name:"forgetpassword",data:function(){return{formstate:{},model:{email:""},show_success:!1,show_error:!1}},methods:{onSubmit:function(){var t=this;this.formstate.$invalid||l.a.post("auth/password_reset",this.model).then((function(s){t.show_error=!1,t.show_success=!0})).catch((function(s){t.show_error=!0,t.show_success=!1}))}},mounted:function(){},destroyed:function(){}},u=(a(1101),a(1)),m=Object(u.a)(d,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-fluid img_backgrond"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5"},[t._m(0),t._v(" "),a("vue-form",{attrs:{state:t.formstate},on:{submit:function(s){return s.preventDefault(),t.onSubmit(s)}}},[a("p",{directives:[{name:"show",rawName:"v-show",value:t.show_success,expression:"show_success"}],staticClass:"text-danger"},[t._v("Password reset mail was sent.")]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.show_error,expression:"show_error"}],staticClass:"text-danger"},[t._v("Email is not valid")]),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("p",{staticClass:"user-message "},[t._v(" Please enter the email you are registered with. An email message will\n                        be sent to the email address with further instructions.")]),t._v(" "),a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("div",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.email,expression:"model.email"}],staticClass:"form-control",attrs:{name:"email",type:"email",required:"",placeholder:"E-mail"},domProps:{value:t.model.email},on:{input:function(s){s.target.composing||t.$set(t.model,"email",s.target.value)}}})]),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"email",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Email is a required field")]),t._v(" "),a("div",{attrs:{slot:"email"},slot:"email"},[t._v("Email is not valid")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-12 mt-4"},[a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",value:"Send Confirmation Mail"}})])])])],1)])])}),e,!1,null,"1acc8cbb",null);s.default=m.exports},16:function(t,s,a){"use strict";s.a={validators:{checkbox:function(t,s,a){return t},sameas:function(t,s,a){return t==s}}}},224:function(t,s){t.exports="public/images/Login-03-01.png?d74e560d86ea931916bcf7f875a009be"},361:function(t,s,a){var e=a(1102);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(3)(e,i);e.locals&&(t.exports=e.locals)},65:function(t,s){t.exports="public/images/logo_black.png?c8baf38aa96fc61452370afbea45204a"}}]);