(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1247:function(a,o,t){"use strict";var l=t(405);t.n(l).a},1248:function(a,o,t){(a.exports=t(2)(!1)).push([a.i,"\n#modal8 .modal-header,\n#modal8 .modal-footer {\n    background-color: #3a7db5;\n}\n#modal9 .modal-header,\n#modal9 .modal-footer {\n    background-color: #4FC1E9;\n}\n#modal10 .modal-header,\n#modal10 .modal-footer {\n    background-color: #f89a14;\n}\n#modal11 .modal-header,\n#modal11 .modal-footer {\n    background-color: #DC6460;\n}\n#modal13 .modal-header,\n#modal13 .modal-footer {\n    background-color: #dcdcdc;\n}\n#modal12 .modal-header,\n#modal12 .modal-footer {\n    background-color: #09BD8F;\n}\n.header{\n    z-index: 99 !important;\n}\n",""])},1597:function(a,o,t){"use strict";t.r(o);var l=t(4),d=t.n(l),s=t(229),i=t.n(s);d.a.use(i.a);var r={name:"modals",data:function(){return{stop_close:!1}},methods:{open_modal:function(){this.$refs.modal21.show()},stop:function(a){if(!this.stop_close)return a.preventDefault()},shown:function(){alert("Modal opened")},hidden:function(){alert("Modal Hidden")},success:function(){alert("OK Clicked")},cancel:function(){alert("Close Clicked")},show:function(){this.$modal.show("hello-world")},dragpoint:function(){this.$modal.show("dragpoint")},second:function(){this.$modal.show("second")},third:function(){this.$modal.show("third")},hide:function(){this.$modal.hide("hello-world")},login:function(){this.$modal.show("modallogin")}}},n=(t(1247),t(1)),e=Object(n.a)(r,(function(){var a=this,o=a.$createElement,t=a._self._c||o;return t("div",[t("b-card",{staticClass:"bg-primary-card",attrs:{header:"Modals","header-tag":"h4"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("b-card",{staticClass:"bg-primary-card"},[t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal1",modifiers:{modal1:!0}}],staticClass:"mt-3 mb-3",attrs:{variant:"outline-secondary"}},[a._v("Launch demo modal")]),a._v(" "),t("b-btn",{staticClass:"mt-3 mb-3 ",attrs:{variant:"outline-secondary"},on:{click:a.open_modal}},[a._v("Launch modal with ref")]),a._v(" "),t("b-modal",{ref:"modal1",staticClass:"bg-primary",attrs:{id:"modal1",title:"Modal"}},[t("h1",[a._v("modal")])]),a._v(" "),t("b-modal",{ref:"modal21",attrs:{id:"modal21",title:"Modal"}},[t("h1",[a._v("modal")])])],1)],1),a._v(" "),t("div",{staticClass:"col-lg-6 mt-3"},[t("b-card",{staticClass:"bg-info-card"},[t("h4",[a._v("Stop closing on backdrop click")]),a._v(" "),t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal2",modifiers:{modal2:!0}}],attrs:{variant:"outline-secondary"}},[a._v("Launch demo modal")]),a._v(" "),t("b-modal",{ref:"modal2",attrs:{"no-close-on-backdrop":!0,id:"modal2",title:"Modal"}},[t("h1",[a._v("modal")])])],1)],1),a._v(" "),t("div",{staticClass:"col-lg-6 mt-3"},[t("b-card",{staticClass:"bg-info-card"},[t("h4",[a._v("Programmatically stop closing of modal")]),a._v(" "),t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal3",modifiers:{modal3:!0}}],attrs:{variant:"outline-secondary"}},[a._v("Launch demo modal")]),a._v(" "),t("b-modal",{ref:"modal3",attrs:{id:"modal3",title:"Modal"},on:{hide:a.stop}},[t("h1",[a._v("modal")]),a._v(" "),t("div",{staticClass:"form-group"},[t("b-form-checkbox",{model:{value:a.stop_close,callback:function(o){a.stop_close=o},expression:"stop_close"}},[a._v("Enable Modal closing")])],1)])],1)],1),a._v(" "),t("div",{staticClass:"col-lg-4 mt-3"},[t("b-card",{staticClass:"bg-primary-card"},[t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal4",modifiers:{modal4:!0}}],attrs:{variant:"outline-secondary"}},[a._v("Launch small modal")]),a._v(" "),t("b-modal",{attrs:{id:"modal4",title:"Small Modal",size:"sm"}},[t("h1",[a._v("modal")])])],1)],1),a._v(" "),t("div",{staticClass:"col-lg-4 mt-3"},[t("b-card",{staticClass:"bg-success-card"},[t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal5",modifiers:{modal5:!0}}],attrs:{variant:"outline-secondary"}},[a._v("Launch Normal modal")]),a._v(" "),t("b-modal",{attrs:{id:"modal5",title:"Normal Modal",size:"md"}},[t("h1",[a._v("modal")])])],1)],1),a._v(" "),t("div",{staticClass:"col-lg-4 mt-3"},[t("b-card",{staticClass:"bg-danger-card"},[t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal6",modifiers:{modal6:!0}}],attrs:{variant:"outline-secondary"}},[a._v("Launch Large modal")]),a._v(" "),t("b-modal",{attrs:{id:"modal6",title:"Large Modal",size:"lg"}},[t("h1",[a._v("modal")])])],1)],1),a._v(" "),t("div",{staticClass:"col-lg-12 mt-3"},[t("b-card",{staticClass:"bg-warning-card"},[t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal7",modifiers:{modal7:!0}}],attrs:{variant:"outline-secondary"}},[a._v("Launch modal Events")]),a._v(" "),t("b-modal",{attrs:{id:"modal7",title:"Modal"},on:{shown:a.shown,hidden:a.hidden,ok:a.success,cancel:a.cancel}},[t("h1",[a._v("modal")])])],1)],1),a._v(" "),t("div",{staticClass:"col-lg-4 mt-3"},[t("b-card",{staticClass:"bg-primary-card"},[t("h4",[a._v("Background Primary Modal ")]),a._v(" "),t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal8",modifiers:{modal8:!0}}],attrs:{variant:"outline-primary"}},[a._v("Primary modal")]),a._v(" "),t("b-modal",{attrs:{id:"modal8",title:"Priamry Modal",size:"md"}},[t("h1",[a._v(" Primary modal")])])],1)],1),a._v(" "),t("div",{staticClass:"col-lg-4 mt-3"},[t("b-card",{staticClass:"bg-info-card"},[t("h4",[a._v("Background Info Modal ")]),a._v(" "),t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal9",modifiers:{modal9:!0}}],attrs:{variant:"outline-info"}},[a._v("Info modal")]),a._v(" "),t("b-modal",{attrs:{id:"modal9",title:"Info Modal"}},[t("h1",[a._v(" Info modal")])])],1)],1),a._v(" "),t("div",{staticClass:"col-lg-4 mt-3"},[t("b-card",{staticClass:"bg-warning-card"},[t("h4",[a._v("Background Warning Modal ")]),a._v(" "),t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal10",modifiers:{modal10:!0}}],attrs:{variant:"outline-warning"}},[a._v("Warning modal")]),a._v(" "),t("b-modal",{attrs:{id:"modal10",title:"Warning Modal"}},[t("h1",[a._v(" Warning modal")])])],1)],1),a._v(" "),t("div",{staticClass:"col-lg-4 mt-3"},[t("b-card",{staticClass:"bg-danger-card"},[t("h4",[a._v("Background Danger Modal ")]),a._v(" "),t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal11",modifiers:{modal11:!0}}],attrs:{variant:"outline-danger"}},[a._v("Danger Modal")]),a._v(" "),t("b-modal",{attrs:{id:"modal11",title:"Danger Modal"}},[t("h1",[a._v("Danger modal")])])],1)],1),a._v(" "),t("div",{staticClass:"col-lg-4 mt-3"},[t("b-card",{staticClass:"bg-success-card"},[t("h4",[a._v("Background Success Modal ")]),a._v(" "),t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal12",modifiers:{modal12:!0}}],attrs:{variant:"outline-success"}},[a._v("Success Modal")]),a._v(" "),t("b-modal",{attrs:{id:"modal12",title:"Success Modal"}},[t("h1",[a._v(" Success modal")])])],1)],1),a._v(" "),t("div",{staticClass:"col-lg-4 mt-3"},[t("b-card",{staticClass:"bg-deafult-card"},[t("h4",[a._v("Background Deafult Modal ")]),a._v(" "),t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal13",modifiers:{modal13:!0}}],attrs:{variant:"outline-secondary"}},[a._v("Deafult modal")]),a._v(" "),t("b-modal",{attrs:{id:"modal13",title:"Deafult Modal"}},[t("h1",[a._v("modal")])])],1)],1)])]),a._v(" "),t("b-card",{staticClass:"bg-primary-card",attrs:{header:"Advanced Modals","header-tag":"h4"}},[t("modal",{attrs:{name:"hello-world",adaptive:!0,draggable:!0}},[t("div",{staticClass:"p-4"},[a._v("Draggable modal")])]),a._v(" "),t("modal",{attrs:{name:"dragpoint",adaptive:!0,draggable:".window-header"}},[t("div",{staticClass:"p-4"},[a._v("Drag on a mentioned point"),t("span",{staticClass:"float-right window-header"},[t("i",{staticClass:"fa fa-arrows-alt"})])])]),a._v(" "),t("modal",{attrs:{name:"second",adaptive:!0,resizable:!0,transition:"slide-fade"}},[t("div",{staticClass:"p-4"},[a._v("hello, world! second")])]),a._v(" "),t("modal",{attrs:{name:"third",adaptive:!0,resizable:!0,minWidth:250,minHeight:250,transition:"bounce"}},[t("div",{staticClass:"p-4"},[a._v("hello, world! Third")])]),a._v(" "),t("modal",{attrs:{name:"modallogin",adaptive:!0}},[t("div",{staticClass:"p-4"},[t("label",{attrs:{for:"modalemail"}},[a._v("Email")]),a._v(" "),t("input",{staticClass:"form-control",attrs:{type:"email",id:"modalemail"}}),a._v(" "),t("label",{attrs:{for:"modalpassword"}},[a._v("Password")]),a._v(" "),t("input",{staticClass:"form-control",attrs:{type:"email",id:"modalpassword"}}),a._v(" "),t("input",{staticClass:"btn btn-success mt-2",attrs:{type:"submit",value:"submit"}})])]),a._v(" "),t("button",{staticClass:"btn btn-primary",on:{click:a.show}},[a._v("Draggable")]),a._v(" "),t("button",{staticClass:"btn btn-info text-white",on:{click:a.dragpoint}},[a._v("Draggable with point")]),a._v(" "),t("button",{staticClass:"btn btn-success",on:{click:a.second}},[a._v("Resizable")]),a._v(" "),t("button",{staticClass:"btn btn-info text-white",on:{click:a.third}},[a._v("Minimum width and height")]),a._v(" "),t("button",{staticClass:"btn btn-primary",on:{click:a.login}},[a._v("Login modal")])],1)],1)}),[],!1,null,null,null);o.default=e.exports},405:function(a,o,t){var l=t(1248);"string"==typeof l&&(l=[[a.i,l,""]]);var d={hmr:!0,transform:void 0,insertInto:void 0};t(3)(l,d);l.locals&&(a.exports=l.locals)}}]);