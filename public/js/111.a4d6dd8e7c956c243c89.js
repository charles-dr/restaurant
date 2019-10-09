(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{929:function(t,e,n){t.exports=function(){"use strict";var t=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),e=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.data={}}return t(e,[{key:"new",value:function(t){return this.data[t]||(this.data[t]={className:"",List:[],KEY_MAP:{}}),this.data[t]}},{key:"get",value:function(t){return this.data[t]}}]),e}(),n={listeners:{},$on:function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},$once:function(t,e){var n=this;this.$on(t,(function r(){n.$off(t,r);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];e.apply(n,o)}))},$off:function(t,e){var n=this.listeners[t];this.listeners[t]=e&&n?this.listeners[t].filter((function(t){return t!==e})):[]},$emit:function(t,e){var n=this.listeners[t];n&&n.length>0&&n.forEach((function(t){t(e)}))}},r={on:function(t,e,n){t.addEventListener(e,n)},off:function(t,e,n){t.removeEventListener(e,n)},addClass:function(t,e){if(arguments.length<2)t.classList.add(e);else for(var n=1,r=arguments.length;n<r;n++)t.classList.add(arguments[n])},removeClass:function(t,e){if(arguments.length<2)t.classList.remove(e);else for(var n=1,r=arguments.length;n<r;n++)t.classList.remove(arguments[n])}};return function(t,i){var o="1"===t.version.split(".")[0],s=new e,u=null;function a(t){var e=v(t.target),n=e.getAttribute("drag_group"),i=e.getAttribute("drag_key"),o=e.getAttribute("comb"),a=s.new(n),c=a.KEY_MAP[i],f=a.List.indexOf(c),l=a.List.filter((function(t){return t[o]}));r.addClass(e,"dragging"),t.dataTransfer&&(t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text",JSON.stringify(c))),u={index:f,item:c,el:e,group:n,groupArr:l}}function c(t){return t.preventDefault&&t.preventDefault(),!1}function f(e){var r=void 0;if("touchmove"===e.type?(e.stopPropagation(),e.preventDefault(),r=v(r=function(t){var e=t.touches[0];return document.elementFromPoint(e.clientX,e.clientY)}(e))):r=v(e.target),r&&u){var i=r.getAttribute("drag_group");if(i===u.group&&u.el&&u.item&&r!==u.el){var a=r.getAttribute("drag_key"),c=s.new(i),f=c.KEY_MAP[a];if(f!==u.item){var l=c.List.indexOf(f),h=c.List.indexOf(u.item);!function(e,n,r){var i=e[r];o?(e.$set(r,e[n]),e.$set(n,i)):(t.set(e,r,e[n]),t.set(e,n,i))}(c.List,h,l),u.groupArr.forEach((function(t){t!=u.item&&c.List.splice(c.List.indexOf(t),1)}));var d,p=c.List.indexOf(u.item);u.groupArr.length&&(d=c.List).splice.apply(d,[p,1].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(u.groupArr))),u.index=l,n.$emit("dragged",{draged:u.item,to:f,value:c.value,group:i})}}}}function l(t){r.removeClass(v(t.target),"drag-over","drag-enter")}function h(t){}function d(t){var e=v(t.target);r.removeClass(e,"dragging","drag-over","drag-enter"),u=null;var i=e.getAttribute("drag_group");n.$emit("dragend",{group:i})}function p(t){return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),!1}function v(t){if(t)for(;t.parentNode;){if(t.getAttribute&&t.getAttribute("drag_block"))return t;t=t.parentNode}}function m(t,e,n){var i=e.value.item,u=e.value.list,v=s.new(e.value.group),m=o?e.value.key:n.key;v.value=e.value,v.className=e.value.className,v.KEY_MAP[m]=i,u&&v.List!==u&&(v.List=u),t.setAttribute("draggable","true"),t.setAttribute("drag_group",e.value.group),t.setAttribute("drag_block",e.value.group),t.setAttribute("drag_key",m),t.setAttribute("comb",e.value.comb),r.on(t,"dragstart",a),r.on(t,"dragenter",f),r.on(t,"dragover",c),r.on(t,"drag",h),r.on(t,"dragleave",l),r.on(t,"dragend",d),r.on(t,"drop",p),r.on(t,"touchstart",a),r.on(t,"touchmove",f),r.on(t,"touchend",d)}function g(t,e,n){var i=s.new(e.value.group),u=o?e.value.key:n.key;i.KEY_MAP[u]=void 0,r.off(t,"dragstart",a),r.off(t,"dragenter",f),r.off(t,"dragover",c),r.off(t,"drag",h),r.off(t,"dragleave",l),r.off(t,"dragend",d),r.off(t,"drop",p),r.off(t,"touchstart",a),r.off(t,"touchmove",f),r.off(t,"touchend",d)}t.prototype.$dragging=n,o?t.directive("dragging",{update:function(t,e){m(this.el,{modifiers:this.modifiers,arg:this.arg,value:t,oldValue:e})},unbind:function(t,e){g(this.el,{modifiers:this.modifiers,arg:this.arg,value:t||{group:this.el.getAttribute("drag_group")},oldValue:e})}}):t.directive("dragging",{bind:m,update:function(t,e,n){var r=s.new(e.value.group),i=e.value.item,o=e.value.list,u=n.key,a=r.KEY_MAP[u];i&&a!==i&&(r.KEY_MAP[u]=i),o&&r.List!==o&&(r.List=o)},unbind:g})}}()},930:function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=39)}([function(t,e,n){var r=n(34)("wks"),i=n(22),o=n(1).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(12)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(5),i=n(32);t.exports=n(2)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(6),i=n(54),o=n(70),s=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(23);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(1),i=n(11),o=n(7),s=n(3),u=function(t,e,n){var a,c,f,l=t&u.F,h=t&u.G,d=t&u.S,p=t&u.P,v=t&u.B,m=t&u.W,g=h?i:i[e]||(i[e]={}),y=g.prototype,x=h?r:d?r[e]:(r[e]||{}).prototype;for(a in h&&(n=e),n)(c=!l&&x&&void 0!==x[a])&&a in g||(f=c?x[a]:n[a],g[a]=h&&"function"!=typeof x[a]?n[a]:v&&c?o(f,r):m&&x[a]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):p&&"function"==typeof f?o(Function.call,f):f,p&&((g.virtual||(g.virtual={}))[a]=f,t&u.R&&y&&!y[a]&&s(y,a,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports={}},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(7),i=n(57),o=n(55),s=n(6),u=n(21),a=n(71),c={},f={};(e=t.exports=function(t,e,n,l,h){var d,p,v,m,g=h?function(){return t}:a(t),y=r(n,l,e?2:1),x=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(d=u(t.length);d>x;x++)if((m=e?y(s(p=t[x])[0],p[1]):y(t[x]))===c||m===f)return m}else for(v=g.call(t);!(p=v.next()).done;)if((m=i(v,y,p.value,e))===c||m===f)return m}).BREAK=c,e.RETURN=f},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var r=n(59),i=n(8),o=n(64),s=n(3),u=n(9),a=n(10),c=n(58),f=n(17),l=n(61),h=n(0)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,v,m,g,y){c(n,e,v);var x,b,w,_=function(t){if(!d&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+" Iterator",O="values"==m,S=!1,L=t.prototype,M=L[h]||L["@@iterator"]||m&&L[m],A=M||_(m),Y=m?O?_("entries"):A:void 0,X="Array"==e&&L.entries||M;if(X&&(w=l(X.call(new t)))!==Object.prototype&&w.next&&(f(w,E,!0),r||u(w,h)||s(w,h,p)),O&&M&&"values"!==M.name&&(S=!0,A=function(){return M.call(this)}),r&&!y||!d&&!S&&L[h]||s(L,h,A),a[e]=A,a[E]=p,m)if(x={values:O?A:_("values"),keys:g?A:_("keys"),entries:Y},y)for(b in x)b in L||o(L,b,x[b]);else i(i.P+i.F*(d||S),e,x);return x}},function(t,e,n){var r=n(5).f,i=n(9),o=n(0)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(34)("keys"),i=n(22);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(28),i=n(15);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(19),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(14),i=n(0)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){var r=n(4),i=n(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(14);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(22)("meta"),i=n(4),o=n(9),s=n(5).f,u=0,a=Object.isExtensible||function(){return!0},c=!n(12)((function(){return a(Object.preventExtensions({}))})),f=function(t){s(t,r,{value:{i:"O"+ ++u,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!a(t))return"F";if(!e)return"E";f(t)}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!a(t))return!0;if(!e)return!1;f(t)}return t[r].w},onFreeze:function(t){return c&&l.NEED&&a(t)&&!o(t,r)&&f(t),t}}},function(t,e,n){var r=n(6),i=n(60),o=n(27),s=n(18)("IE_PROTO"),u=function(){},a=function(){var t,e=n(26)("iframe"),r=o.length;for(e.style.display="none",n(53).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[o[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[s]=t):n=a(),void 0===e?n:i(n,e)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(3);t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i]);return t}},function(t,e,n){var r=n(1),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e,n){n(84);var r=n(82)(n(38),n(83),"data-v-2bcd502f",null);r.options.__file="/Applications/mampstack-7.0.26-1/apache2/htdocs/vdr/src/components/vue-draggable-resizable.vue",r.esModule&&Object.keys(r.esModule).some((function(t){return"default"!==t&&"__esModule"!==t}))&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] vue-draggable-resizable.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(42),i=n.n(r),o=n(40);e.default={replace:!0,name:"VueDraggableResizable",props:{active:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},w:{type:Number,default:200,validator:function(t){return t>0}},h:{type:Number,default:200,validator:function(t){return t>0}},minw:{type:Number,default:50,validator:function(t){return t>=0}},minh:{type:Number,default:50,validator:function(t){return t>=0}},x:{type:Number,default:0,validator:function(t){return"number"==typeof t}},y:{type:Number,default:0,validator:function(t){return"number"==typeof t}},z:{type:[String,Number],default:"auto",validator:function(t){return"string"==typeof t?"auto"===t:t>=0}},handles:{type:Array,default:function(){return["tl","tm","tr","mr","br","bm","bl","ml"]},validator:function(t){var e=new i.a(["tl","tm","tr","mr","br","bm","bl","ml"]);return new i.a(t.filter((function(t){return e.has(t)}))).size===t.length}},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},axis:{type:String,default:"both",validator:function(t){return-1!==["x","y","both"].indexOf(t)}},grid:{type:Array,default:function(){return[1,1]}},parent:{type:Boolean,default:!1},maximize:{type:Boolean,default:!1}},created:function(){this.parentX=0,this.parentW=9999,this.parentY=0,this.parentH=9999,this.mouseX=0,this.mouseY=0,this.lastMouseX=0,this.lastMouseY=0,this.mouseOffX=0,this.mouseOffY=0,this.elmX=0,this.elmY=0,this.elmW=0,this.elmH=0},mounted:function(){document.documentElement.addEventListener("mousemove",this.handleMove,!0),document.documentElement.addEventListener("mousedown",this.deselect,!0),document.documentElement.addEventListener("mouseup",this.handleUp,!0),document.documentElement.addEventListener("touchmove",this.handleMove,!0),document.documentElement.addEventListener("touchend touchcancel",this.deselect,!0),document.documentElement.addEventListener("touchstart",this.handleUp,!0),document.documentElement.addEventListener("touchstart",this.deselect,!0),this.elmX=parseInt(this.$el.style.left),this.elmY=parseInt(this.$el.style.top),this.elmW=this.$el.offsetWidth||this.$el.clientWidth,this.elmH=this.$el.offsetHeight||this.$el.clientHeight,this.reviewDimensions()},beforeDestroy:function(){document.documentElement.removeEventListener("mousemove",this.handleMove,!0),document.documentElement.removeEventListener("mousedown",this.deselect,!0),document.documentElement.removeEventListener("mouseup",this.handleUp,!0),document.documentElement.removeEventListener("touchmove",this.handleMove,!0),document.documentElement.removeEventListener("touchend touchcancel",this.deselect,!0),document.documentElement.removeEventListener("touchstart",this.handleUp,!0),document.documentElement.removeEventListener("touchstart",this.deselect,!0)},data:function(){return{top:this.y,left:this.x,width:this.w,height:this.h,resizing:!1,dragging:!1,enabled:this.active,handle:null,zIndex:this.z}},methods:{reviewDimensions:function(){if(this.minw>this.w&&(this.width=this.minw),this.minh>this.h&&(this.height=this.minh),this.parent){var t=parseInt(this.$el.parentNode.clientWidth,10),e=parseInt(this.$el.parentNode.clientHeight,10);this.parentW=t,this.parentH=e,this.w>this.parentW&&(this.width=t),this.h>this.parentH&&(this.height=e),this.x+this.w>this.parentW&&(this.width=t-this.x),this.y+this.h>this.parentH&&(this.height=e-this.y)}this.elmW=this.width,this.elmH=this.height,this.$emit("resizing",this.left,this.top,this.width,this.height)},elmDown:function(t){var e=t.target||t.srcElement;if(this.$el.contains(e)){if(this.dragHandle&&!n.i(o.a)(e,this.dragHandle,this.$el)||this.dragCancel&&n.i(o.a)(e,this.dragCancel,this.$el))return;this.reviewDimensions(),this.enabled||(this.enabled=!0,this.$emit("activated"),this.$emit("update:active",!0)),this.draggable&&(this.dragging=!0)}},deselect:function(t){-1!==t.type.indexOf("touch")?(this.mouseX=t.changedTouches[0].clientX,this.mouseY=t.changedTouches[0].clientY):(this.mouseX=t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouseY=t.pageY||t.clientY+document.documentElement.scrollTop),this.lastMouseX=this.mouseX,this.lastMouseY=this.mouseY;var e=t.target||t.srcElement,n=new RegExp("handle-([trmbl]{2})","");this.$el.contains(e)||n.test(e.className)||this.enabled&&(this.enabled=!1,this.$emit("deactivated"),this.$emit("update:active",!1))},handleDown:function(t,e){this.handle=t,e.cancelable&&(e.stopPropagation(),e.preventDefault()),this.resizing=!0},fillParent:function(t){var e=this;if(this.parent&&this.resizable&&this.maximize){var n=!1;window.requestAnimationFrame((function t(){n||window.requestAnimationFrame(t),"x"===e.axis?e.width===e.parentW&&e.left===e.parentX&&(n=!0):"y"===e.axis?e.height===e.parentH&&e.top===e.parentY&&(n=!0):"both"===e.axis&&e.width===e.parentW&&e.height===e.parentH&&e.top===e.parentY&&e.left===e.parentX&&(n=!0),"x"!==e.axis&&"both"!==e.axis||(e.width<e.parentW&&(e.width++,e.elmW++),e.left>e.parentX&&(e.left--,e.elmX--)),"y"!==e.axis&&"both"!==e.axis||(e.height<e.parentH&&(e.height++,e.elmH++),e.top>e.parentY&&(e.top--,e.elmY--)),e.$emit("resizing",e.left,e.top,e.width,e.height)}))}},handleMove:function(t){var e=-1!==t.type.indexOf("touchmove");this.mouseX=e?t.touches[0].clientX:t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouseY=e?t.touches[0].clientY:t.pageY||t.clientY+document.documentElement.scrollTop;var n=this.mouseX-this.lastMouseX+this.mouseOffX,r=this.mouseY-this.lastMouseY+this.mouseOffY;this.mouseOffX=this.mouseOffY=0,this.lastMouseX=this.mouseX,this.lastMouseY=this.mouseY;var i=n,o=r;this.resizing?(this.handle.indexOf("t")>=0&&(this.elmH-o<this.minh?this.mouseOffY=o-(r=this.elmH-this.minh):this.parent&&this.elmY+o<this.parentY&&(this.mouseOffY=o-(r=this.parentY-this.elmY)),this.elmY+=r,this.elmH-=r),this.handle.indexOf("b")>=0&&(this.elmH+o<this.minh?this.mouseOffY=o-(r=this.minh-this.elmH):this.parent&&this.elmY+this.elmH+o>this.parentH&&(this.mouseOffY=o-(r=this.parentH-this.elmY-this.elmH)),this.elmH+=r),this.handle.indexOf("l")>=0&&(this.elmW-i<this.minw?this.mouseOffX=i-(n=this.elmW-this.minw):this.parent&&this.elmX+i<this.parentX&&(this.mouseOffX=i-(n=this.parentX-this.elmX)),this.elmX+=n,this.elmW-=n),this.handle.indexOf("r")>=0&&(this.elmW+i<this.minw?this.mouseOffX=i-(n=this.minw-this.elmW):this.parent&&this.elmX+this.elmW+i>this.parentW&&(this.mouseOffX=i-(n=this.parentW-this.elmX-this.elmW)),this.elmW+=n),this.left=Math.round(this.elmX/this.grid[0])*this.grid[0],this.top=Math.round(this.elmY/this.grid[1])*this.grid[1],this.width=Math.round(this.elmW/this.grid[0])*this.grid[0],this.height=Math.round(this.elmH/this.grid[1])*this.grid[1],this.$emit("resizing",this.left,this.top,this.width,this.height)):this.dragging&&(this.parent&&(this.elmX+i<this.parentX?this.mouseOffX=i-(n=this.parentX-this.elmX):this.elmX+this.elmW+i>this.parentW&&(this.mouseOffX=i-(n=this.parentW-this.elmX-this.elmW)),this.elmY+o<this.parentY?this.mouseOffY=o-(r=this.parentY-this.elmY):this.elmY+this.elmH+o>this.parentH&&(this.mouseOffY=o-(r=this.parentH-this.elmY-this.elmH))),this.elmX+=n,this.elmY+=r,"x"!==this.axis&&"both"!==this.axis||(this.left=Math.round(this.elmX/this.grid[0])*this.grid[0]),"y"!==this.axis&&"both"!==this.axis||(this.top=Math.round(this.elmY/this.grid[1])*this.grid[1]),this.$emit("dragging",this.left,this.top))},handleUp:function(t){-1!==t.type.indexOf("touch")&&(this.lastMouseX=t.changedTouches[0].clientX,this.lastMouseY=t.changedTouches[0].clientY),this.handle=null,this.resizing&&(this.resizing=!1,this.$emit("resizestop",this.left,this.top,this.width,this.height)),this.dragging&&(this.dragging=!1,this.$emit("dragstop",this.left,this.top)),this.elmX=this.left,this.elmY=this.top}},computed:{style:function(){return{top:this.top+"px",left:this.left+"px",width:this.width+"px",height:this.height+"px",zIndex:this.zIndex}}},watch:{active:function(t){this.enabled=t},z:function(t){(t>=0||"auto"===t)&&(this.zIndex=t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(37),i=n.n(r);n.d(e,"default",(function(){return i.a}))},function(t,e,n){"use strict";e.a=function(t,e,i){var o=t,s=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].find((function(t){return n.i(r.a)(o[t])}));if(!n.i(r.a)(o[s]))return!1;do{if(o[s](e))return!0;if(o===i)return!1;o=o.parentNode}while(o);return!1};var r=n(41)},function(t,e,n){"use strict";e.a=function(t){return"function"==typeof t||"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){t.exports={default:n(43),__esModule:!0}},function(t,e,n){n(73),n(75),n(79),n(74),n(78),n(77),n(76),t.exports=n(11).Set},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(13);t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},function(t,e,n){var r=n(20),i=n(21),o=n(69);t.exports=function(t){return function(e,n,s){var u,a=r(e),c=i(a.length),f=o(s,c);if(t&&n!=n){for(;c>f;)if((u=a[f++])!=u)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(7),i=n(28),o=n(35),s=n(21),u=n(49);t.exports=function(t,e){var n=1==t,a=2==t,c=3==t,f=4==t,l=6==t,h=5==t||l,d=e||u;return function(e,u,p){for(var v,m,g=o(e),y=i(g),x=r(u,p,3),b=s(y.length),w=0,_=n?d(e,b):a?d(e,0):void 0;b>w;w++)if((h||w in y)&&(m=x(v=y[w],w,g),t))if(n)_[w]=m;else if(m)switch(t){case 3:return!0;case 5:return v;case 6:return w;case 2:_.push(v)}else if(f)return!1;return l?-1:c||f?f:_}}},function(t,e,n){var r=n(4),i=n(56),o=n(0)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var r=n(48);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){"use strict";var r=n(5).f,i=n(31),o=n(33),s=n(7),u=n(24),a=n(13),c=n(16),f=n(29),l=n(67),h=n(2),d=n(30).fastKey,p=n(36),v=h?"_s":"size",m=function(t,e){var n,r=d(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,c){var f=t((function(t,r){u(t,f,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[v]=0,null!=r&&a(r,n,t[c],t)}));return o(f.prototype,{clear:function(){for(var t=p(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=p(this,e),r=m(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[v]--}return!!r},forEach:function(t){p(this,e);for(var n,r=s(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(p(this,e),t)}}),h&&r(f.prototype,"size",{get:function(){return p(this,e)[v]}}),f},def:function(t,e,n){var r,i,o=m(t,e);return o?o.v=n:(t._l=o={i:i=d(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[v]++,"F"!==i&&(t._i[i]=o)),t},getEntry:m,setStrong:function(t,e,n){c(t,e,(function(t,n){this._t=p(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?f(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,f(1))}),n?"entries":"values",!n,!0),l(e)}}},function(t,e,n){var r=n(25),i=n(45);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,e,n){"use strict";var r=n(1),i=n(8),o=n(30),s=n(12),u=n(3),a=n(33),c=n(13),f=n(24),l=n(4),h=n(17),d=n(5).f,p=n(47)(0),v=n(2);t.exports=function(t,e,n,m,g,y){var x=r[t],b=x,w=g?"set":"add",_=b&&b.prototype,E={};return v&&"function"==typeof b&&(y||_.forEach&&!s((function(){(new b).entries().next()})))?(b=e((function(e,n){f(e,b,t,"_c"),e._c=new x,null!=n&&c(n,g,e[w],e)})),p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),(function(t){var e="add"==t||"set"==t;t in _&&(!y||"clear"!=t)&&u(b.prototype,t,(function(n,r){if(f(this,b,t),!e&&y&&!l(n))return"get"==t&&void 0;var i=this._c[t](0===n?0:n,r);return e?this:i}))})),y||d(b.prototype,"size",{get:function(){return this._c.size}})):(b=m.getConstructor(e,t,g,w),a(b.prototype,n),o.NEED=!0),h(b,t),E[t]=b,i(i.G+i.W+i.F,E),y||m.setStrong(b,t,g),b}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){t.exports=!n(2)&&!n(12)((function(){return 7!=Object.defineProperty(n(26)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(10),i=n(0)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){var r=n(14);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(6);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){"use strict";var r=n(31),i=n(32),o=n(17),s={};n(3)(s,n(0)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e){t.exports=!0},function(t,e,n){var r=n(5),i=n(6),o=n(63);t.exports=n(2)?Object.defineProperties:function(t,e){i(t);for(var n,s=o(e),u=s.length,a=0;u>a;)r.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var r=n(9),i=n(35),o=n(18)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var r=n(9),i=n(20),o=n(46)(!1),s=n(18)("IE_PROTO");t.exports=function(t,e){var n,u=i(t),a=0,c=[];for(n in u)n!=s&&r(u,n)&&c.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(62),i=n(27);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";var r=n(8),i=n(23),o=n(7),s=n(13);t.exports=function(t){r(r.S,t,{from:function(t){var e,n,r,u,a=arguments[1];return i(this),(e=void 0!==a)&&i(a),null==t?new this:(n=[],e?(r=0,u=o(a,arguments[2],2),s(t,!1,(function(t){n.push(u(t,r++))}))):s(t,!1,n.push,n),new this(n))}})}},function(t,e,n){"use strict";var r=n(8);t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,e=Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},function(t,e,n){"use strict";var r=n(1),i=n(11),o=n(5),s=n(2),u=n(0)("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t];s&&e&&!e[u]&&o.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(19),i=n(15);t.exports=function(t){return function(e,n){var o,s,u=String(i(e)),a=r(n),c=u.length;return a<0||a>=c?t?"":void 0:(o=u.charCodeAt(a))<55296||o>56319||a+1===c||(s=u.charCodeAt(a+1))<56320||s>57343?t?u.charAt(a):o:t?u.slice(a,a+2):s-56320+(o-55296<<10)+65536}}},function(t,e,n){var r=n(19),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(25),i=n(0)("iterator"),o=n(10);t.exports=n(11).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){"use strict";var r=n(44),i=n(29),o=n(10),s=n(20);t.exports=n(16)(Array,"Array",(function(t,e){this._t=s(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){},function(t,e,n){"use strict";var r=n(50),i=n(36);t.exports=n(52)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},function(t,e,n){"use strict";var r=n(68)(!0);n(16)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){n(65)("Set")},function(t,e,n){n(66)("Set")},function(t,e,n){var r=n(8);r(r.P+r.R,"Set",{toJSON:n(51)("Set")})},function(t,e,n){n(72);for(var r=n(1),i=n(3),o=n(10),s=n(0)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var c=u[a],f=r[c],l=f&&f.prototype;l&&!l[s]&&i(l,s,c),o[c]=o.Array}},function(t,e,n){(t.exports=n(81)()).push([t.i,"\n.vdr[data-v-2bcd502f] {\n  touch-action: none;\n  position: absolute;\n  box-sizing: border-box;\n}\n.handle[data-v-2bcd502f] {\n  box-sizing: border-box;\n  display: none;\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  font-size: 1px;\n  background: #EEE;\n  border: 1px solid #333;\n}\n.handle-tl[data-v-2bcd502f] {\n  top: -10px;\n  left: -10px;\n  cursor: nw-resize;\n}\n.handle-tm[data-v-2bcd502f] {\n  top: -10px;\n  left: 50%;\n  margin-left: -5px;\n  cursor: n-resize;\n}\n.handle-tr[data-v-2bcd502f] {\n  top: -10px;\n  right: -10px;\n  cursor: ne-resize;\n}\n.handle-ml[data-v-2bcd502f] {\n  top: 50%;\n  margin-top: -5px;\n  left: -10px;\n  cursor: w-resize;\n}\n.handle-mr[data-v-2bcd502f] {\n  top: 50%;\n  margin-top: -5px;\n  right: -10px;\n  cursor: e-resize;\n}\n.handle-bl[data-v-2bcd502f] {\n  bottom: -10px;\n  left: -10px;\n  cursor: sw-resize;\n}\n.handle-bm[data-v-2bcd502f] {\n  bottom: -10px;\n  left: 50%;\n  margin-left: -5px;\n  cursor: s-resize;\n}\n.handle-br[data-v-2bcd502f] {\n  bottom: -10px;\n  right: -10px;\n  cursor: se-resize;\n}\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n[class*=\"handle-\"][data-v-2bcd502f]:before {\n    content: '';\n    left: -10px;\n    right: -10px;\n    bottom: -10px;\n    top: -10px;\n    position: absolute;\n}\n}\n",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e){t.exports=function(t,e,n,r){var i,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,o=t.default);var u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var a=Object.create(u.computed||null);Object.keys(r).forEach((function(t){var e=r[t];a[t]=function(){return e}})),u.computed=a}return{esModule:i,exports:o,options:u}}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vdr",class:{draggable:t.draggable,resizable:t.resizable,active:t.enabled,dragging:t.dragging,resizing:t.resizing},style:t.style,on:{mousedown:t.elmDown,touchstart:t.elmDown,dblclick:t.fillParent}},[t._l(t.handles,(function(e){return t.resizable?n("div",{key:e,staticClass:"handle",class:"handle-"+e,style:{display:t.enabled?"block":"none"},on:{mousedown:function(n){t.handleDown(e,n)},touchstart:function(n){t.handleDown(e,n)}}}):t._e()})),t._v(" "),t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){var r=n(80);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(85)("4764308c",r,!1)},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));f[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(p)return v;r.parentNode.removeChild(r)}if(m){var o=d++;r=h||(h=i()),e=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),e=u.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function u(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(86),f={},l=a&&(document.head||document.getElementsByTagName("head")[0]),h=null,d=0,p=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var s=i[o];(u=f[s.id]).refs--,n.push(u)}for(e?r(i=c(t,e)):i=[],o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var a=0;a<u.parts.length;a++)u.parts[a]();delete f[u.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=o[0],u={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}}])}}]);