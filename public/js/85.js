(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/size_list.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/size_list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_plugins_DataTable_DataTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/plugins/DataTable/DataTable.vue */ "./resources/assets/admin/components/plugins/DataTable/DataTable.vue");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/api.service */ "./resources/assets/restaurant/common/api.service.js");
/* harmony import */ var common_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/api.service */ "./resources/assets/admin/common/api.service.js");
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
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "size_list",
  id: "size_list",
  components: {
    datatable: components_plugins_DataTable_DataTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
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
        label: 'Size Name',
        field: 'name',
        numeric: false,
        html: false
      }, {
        label: 'Actions',
        field: 'action',
        numeric: false,
        html: true
      }],
      restaurant_id: 0,
      api_service: _common_api_service__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  },
  methods: {},
  mounted: function mounted() {
    var _this = this;

    var add_restaurant_id = '';
    var api_service = _common_api_service__WEBPACK_IMPORTED_MODULE_1__["default"];

    if (this.$route.params.restaurant_id) {
      this.restaurant_id = this.$route.params.restaurant_id;
      add_restaurant_id = "/" + this.restaurant_id;
      api_service = common_api_service__WEBPACK_IMPORTED_MODULE_2__["default"];
      this.api_service = api_service;
    }

    api_service.get('restaurant/get_size_list' + add_restaurant_id).then(function (response) {
      _this.tableData = response.data;

      _this.tableData.forEach(function (item, index) {
        _this.$set(item, "action", "<a class='clickable edit' href='#/edit_size/".concat(item.id).concat(add_restaurant_id, "'><i class='fas fa-edit'></i> </a>\n                    <a class='clickable delete' href=\"javascript:void(0)\"><i class='fas fa-trash' action=\"delete\" target_id=\"").concat(item.id, "\"></i> </a>"));
      });
    })["catch"](function (error) {
      console.log(error);
    });
  },
  watch: {
    action: function action(newVal) {
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
          _common_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].get("restaurant/delete_size/".concat(id)).then(function (response) {});
        }

        this.action.action = null;
        this.action.id = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/size_list.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/size_list.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.democlass {\n    color: red;\n}\ntd,th{\n    text-align:center;\n}\ntd img{\n    width:80px;\n    height:80px;\n}\ntd btn{\n    width:70px;\n}\na.delete i,a.edit i{\n    font-size:20px;\n    margin-right:0px;\n}\na.edit i{\n    color:#207909;\n}\na.delete i{\n    color:#d0280d;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/size_list.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/size_list.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./size_list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/size_list.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/size_list.vue?vue&type=template&id=05e31854&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/size_list.vue?vue&type=template&id=05e31854& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
          "div",
          { staticStyle: { "text-align": "right", "margin-bottom": "5px" } },
          [
            _c(
              "router-link",
              {
                attrs: {
                  to:
                    "/add_size/" +
                    (_vm.restaurant_id != 0 ? _vm.restaurant_id : "")
                }
              },
              [
                _c("button", { staticClass: "btn btn-secondary" }, [
                  _vm._v("Add Size")
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-card",
          {
            staticClass: "bg-primary-card",
            attrs: { header: "Size Option Table", "header-tag": "h4" }
          },
          [
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _c("datatable", {
                  attrs: {
                    title: "Food Size Lists",
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

/***/ "./resources/assets/admin/common/api.service.js":
/*!******************************************************!*\
  !*** ./resources/assets/admin/common/api.service.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.min.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.service */ "./resources/assets/admin/common/jwt.service.js");




var ApiService = {
  init: function init() {
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_axios__WEBPACK_IMPORTED_MODULE_2___default.a, axios__WEBPACK_IMPORTED_MODULE_1___default.a);
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.defaults.baseURL = 'api/';
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  },
  setHeader: function setHeader() {
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.defaults.headers.common["Authorization"] = "".concat(_jwt_service__WEBPACK_IMPORTED_MODULE_3__["default"].getToken());
  },
  query: function query(resource, params) {
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.get(resource, params)["catch"](function (error) {
      throw new Error("[RWV] ApiService ".concat(error));
    });
  },
  get: function get(resource) {
    var slug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    if (_jwt_service__WEBPACK_IMPORTED_MODULE_3__["default"].getToken() !== null) {
      this.setHeader();
    } else {}

    var params = '';

    if (!_.isNaN(slug)) {
      params = '?' + slug;
    }

    if (_.isObject(slug)) {
      params = '?' + _.keys(slug).filter(function (key) {
        return slug[key] != null && slug[key] !== 'null';
      }).map(function (key) {
        return key + '=' + slug[key];
      }).join('&');
    }

    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.get("".concat(resource).concat(params))["catch"](function (error) {
      throw new Error("[RWV] ApiService ".concat(error));
    });
  },
  post: function post(resource, params) {
    if (_jwt_service__WEBPACK_IMPORTED_MODULE_3__["default"].getToken() !== null) {
      this.setHeader();
    } else {}

    console.log(resource);
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.post("".concat(resource), params);
  },
  update: function update(resource, slug, params) {
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.put("".concat(resource, "/").concat(slug), params);
  },
  put: function put(resource, params) {
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.put("".concat(resource), params);
  },
  "delete": function _delete(resource) {
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios["delete"](resource)["catch"](function (error) {
      throw new Error("[RWV] ApiService ".concat(error));
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ApiService);

/***/ }),

/***/ "./resources/assets/admin/common/jwt.service.js":
/*!******************************************************!*\
  !*** ./resources/assets/admin/common/jwt.service.js ***!
  \******************************************************/
/*! exports provided: getToken, saveToken, destroyToken, getUser, saveUser, destroyUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveToken", function() { return saveToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyToken", function() { return destroyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUser", function() { return saveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyUser", function() { return destroyUser; });
var TOKEN_KEY = "admin_token";
var USER_KEY = "admin";
var getToken = function getToken() {
  return window.localStorage.getItem(TOKEN_KEY);
};
var saveToken = function saveToken(token) {
  window.localStorage.setItem(TOKEN_KEY, token);
};
var destroyToken = function destroyToken() {
  window.localStorage.removeItem(TOKEN_KEY);
};
var getUser = function getUser() {
  return window.localStorage.getItem(USER_KEY);
};
var saveUser = function saveUser(user) {
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
};
var destroyUser = function destroyUser() {
  window.localStorage.removeItem(USER_KEY);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getToken: getToken,
  saveToken: saveToken,
  destroyToken: destroyToken,
  getUser: getUser,
  saveUser: saveUser,
  destroyUser: destroyUser
});

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/size_list.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/size_list.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _size_list_vue_vue_type_template_id_05e31854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./size_list.vue?vue&type=template&id=05e31854& */ "./resources/assets/restaurant/components/pages/size_list.vue?vue&type=template&id=05e31854&");
/* harmony import */ var _size_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./size_list.vue?vue&type=script&lang=js& */ "./resources/assets/restaurant/components/pages/size_list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _size_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size_list.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/restaurant/components/pages/size_list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _size_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _size_list_vue_vue_type_template_id_05e31854___WEBPACK_IMPORTED_MODULE_0__["render"],
  _size_list_vue_vue_type_template_id_05e31854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/restaurant/components/pages/size_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/size_list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/size_list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_size_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./size_list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/size_list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_size_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/size_list.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/size_list.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_size_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./size_list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/size_list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_size_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_size_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_size_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_size_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_size_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/size_list.vue?vue&type=template&id=05e31854&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/size_list.vue?vue&type=template&id=05e31854& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_size_list_vue_vue_type_template_id_05e31854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./size_list.vue?vue&type=template&id=05e31854& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/size_list.vue?vue&type=template&id=05e31854&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_size_list_vue_vue_type_template_id_05e31854___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_size_list_vue_vue_type_template_id_05e31854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);