(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1243:function(t,e,o){"use strict";var r=o(403);o.n(r).a},1244:function(t,e,o){(t.exports=o(2)(!1)).push([t.i,"\n.ql-tooltip.ql-editing{\n    z-index: 99;\n}\n",""])},1596:function(t,e,o){"use strict";o.r(e);var r=o(4),n=o.n(r),i=o(924),a=o.n(i),s=o(925),l=o.n(s);o(1229),o(1232),o(1233),o(1235),o(1237),o(1239),o(1241);n.a.use(a.a),n.a.use(l.a);var c={name:"form_editors",data:function(){return{content:"<h2>Vue quill Editor</h2>",code:"const a = 10",quilleditorOption:{},editorOptions:{tabSize:4,mode:"text/javascript",theme:"monokai",lineNumbers:!0,line:!0,keyMap:"sublime",extraKeys:{Ctrl:"autocomplete"},foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],styleSelectedText:!0,highlightSelectionMatches:{showToken:/\w/,annotateScrollbar:!0}}}},methods:{onEditorChange:function(t){t.editor;var e=t.html;t.text;this.content=e}}},d=(o(1243),o(1)),u=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("b-card",{staticClass:"bg-primary-card",attrs:{header:"Vue-Quill-Editor","header-tag":"h4"}},[o("quill-editor",{ref:"myTextEditor",staticClass:"edi",attrs:{content:t.content,options:t.quilleditorOption},on:{change:function(e){return t.onEditorChange(e)}}})],1)],1),t._v(" "),o("div",{staticClass:"col-lg-12"},[o("b-card",{staticClass:"bg-warning-card",attrs:{header:"Vue-Codemirror","header-tag":"h4"}},[o("codemirror",{attrs:{options:t.editorOptions},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1)],1)])}),[],!1,null,null,null);e.default=u.exports},403:function(t,e,o){var r=o(1244);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(3)(r,n);r.locals&&(t.exports=r.locals)}}]);