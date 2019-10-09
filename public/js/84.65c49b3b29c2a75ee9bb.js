(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1409:function(t,n,a){"use strict";var e=a(422);a.n(e).a},1410:function(t,n,a){(t.exports=a(2)(!1)).push([t.i,"/***Portlet custom css***/\n.portlet {\n    clear: both;\n    margin-top: 0;\n    margin-bottom: 25px;\n    padding: 0;\n}\n.ui-sortable-handle:not(.notsort),\n.portlet.box:not(.notsort) {\n    cursor: move;\n}\n.portlet > .portlet-body {\n    background-color: #fff;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-top: none;\n}\n.portlet > .portlet-title {\n    padding: 10px 10px 4px 10px;\n    color: #fff;\n    font-size: 16px;\n}\n.portlet-placeholder {\n    border: 1px dotted #ccc;\n    background-color: #dcdcdc;\n    margin: 0 1em 1em 0;\n    height: 130px;\n}\n.sortable {\n    min-height: 50px;\n}\n",""])},1411:function(t,n,a){"use strict";var e=a(423);a.n(e).a},1412:function(t,n,a){(t.exports=a(2)(!1)).push([t.i,"\n.playground {\n    display: -webkit-box;\n    display: flex;\n    margin-top: 4rem;\n}\n.color-item {\n    background: #f5f5f5;\n    padding: .5rem;\n    color: #5f5f5f;\n    -webkit-transition: -webkit-transform .3s;\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s;\n}\n.color-item.dragging {\n    background-color: #fff;\n}\n.color-show {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n}\n.color-box {\n    width: 31%;\n    color: #fff;\n    -webkit-transition: -webkit-transform .3s;\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s;\n}\n@media (min-width: 320px) and (max-width: 425px) {\n.color-show .color-box {\n        width: 100% !important;\n}\n}\n.color-box.dragging {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n.in-out-translate-fade-enter-active, .in-out-translate-fade-leave-active {\n    -webkit-transition: all .5s;\n    transition: all .5s;\n}\n.in-out-translate-fade-enter, .in-out-translate-fade-leave-active {\n    opacity: 0;\n}\n.in-out-translate-fade-enter {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n}\n.in-out-translate-fade-leave-active {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n}\n",""])},1613:function(t,n,a){"use strict";a.r(n);var e=a(4),r=a.n(e),o=a(929),i=a.n(o),s=a(930),l=a.n(s);r.a.use(i.a),r.a.component("vue-draggable-resizable",l.a);var c={data:function(){return{width:0,height:0,x:0,y:0,colors:[{text:"#6699cc",color_name:"Primary",person_name:"John",picture:"images/avatar2.jpg",alt:"image1"},{text:"#868e96",color_name:"Secondary",person_name:"Robert",picture:"images/avatar1.jpg",alt:"image2"},{text:"#66cc99",color_name:"Success",person_name:"James",picture:"images/avatar7.jpg",alt:"image3"},{text:"#66ccff",color_name:"Info",person_name:"Dolly",picture:"images/avatar4.jpg",alt:"image4"},{text:"#f0ad4e",color_name:"Warning",person_name:"Edgard",picture:"images/avatar6.jpg",alt:"image5"},{text:"#ff6666",color_name:"Danger",person_name:"Hedge",picture:"images/avatar5.jpg",alt:"image6"},{text:"#343a40",color_name:"Dark",person_name:"Zorge",picture:"images/avatar3.jpg",alt:"image7"}]}},methods:{onResize:function(t,n,a,e){this.x=t,this.y=n,this.width=a,this.height=e},onDrag:function(t,n){this.x=t,this.y=n}},mounted:function(){},destroyed:function(){}},d=(a(1409),a(1411),a(1)),m=Object(d.a)(c,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("b-card",{staticClass:"mb-5 bg-default-card",attrs:{header:"Vue Draggable","header-tag":"h4"}},[a("div",{staticClass:"color-show"},t._l(t.colors,(function(n){return a("div",{directives:[{name:"dragging",rawName:"v-dragging",value:{list:t.colors,item:n,group:"color"},expression:"{ list: colors, item: color, group: 'color' }"}],key:n.text,staticClass:"color-box card m-2"},[a("div",{staticClass:"card-body",style:{"background-color":n.text}},[a("b-media",[a("b-img",{staticClass:"rounded-circle",staticStyle:{width:"70px",height:"70px"},attrs:{slot:"aside",src:n.picture,alt:n.alt},slot:"aside"}),t._v(" "),a("h5",{staticClass:"mt-0"},[t._v(t._s(n.person_name))]),t._v(" "),a("p",[t._v('\n                                "Project -- Setup the project..!"\n                            ')])],1)],1)])})),0)])],1),t._v(" "),a("div",{staticClass:"col-12"},[a("b-card",{staticClass:"mb-5 bg-default-card",attrs:{header:"Draggable Resizable","header-tag":"h4"}},[a("div",{staticStyle:{height:"300px",position:"relative"}},[a("vue-draggable-resizable",{attrs:{parent:!0,maximize:!0,h:170},on:{dragging:t.onDrag,resizing:t.onResize}},[a("b-card",{staticClass:"mb-0"},[a("p",[t._v("Hello! I'm a flexible component. You can drag me around and you can resize me."),a("br"),t._v(" "),a("code",[t._v("X: "+t._s(t.x)+" / Y: "+t._s(t.y)+" - Width: "+t._s(t.width)+" / Height: "+t._s(t.height))])])])],1)],1)])],1)])}),[],!1,null,null,null);n.default=m.exports},422:function(t,n,a){var e=a(1410);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(3)(e,r);e.locals&&(t.exports=e.locals)},423:function(t,n,a){var e=a(1412);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(3)(e,r);e.locals&&(t.exports=e.locals)}}]);