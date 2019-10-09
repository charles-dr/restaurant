(window.webpackJsonp=window.webpackJsonp||[]).push([[46,26,27,119,120,121,122,123,124],{140:function(t,o,i){"use strict";o.a={getToken:function(){return window.localStorage.getItem("manager_token")},saveToken:function(t){window.localStorage.setItem("manager_token",t)},destroyToken:function(){window.localStorage.removeItem("manager_token")},getUser:function(){return window.localStorage.getItem("manager")},saveUser:function(t){window.localStorage.setItem("manager",JSON.stringify(t))},destroyUser:function(){window.localStorage.removeItem("manager")}}},144:function(t,o,i){var e=i(853);"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(3)(e,a);e.locals&&(t.exports=e.locals)},145:function(t,o,i){var e=i(855);"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(3)(e,a);e.locals&&(t.exports=e.locals)},1516:function(t,o,i){"use strict";i.r(o);i(10),i(16);var e=i(7),a=i(9),r=i(25),n=(i(56),{name:"LogoTitle",props:{},components:{ClipperBasic:r.a},data:function(){return{logoURL:"",resultLogoURL:"",succes_alert_show:!1,api_service:e.a,restaurant_id:0}},methods:{upload:function(t){0!==t.target.files.length&&(this.logoURL&&URL.revokeObjectURL(this.logoURL),this.logoURL=window.URL.createObjectURL(t.target.files[0]))},getResult:function(){var t=this.$refs.clipper.clip();this.resultLogoURL=t.toDataURL("image/jpg",1)},logoImgLoad:function(){this.$refs.clipper.setTL$.next({top:0,left:0}),this.$refs.clipper.setWH$.next({width:100,height:100})},submit:function(){var t=this;this.getResult();var o={};o.logo_image=this.resultLogoURL,this.api_service.post("restaurant/add_logo/".concat(0!=this.restaurant_id?this.restaurant_id:""),o).then((function(o){t.succes_alert_show=!0,setTimeout((function(){t.succes_alert_show=!1,0!=t.restaurant_id&&t.$router.push("/restaurant_list")}),2e3)}),(function(t){console.log(t.response)}))}},beforeMount:function(){var t=this,o="",i=e.a;this.$route.params.restaurant_id&&(this.restaurant_id=this.$route.params.restaurant_id,o="/"+this.restaurant_id,i=a.a,this.api_service=i),this.api_service.get("restaurant/get_logo"+o).then((function(o){var i=o.data;i.logo&&fetch(i.logo).then((function(t){return t.blob()})).then((function(o){var i=URL.createObjectURL(o);t.logoURL=i}))}),(function(t){console.log(t.response)}))}}),s=(i(852),i(854),i(1)),d=Object(s.a)(n,(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{attrs:{id:"logo-edit"}},[i("div",{class:{"alert alert-success site-setting-alert":!0,show:t.succes_alert_show}},[t._v("Site Setting successfully updated")]),t._v(" "),i("h3",{staticClass:"logo-page-title"},[t._v("Logo")]),t._v(" "),i("div",{staticClass:"logo-image-part-holder"},[i("div",{staticClass:"image-base-holder"},[i("clipper-upload",{staticClass:"uploadButton",model:{value:t.logoURL,callback:function(o){t.logoURL=o},expression:"logoURL"}},[i("img",{attrs:{src:"public/Images/Icons/imageUpload.png"}})]),t._v(" "),i("clipper-basic",{ref:"clipper",staticClass:"logo-image-origin",attrs:{src:t.logoURL,shadow:"rgba(0,0,0,0.4)",bgColor:"null",ratio:1},on:{load:t.logoImgLoad}},[i("div",{staticClass:"placeholder",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("No image")])])],1)]),t._v(" "),i("button",{staticClass:"btn btn-success submit-button",on:{click:t.submit}},[t._v("Submit")])])}),[],!1,null,"f99de87e",null);o.default=d.exports},16:function(t,o,i){"use strict";o.a={validators:{checkbox:function(t,o,i){return t},sameas:function(t,o,i){return t==o}}}},56:function(t,o,i){var e=i(831);"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(3)(e,a);e.locals&&(t.exports=e.locals)},7:function(t,o,i){"use strict";var e=i(4),a=i.n(e),r=i(167),n=i.n(r),s=i(203),d=i.n(s),p=i(140),l={init:function(){a.a.use(d.a,n.a),a.a.axios.defaults.baseURL="api/",a.a.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},setHeader:function(){a.a.axios.defaults.headers.common.Authorization="".concat(p.a.getToken())},query:function(t,o){return a.a.axios.get(t,o).catch((function(t){throw new Error("[RWV] ApiService ".concat(t))}))},get:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";null!==p.a.getToken()&&this.setHeader();var i="";return _.isNaN(o)||(i="?"+o),_.isObject(o)&&(i="?"+_.keys(o).filter((function(t){return null!=o[t]&&"null"!==o[t]})).map((function(t){return t+"="+o[t]})).join("&")),a.a.axios.get("".concat(t).concat(i)).catch((function(t){throw new Error("[RWV] ApiService ".concat(t))}))},post:function(t,o){return null!==p.a.getToken()&&this.setHeader(),console.log(t),a.a.axios.post("".concat(t),o)},update:function(t,o,i){return a.a.axios.put("".concat(t,"/").concat(o),i)},put:function(t,o){return a.a.axios.put("".concat(t),o)},delete:function(t){return a.a.axios.delete(t).catch((function(t){throw new Error("[RWV] ApiService ".concat(t))}))}};o.a=l},831:function(t,o,i){(t.exports=i(2)(!1)).push([t.i,".wrap[data-v-4e4fd9af]{width:100%;position:relative;overflow:hidden}.shim[data-v-4e4fd9af]{display:block;width:100%;position:relative;top:0;left:0}.img-pos[data-v-4e4fd9af]{position:absolute;top:0;left:0;width:100%;-webkit-transform-origin:0 0;transform-origin:0 0}.img-rotate[data-v-4e4fd9af]{position:relative;top:0;left:0;width:100%;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.img[data-v-4e4fd9af]{left:0;top:0;position:relative;width:100%;display:block}.clipper-range[data-v-3766ed33]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px}.wrap[data-v-3766ed33]{position:relative;height:25px;width:100%}.stick[data-v-3766ed33]{position:absolute;width:100%;height:2px;background-color:grey;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.bar[data-v-3766ed33]{position:absolute;cursor:pointer;width:12px;height:100%;background-color:#fff;-webkit-box-shadow:1px 1px 4px rgba(0,0,0,.5);box-shadow:1px 1px 4px rgba(0,0,0,.5);top:0;left:0}.vertical.clip-area .img-scale[data-v-b88921f2],.vertical.clip-area .img[data-v-b88921f2],.vertical.clip-area[data-v-b88921f2]{width:auto!important;height:100%!important}.clip-area[data-v-b88921f2]{position:relative!important;width:100%!important;overflow:hidden!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important;cursor:crosshair}.clip-area .img[data-v-b88921f2]{position:relative!important}.clip-area .img[data-v-b88921f2],.stem-canvas[data-v-b88921f2]{width:100%!important;display:block!important;pointer-events:none!important}.in-pad[data-v-b88921f2]{pointer-events:none!important;position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important}.img-scale[data-v-b88921f2]{pointer-events:none!important;position:relative!important;width:100%!important}.zoom-area[data-v-b88921f2]{position:absolute!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important;border-style:solid;border-color:#1baae8;overflow:visible!important}.corner[data-v-b88921f2]{position:absolute;border-color:#fff;border-style:solid;width:10px;height:10px;opacity:.7}.corner[data-v-b88921f2]:hover{opacity:1}.corner1[data-v-b88921f2]{top:0;left:0;border-width:3px 0 0 3px;cursor:nwse-resize}.corner2[data-v-b88921f2]{top:0;right:0;border-width:3px 3px 0 0;cursor:nesw-resize}.corner3[data-v-b88921f2]{bottom:0;right:0;border-width:0 3px 3px 0;cursor:nwse-resize}.corner4[data-v-b88921f2]{bottom:0;left:0;border-width:0 0 3px 3px;cursor:nesw-resize}.extend[data-v-b88921f2]{color:#fff;top:0;left:0;width:100%;height:100%;cursor:move}.extend.outer[data-v-b88921f2]{width:100%;height:100%;position:absolute;border-style:solid;-webkit-box-sizing:content-box;box-sizing:content-box;opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s}.extend.outer[data-v-b88921f2]:hover{opacity:.3}.extend.inner[data-v-b88921f2]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.extend.inner:hover .drag-inset[data-v-b88921f2]{opacity:.3}.extend.inner:hover .drag-inset:hover.drag-inset[data-v-b88921f2]{opacity:0}.drag-inset[data-v-b88921f2]{position:relative;-webkit-box-shadow:0 0 0 4080px #fff;box-shadow:0 0 0 4080px #fff;top:0;left:0;width:100%;height:100%;cursor:-webkit-grab;cursor:grab;opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s}.grid[data-v-b88921f2]{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}.grid-item[data-v-b88921f2]{position:absolute;border-color:hsla(0,0%,100%,.7);border-style:dashed;width:50%;height:50%;-webkit-box-sizing:border-box;box-sizing:border-box}.grid-item[data-v-b88921f2]:first-child{top:0;left:0;border-width:0 1px 1px 0;-webkit-transform:translate(.5px,.5px);transform:translate(.5px,.5px)}.grid-item[data-v-b88921f2]:nth-child(2){top:0;right:0;border-width:0 0 1px 0;-webkit-transform:translate(-.5px,.5px);transform:translate(-.5px,.5px)}.grid-item[data-v-b88921f2]:nth-child(3){bottom:0;left:0;border-width:0 1px 0 0;-webkit-transform:translate(.5px,-.5px);transform:translate(.5px,-.5px)}.grid-item[data-v-b88921f2]:nth-child(4){bottom:0;right:0;border-width:0;-webkit-transform:translate(-.5px,-.5px);transform:translate(-.5px,-.5px)}.wrap[data-v-c8cd3b90]{position:relative!important;overflow:hidden!important;width:100%!important;height:100%!important;cursor:-webkit-grab;cursor:grab}.stem-outer[data-v-c8cd3b90]{display:block!important}.stem-bg[data-v-c8cd3b90],.stem-outer[data-v-c8cd3b90]{position:relative!important;top:0!important;left:0!important;width:100%!important}.img-center[data-v-c8cd3b90]{width:100%!important;position:absolute!important;top:50%!important;left:50%!important;-webkit-transform:translate(-50%,-50%)!important;transform:translate(-50%,-50%)!important}.img-scale[data-v-c8cd3b90],.img-translate[data-v-c8cd3b90]{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important}.img[data-v-c8cd3b90]{display:block!important}.cover[data-v-c8cd3b90],.img[data-v-c8cd3b90]{position:absolute!important;top:0!important;left:0!important;width:100%!important}.cover[data-v-c8cd3b90]{pointer-events:none!important;height:100%!important;overflow:hidden!important}.area[data-v-c8cd3b90]{position:absolute!important;top:50%!important;left:50%!important;-webkit-transform:translate(-50%,-50%)!important;transform:translate(-50%,-50%)!important;border-style:solid}.stem-area[data-v-c8cd3b90]{display:block!important;position:relative!important}.grid[data-v-c8cd3b90]{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}.grid-item[data-v-c8cd3b90]{position:absolute;border-color:hsla(0,0%,100%,.7);border-style:dashed;width:50%;height:50%;-webkit-box-sizing:border-box;box-sizing:border-box}.grid-item[data-v-c8cd3b90]:first-child{top:0;left:0;border-width:0 1px 1px 0;-webkit-transform:translate(.5px,.5px);transform:translate(.5px,.5px)}.grid-item[data-v-c8cd3b90]:nth-child(2){top:0;right:0;border-width:0 0 1px 0;-webkit-transform:translate(-.5px,.5px);transform:translate(-.5px,.5px)}.grid-item[data-v-c8cd3b90]:nth-child(3){bottom:0;left:0;border-width:0 1px 0 0;-webkit-transform:translate(.5px,-.5px);transform:translate(.5px,-.5px)}.grid-item[data-v-c8cd3b90]:nth-child(4){bottom:0;right:0;border-width:0;-webkit-transform:translate(-.5px,-.5px);transform:translate(-.5px,-.5px)}",""])},852:function(t,o,i){"use strict";var e=i(144);i.n(e).a},853:function(t,o,i){(t.exports=i(2)(!1)).push([t.i,"#logo-edit .zoom-area.shadow {\n  box-shadow: 0px 0px 0px 100vw !important;\n}",""])},854:function(t,o,i){"use strict";var e=i(145);i.n(e).a},855:function(t,o,i){(t.exports=i(2)(!1)).push([t.i,"#logo-edit[data-v-f99de87e] {\n  width: 100%;\n  background: white;\n  padding: 20px 30px;\n}\n#logo-edit .logo-image-part-holder[data-v-f99de87e] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-column-gap: 20px;\n  max-width: 800px;\n}\n#logo-edit .logo-image-origin[data-v-f99de87e] {\n  width: 400px;\n  /*height:300px;*/\n}\n#logo-edit .logo-image-part-holder .placeholder[data-v-f99de87e] {\n  height: 300px;\n  text-align: center;\n  padding: 20px;\n  font-size: 20px;\n  background-color: lightgray;\n  padding-top: 140px;\n}\n#logo-edit .uploadButton[data-v-f99de87e] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n#logo-edit .uploadButton img[data-v-f99de87e] {\n  width: auto;\n  height: 50px;\n  margin: 0 auto;\n}\n#logo-edit .preview-title[data-v-f99de87e] {\n  font-size: 20px;\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n#logo-edit .preview-holder[data-v-f99de87e] {\n  margin-left: 40px;\n}\n#logo-edit .logo-page-title[data-v-f99de87e] {\n  font-size: 20px;\n  margin-bottom: 30px;\n  font-weight: bold;\n}\n#logo-edit .site-title-input[data-v-f99de87e] {\n  padding: 5px 10px;\n  min-width: 250px;\n}\n#logo-edit .submit-button[data-v-f99de87e] {\n  padding: 5px 10px;\n  width: 100px;\n  font-weight: bold;\n  font-size: 16px;\n  margin-top: 15px;\n}\n#logo-edit .site-setting-alert[data-v-f99de87e] {\n  visibility: hidden;\n  opacity: 0;\n  height: 0;\n  -webkit-transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n#logo-edit .site-setting-alert.show[data-v-f99de87e] {\n  visibility: visible;\n  opacity: 1;\n  height: auto;\n}",""])}}]);