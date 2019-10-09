(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[165],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var restaurant_components_plugins_DataTable_DataTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restaurant_components/plugins/DataTable/DataTable.vue */ "./resources/assets/restaurant/components/plugins/DataTable/DataTable.vue");
/* harmony import */ var restaurant_resources_common_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! restaurant_resources/common/api.service */ "./resources/assets/restaurant/common/api.service.js");
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "category_list",
  id: "category_list",
  components: {
    datatable: restaurant_components_plugins_DataTable_DataTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      windowText: null,
      someValueSetOnClick: null,
      tableData: [],
      action: {},
      columndata: [{
        label: 'No',
        field: 'no',
        numeric: false,
        html: false
      }, {
        label: 'Image',
        field: 'image',
        numeric: false,
        html: true
      }, {
        label: 'Category Name',
        field: 'name',
        numeric: false,
        html: false
      }, {
        label: 'Description',
        field: 'description',
        numeric: false,
        html: false
      }, {
        label: 'Sequence',
        field: 'sequence',
        numeric: false,
        html: false
      }, {
        label: 'Actions',
        field: 'action',
        numeric: false,
        html: true
      }]
    };
  },
  methods: {},
  mounted: function mounted() {
    var _this = this;

    restaurant_resources_common_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].get('restaurant/category_list').then(function (response) {
      _this.tableData = response.data.data;

      _this.tableData.forEach(function (item, index) {
        _this.$set(item, "action", "<a class='clickable edit' href='#/edit_category/".concat(item.id, "'><i class='fas fa-edit'></i> </a>\n                    <a class='clickable delete' href=\"javascript:void(0)\"><i class='fas fa-trash' action=\"delete\" target_id=\"").concat(item.id, "\"></i> </a>"));

        _this.$set(item, "image", "<img src='".concat(item.image, "'>"));
      });
    })["catch"](function (error) {
      console.log(error);
    });
  },
  watch: {
    action: function action(newVal) {
      var _this2 = this;

      if (newVal.id != null) {
        var id = newVal.id;
        var action = newVal.action;

        if (id && action) {
          // if there is id and action
          var deleteIndex;

          for (var i = 0; i < this.tableData.length; i++) {
            if (id == this.tableData[i].id) deleteIndex = i;
          }

          this.tableData.splice(deleteIndex, 1);
          restaurant_resources_common_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].get("restaurant/delete_category/".concat(id)).then(function (response) {
            var tableData = _this2.tableData;

            for (var _i = deleteIndex; _i <= tableData.length; _i++) {
              tableData[_i]['sequence'] = tableData[_i]['sequence'] - 1;
            }

            _this2.tableData = tableData;
          });
        }

        this.action.action = null;
        this.action.id = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.democlass {\n    color: red;\n}\ntd,th{\n    text-align:center;\n}\ntd img{\n    width:150px;\n    height:auto;\n}\ntd btn{\n    width:70px;\n}\na.delete i,a.edit i{\n    font-size:25px;\n    margin-right:10px;\n}\na.edit i{\n    color:#207909;\n}\na.delete i{\n    color:#d0280d;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./food_category_list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=template&id=ef5c6c58&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=template&id=ef5c6c58& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row", attrs: { id: "user_list" } }, [
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-primary-card",
            attrs: { header: "Food Category Table", "header-tag": "h4" }
          },
          [
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _c("datatable", {
                  attrs: {
                    title: "Food Categories",
                    rows: _vm.tableData,
                    columns: _vm.columndata
                  },
                  model: {
                    value: _vm.action,
                    callback: function($$v) {
                      _vm.action = $$v
                    },
                    expression: "action"
                  }
                })
              ],
              1
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/restaurant/components/pages/food_category_list.vue":
/*!*****************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/food_category_list.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _food_category_list_vue_vue_type_template_id_ef5c6c58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food_category_list.vue?vue&type=template&id=ef5c6c58& */ "./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=template&id=ef5c6c58&");
/* harmony import */ var _food_category_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food_category_list.vue?vue&type=script&lang=js& */ "./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _food_category_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food_category_list.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _food_category_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _food_category_list_vue_vue_type_template_id_ef5c6c58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _food_category_list_vue_vue_type_template_id_ef5c6c58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/restaurant/components/pages/food_category_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_food_category_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./food_category_list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_food_category_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_food_category_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./food_category_list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_food_category_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_food_category_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_food_category_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_food_category_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_food_category_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=template&id=ef5c6c58&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=template&id=ef5c6c58& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_food_category_list_vue_vue_type_template_id_ef5c6c58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./food_category_list.vue?vue&type=template&id=ef5c6c58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/food_category_list.vue?vue&type=template&id=ef5c6c58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_food_category_list_vue_vue_type_template_id_ef5c6c58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_food_category_list_vue_vue_type_template_id_ef5c6c58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);