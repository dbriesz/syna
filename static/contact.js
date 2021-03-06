/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./static-main/js/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/form-validator-simple/dist/bundle.js":
/*!***********************************************************!*\
  !*** ./node_modules/form-validator-simple/dist/bundle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n   true ? module.exports = factory() :\n  undefined;\n}(this, (function () { 'use strict';\n\n  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n  var options = {\n    errors: {\n      email: 'Invalid email',\n      default: 'Invalid value'\n    },\n    regexes: {\n      email: /^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/\n    }\n  };\n\n  var Validator = function () {\n    function Validator() {\n      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n          _ref$regexes = _ref.regexes,\n          regexes = _ref$regexes === undefined ? {} : _ref$regexes,\n          _ref$errors = _ref.errors,\n          errors = _ref$errors === undefined ? {} : _ref$errors,\n          onFormValidate = _ref.onFormValidate,\n          onError = _ref.onError,\n          onSuccess = _ref.onSuccess,\n          _ref$errorTemplate = _ref.errorTemplate,\n          errorTemplate = _ref$errorTemplate === undefined ? '' : _ref$errorTemplate;\n\n      _classCallCheck(this, Validator);\n\n      this.regexes = _extends({}, options.regexes, regexes);\n      this.errors = _extends({}, options.errors, errors);\n      this.onError = onError;\n      this.onSuccess = onSuccess;\n      this.errorTemplate = errorTemplate;\n\n      if (onFormValidate) {\n        this._onFormValidate = this._onFormValidate(onFormValidate);\n      } else {\n        this._onFormValidate = function () {};\n      }\n\n      this._validate = this._validate.bind(this);\n      this.initAll = this.initAll.bind(this);\n      this.initForm = this.initForm.bind(this);\n    }\n\n    Validator.prototype.initAll = function initAll() {\n      var forms = document.querySelectorAll('form');\n      forms.forEach(this.initForm);\n      return this;\n    };\n\n    Validator.prototype.initForm = function initForm(form) {\n      var _this = this;\n\n      var fields = form.querySelectorAll('[data-validation]');\n      if (fields.length > 0) {\n        form.onsubmit = this._handleSubmit(form);\n      }\n\n      fields.forEach(function (field) {\n        field.setAttribute('data-validation-valid', _this._validateInput(field));\n        field.oninput = _this._validate;\n      });\n\n      var isFormValid = this._isFormValid(form);\n      this._onFormValidate(isFormValid, form);\n      form.setAttribute('data-validation-valid', isFormValid);\n    };\n\n    Validator.prototype._handleSubmit = function _handleSubmit(form) {\n      var _this2 = this;\n\n      return function (e) {\n        if (form.getAttribute('data-validation-valid') === 'false') {\n          e.preventDefault();\n          e.stopPropagation();\n\n          if (_this2.onError) {\n            _this2.onError(e, form);\n          }\n\n          return false;\n        } else if (_this2.onSuccess) {\n          _this2.onSuccess(e, form);\n        }\n      };\n    };\n\n    Validator.prototype._isFormValid = function _isFormValid(form) {\n      return !Array.from(form.querySelectorAll('[data-validation]')).some(function (field) {\n        return field.getAttribute('data-validation-valid') === 'false';\n      });\n    };\n\n    Validator.prototype._onFormValidate = function _onFormValidate(callback) {\n      return function (validity, form) {\n        callback(validity, form);\n      };\n    };\n\n    Validator.prototype._validate = function _validate(e) {\n      var field = e.target;\n      var form = field.closest('form');\n      var errorContainer = field.closest('div').querySelector('[data-error]');\n      var isFieldValid = this._validateInput(field);\n      var isFormValid = isFieldValid ? this._isFormValid(form) : false;\n      field.setAttribute('data-validation-valid', isFieldValid);\n\n      if (isFieldValid) {\n        form.setAttribute('data-validation-valid', isFormValid);\n        this._hideError(field, errorContainer);\n      } else {\n        form.setAttribute('data-validation-valid', false);\n        this._displayError(field, errorContainer);\n      }\n\n      this._onFormValidate(isFormValid, form);\n    };\n\n    Validator.prototype._displayError = function _displayError(field, errorContainer) {\n      field.classList.add('error');\n\n      if (errorContainer) {\n        var errorMsg = field.getAttribute('data-validation-error-msg');\n        errorContainer.innerHTML = this._formatError(errorMsg || this.errors[field.getAttribute('data-validation')] || this.errors.default);\n        errorContainer.classList.add('has-error');\n      }\n    };\n\n    Validator.prototype._hideError = function _hideError(field, errorContainer) {\n      field.classList.remove('error');\n      field.classList.add('valid');\n\n      if (errorContainer) {\n        errorContainer.innerHTML = '';\n        errorContainer.classList.remove('has-error');\n      }\n    };\n\n    Validator.prototype._validateInput = function _validateInput(field) {\n      var value = field.value;\n      var validation = field.getAttribute('data-validation');\n      var regex = field.getAttribute('data-validation-regex');\n      var required = field.required;\n\n      switch (validation) {\n        case '':\n          return required ? !!value : true;\n\n        case 'regex':\n          return new RegExp(regex).test(value);\n\n        default:\n          return new RegExp(this.regexes[validation]).test(value);\n      }\n    };\n\n    Validator.prototype._formatError = function _formatError(string) {\n      return this.errorTemplate.replace('%s', string);\n    };\n\n    return Validator;\n  }();\n\n  return Validator;\n\n})));\n//# sourceMappingURL=bundle.js.map\n\n\n//# sourceURL=webpack:///./node_modules/form-validator-simple/dist/bundle.js?");

/***/ }),

/***/ "./static-main/js/contact.js":
/*!***********************************!*\
  !*** ./static-main/js/contact.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _jqHelpers = __webpack_require__(/*! ./helpers/jq-helpers */ \"./static-main/js/helpers/jq-helpers.js\");\n\nvar _jqHelpers2 = _interopRequireDefault(_jqHelpers);\n\nvar _formValidatorSimple = __webpack_require__(/*! form-validator-simple */ \"./node_modules/form-validator-simple/dist/bundle.js\");\n\nvar _formValidatorSimple2 = _interopRequireDefault(_formValidatorSimple);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar selfCheck = 'checkSelf';\n\n(function () {\n  if ((0, _jqHelpers2.default)('.g-recaptcha')) {\n    checkReCaptcha();\n  }\n})();\n\nvar validator = new _formValidatorSimple2.default({\n  errorTemplate: '<span class=\"help-block form-error\">%s</span>',\n  onFormValidate: function onFormValidate(isFormValid, form) {\n    form.querySelector('button').disabled = !isFormValid;\n  },\n  onError: function onError(e, form) {\n    (0, _jqHelpers2.default)('form[id=' + form.getAttribute('id') + '] .generic-error').removeClass('d-none');\n  },\n  onSuccess: function onSuccess(e, form) {\n    e.preventDefault();\n\n    if (selfCheck !== \"checkSelf\") {\n      genericError.removeClass('d-none');\n      return false;\n    }\n\n    var id = form.getAttribute('id');\n    var action = (0, _jqHelpers2.default)('#' + id).attr('action');\n    var genericSuccess = (0, _jqHelpers2.default)('form[id=' + id + '] .generic-success');\n    var genericError = (0, _jqHelpers2.default)('form[id=' + id + '] .generic-error');\n    var serializedForm = (0, _jqHelpers2.default)('#' + id).serialize();\n    if ((0, _jqHelpers2.default)('.g-recaptcha').length === 0) {\n      _jqHelpers2.default.post(action, serializedForm).then(function () {\n        return genericSuccess.removeClass('d-none');\n      }).catch(function () {\n        return genericError.removeClass('d-none');\n      });\n    } else if (typeof grecaptcha !== \"undefined\") {\n      if (grecaptcha.getResponse() !== \"\") {\n        _jqHelpers2.default.post(action, serializedForm).then(function () {\n          genericSuccess.removeClass('d-none');\n          (0, _jqHelpers2.default)('form[id=' + id + '] .success').removeClass('d-none');\n        }).catch(function () {\n          return genericError.removeClass('d-none');\n        });\n      } else {\n        grecaptcha.execute();\n      };\n    }\n    return false;\n  }\n});\nvalidator.initAll();\n\nfunction checkReCaptcha() {\n  if (document.querySelector('.g-recaptcha-container') && typeof grecaptcha === \"undefined\") {\n    (0, _jqHelpers2.default)('.captcha-error').removeClass('d-none');\n    setTimeout(checkReCaptcha, 200);\n  } else {\n    (0, _jqHelpers2.default)('.captcha-error').addClass('d-none');\n    (0, _jqHelpers2.default)('.g-recaptcha-filler').addClass('d-none');\n    (0, _jqHelpers2.default)('.g-recaptcha').attr('disabled', true);\n  }\n}\n\nwindow.onContactCaptcha = function ($form) {\n  document.querySelector('form.contact').dispatchEvent(new Event('submit'));\n};\n\n//# sourceURL=webpack:///./static-main/js/contact.js?");

/***/ }),

/***/ "./static-main/js/helpers/jq-helpers.js":
/*!**********************************************!*\
  !*** ./static-main/js/helpers/jq-helpers.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _serialize2 = __webpack_require__(/*! ./serialize */ \"./static-main/js/helpers/serialize.js\");\n\nvar _serialize3 = _interopRequireDefault(_serialize2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction $(selector) {\n  var nodes = Array.from((this && Array.isArray(this) ? this[0] : document).querySelectorAll(selector));\n\n  var _returnee = {\n    $nodes: nodes,\n    $: $.bind(nodes),\n    on: function on(event, callback) {\n      nodes.forEach(function (node) {\n        return node['on' + event] = callback.bind(node);\n      });\n      return _returnee;\n    },\n    addClass: function addClass(className) {\n      nodes.forEach(function (node) {\n        return node.classList.add(className);\n      });\n      return _returnee;\n    },\n    removeClass: function removeClass(className) {\n      nodes.forEach(function (node) {\n        return node.classList.remove(className);\n      });\n      return _returnee;\n    },\n    attr: function attr(attribute, value) {\n      if (value === undefined && nodes.length > 1) {\n        throw new Error('Can\\'t access value of several nodes\\' attributes');\n      }\n\n      if (value === undefined) {\n        return nodes[0].getAttribute(attribute);\n      } else {\n        nodes.forEach(function (node) {\n          return node.setAttribute(attribute, value);\n        });\n      }\n    },\n    html: function html(innerHTML) {\n      if (innerHTML === undefined) {\n        if (nodes.length > 1) {\n          throw new Error('Can\\'t get several nodes innerHTML at once');\n        }\n\n        return nodes[0].innerHTML;\n      }\n\n      nodes.forEach(function (node) {\n        return node.innerHTML = innerHTML;\n      });\n    },\n    text: function text(innerText) {\n      if (innerText === undefined) {\n        if (nodes.length > 1) {\n          throw new Error('Can\\'t get several nodes innerText at once');\n        }\n\n        return nodes[0].innerText;\n      }\n\n      nodes.forEach(function (node) {\n        return node.innerText = innerText;\n      });\n    },\n    submit: function submit() {\n      return nodes.forEach(function (node) {\n        return node.submit();\n      });\n    },\n    serialize: function serialize() {\n      if (nodes.length > 1) {\n        throw new Error('Can\\'t serialize forms at once');\n      }\n\n      return (0, _serialize3.default)(nodes[0]);\n    },\n    length: nodes.length\n  };\n\n  nodes.forEach(function (node, index) {\n    return _returnee[index] = node;\n  });\n\n  return _returnee;\n}\n\n$.scrollTo = function scrollTo(element, to, duration) {\n  if (duration <= 0) return;\n  var difference = to - element.scrollTop;\n  var perTick = difference / duration * 10;\n\n  setTimeout(function () {\n    element.scrollTop = element.scrollTop + perTick;\n    if (element.scrollTop === to) return;\n    scrollTo(element, to, duration - 10);\n  }, 10);\n};\n\n$.ajax = function ajax(_ref) {\n  var method = _ref.method,\n      url = _ref.url,\n      data = _ref.data;\n\n  var xhr = new XMLHttpRequest();\n  xhr.open(method.toUpperCase(), url);\n  xhr.setRequestHeader(\"Content-Type\", \"application/json;charset=UTF-8\");\n  xhr.send(data);\n\n  return new Promise(function (resolve, reject) {\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState == 4) {\n        if (xhr.status == 200) {\n          resolve(JSON.parse(xhr.responseXML));\n        } else {\n          reject(xhr.statusText);\n        }\n      }\n    };\n  });\n};\n\n$.post = function (url, data) {\n  return $.ajax({ method: 'post', url: url, data: data });\n};\n\nexports.default = $;\n\n//# sourceURL=webpack:///./static-main/js/helpers/jq-helpers.js?");

/***/ }),

/***/ "./static-main/js/helpers/serialize.js":
/*!*********************************************!*\
  !*** ./static-main/js/helpers/serialize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = serialize;\n// From https://code.google.com/archive/p/form-serialize/\nfunction serialize(form) {\n  if (!form || form.nodeName !== \"FORM\") {\n    return;\n  }\n  var i,\n      j,\n      q = [];\n  for (i = form.elements.length - 1; i >= 0; i = i - 1) {\n    if (form.elements[i].name === \"\") {\n      continue;\n    }\n    switch (form.elements[i].nodeName) {\n      case 'INPUT':\n        switch (form.elements[i].type) {\n          case 'text':\n          case 'hidden':\n          case 'password':\n          case 'button':\n          case 'reset':\n          case 'submit':\n            q.push(form.elements[i].name + \"=\" + encodeURIComponent(form.elements[i].value));\n            break;\n          case 'checkbox':\n          case 'radio':\n            if (form.elements[i].checked) {\n              q.push(form.elements[i].name + \"=\" + encodeURIComponent(form.elements[i].value));\n            }\n            break;\n          case 'file':\n            break;\n        }\n        break;\n      case 'TEXTAREA':\n        q.push(form.elements[i].name + \"=\" + encodeURIComponent(form.elements[i].value));\n        break;\n      case 'SELECT':\n        switch (form.elements[i].type) {\n          case 'select-one':\n            q.push(form.elements[i].name + \"=\" + encodeURIComponent(form.elements[i].value));\n            break;\n          case 'select-multiple':\n            for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {\n              if (form.elements[i].options[j].selected) {\n                q.push(form.elements[i].name + \"=\" + encodeURIComponent(form.elements[i].options[j].value));\n              }\n            }\n            break;\n        }\n        break;\n      case 'BUTTON':\n        switch (form.elements[i].type) {\n          case 'reset':\n          case 'submit':\n          case 'button':\n            q.push(form.elements[i].name + \"=\" + encodeURIComponent(form.elements[i].value));\n            break;\n        }\n        break;\n    }\n  }\n  return q.join(\"&\");\n}\n\n//# sourceURL=webpack:///./static-main/js/helpers/serialize.js?");

/***/ })

/******/ });