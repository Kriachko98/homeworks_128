"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeoutError = exports.HTTPError = exports["default"] = void 0;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _globalThis = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0,
    isObject = function isObject(e) {
  return null !== e && "object" == _typeof(e);
},
    deepMerge = function deepMerge() {
  var t = {};

  for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
    e[_key] = arguments[_key];
  }

  for (var _i = 0, _e = e; _i < _e.length; _i++) {
    var s = _e[_i];
    if (Array.isArray(s)) Array.isArray(t) || (t = []), t = [].concat(_toConsumableArray(t), _toConsumableArray(s));else if (isObject(s)) {
      for (var _i2 = 0, _Object$entries = Object.entries(s); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            r = _Object$entries$_i[0],
            o = _Object$entries$_i[1];

        isObject(o) && Reflect.has(t, r) && (o = deepMerge(t[r], o)), t = _objectSpread({}, t, _defineProperty({}, r, o));
      }
    }
  }

  return t;
},
    requestMethods = ["get", "post", "put", "patch", "head", "delete"],
    responseTypes = ["json", "text", "formData", "arrayBuffer", "blob"],
    retryMethods = new Set(["get", "put", "head", "delete", "options", "trace"]),
    retryStatusCodes = new Set([408, 413, 429, 500, 502, 503, 504]),
    retryAfterStatusCodes = new Set([413, 429, 503]);

var HTTPError =
/*#__PURE__*/
function (_Error) {
  _inherits(HTTPError, _Error);

  function HTTPError(e) {
    var _this;

    _classCallCheck(this, HTTPError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HTTPError).call(this, e.statusText)), _this.name = "HTTPError", _this.response = e;
    return _this;
  }

  return HTTPError;
}(_wrapNativeSuper(Error));

exports.HTTPError = HTTPError;

var TimeoutError =
/*#__PURE__*/
function (_Error2) {
  _inherits(TimeoutError, _Error2);

  function TimeoutError() {
    var _this2;

    _classCallCheck(this, TimeoutError);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(TimeoutError).call(this, "Request timed out")), _this2.name = "TimeoutError";
    return _this2;
  }

  return TimeoutError;
}(_wrapNativeSuper(Error));

exports.TimeoutError = TimeoutError;

var delay = function delay(e) {
  return new Promise(function (t) {
    return setTimeout(t, e);
  });
},
    timeout = function timeout(e, t) {
  return Promise.race([e, function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(delay(t));

          case 2:
            throw new TimeoutError();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }()]);
},
    normalizeRequestMethod = function normalizeRequestMethod(e) {
  return requestMethods.includes(e) ? e.toUpperCase() : e;
};

var Ky =
/*#__PURE__*/
function () {
  function Ky(e, _ref) {
    var _this3 = this;

    var _ref$timeout = _ref.timeout,
        t = _ref$timeout === void 0 ? 1e4 : _ref$timeout,
        s = _ref.hooks,
        _ref$throwHttpErrors = _ref.throwHttpErrors,
        r = _ref$throwHttpErrors === void 0 ? !0 : _ref$throwHttpErrors,
        o = _ref.searchParams,
        i = _ref.json,
        n = _objectWithoutProperties(_ref, ["timeout", "hooks", "throwHttpErrors", "searchParams", "json"]);

    _classCallCheck(this, Ky);

    if (this._retryCount = 0, this._options = _objectSpread({
      method: "get",
      credentials: "same-origin",
      retry: 2
    }, n), this._options.method = normalizeRequestMethod(this._options.method), this._options.prefixUrl = String(this._options.prefixUrl || ""), this._input = String(e || ""), this._options.prefixUrl && this._input.startsWith("/")) throw Error("`input` must not begin with a slash when using `prefixUrl`");
    this._options.prefixUrl && !this._options.prefixUrl.endsWith("/") && (this._options.prefixUrl += "/");
    var a = new _globalThis.URL(this._options.prefixUrl + this._input, document.baseURI);
    if ("string" == typeof o || o instanceof _globalThis.URLSearchParams) a.search = o;else if (o && Object.values(o).every(function (e) {
      return "number" == typeof e || "string" == typeof e;
    })) a.search = new _globalThis.URLSearchParams(o).toString();else if (o) throw Error("The `searchParams` option must be either a string, `URLSearchParams` instance or an object with string and number values");
    this._input = a.toString(), this._timeout = t, this._hooks = deepMerge({
      beforeRequest: [],
      afterResponse: []
    }, s), this._throwHttpErrors = r;
    var h = new _globalThis.Headers(this._options.headers || {});
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var p = _step.value;
        _this3._response[p] = _this3._retry(function _callee2() {
          var e, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _t, _s2;

          return regeneratorRuntime.async(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this3._retryCount > 0 && (_this3._response = _this3._fetch());
                  _context2.next = 3;
                  return regeneratorRuntime.awrap(_this3._response);

                case 3:
                  e = _context2.sent;
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context2.prev = 7;
                  _iterator2 = _this3._hooks.afterResponse[Symbol.iterator]();

                case 9:
                  if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                    _context2.next = 18;
                    break;
                  }

                  _t = _step2.value;
                  _context2.next = 13;
                  return regeneratorRuntime.awrap(_t(e.clone()));

                case 13:
                  _s2 = _context2.sent;
                  _s2 instanceof _globalThis.Response && (e = _s2);

                case 15:
                  _iteratorNormalCompletion2 = true;
                  _context2.next = 9;
                  break;

                case 18:
                  _context2.next = 24;
                  break;

                case 20:
                  _context2.prev = 20;
                  _context2.t0 = _context2["catch"](7);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context2.t0;

                case 24:
                  _context2.prev = 24;
                  _context2.prev = 25;

                  if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                    _iterator2["return"]();
                  }

                case 27:
                  _context2.prev = 27;

                  if (!_didIteratorError2) {
                    _context2.next = 30;
                    break;
                  }

                  throw _iteratorError2;

                case 30:
                  return _context2.finish(27);

                case 31:
                  return _context2.finish(24);

                case 32:
                  if (e.ok) {
                    _context2.next = 34;
                    break;
                  }

                  throw new HTTPError(e);

                case 34:
                  return _context2.abrupt("return", e.clone()[p]());

                case 35:
                case "end":
                  return _context2.stop();
              }
            }
          }, null, null, [[7, 20, 24, 32], [25,, 27, 31]]);
        });
      };

      for (var _iterator = (i && (h.set("content-type", "application/json"), this._options.body = JSON.stringify(i)), this._options.headers = h, this._response = this._fetch(), responseTypes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return this._response;
  }

  _createClass(Ky, [{
    key: "_calculateRetryDelay",
    value: function _calculateRetryDelay(e) {
      if (this._retryCount++, this._retryCount < this._options.retry && !(e instanceof TimeoutError)) {
        if (e instanceof HTTPError) {
          if (!retryStatusCodes.has(e.response.status)) return 0;
          var t = e.response.headers.get("Retry-After");

          if (t && retryAfterStatusCodes.has(e.response.status)) {
            var s = Number(t);
            return Number.isNaN(s) ? s = Date.parse(t) - Date.now() : s *= 1e3, s;
          }

          if (413 === e.response.status) return 0;
        }

        return .3 * Math.pow(2, this._retryCount - 1) * 1e3;
      }

      return 0;
    }
  }, {
    key: "_retry",
    value: function _retry(e) {
      var _this4 = this;

      if (!retryMethods.has(this._options.method.toLowerCase())) return e;

      var t = function t() {
        var r;
        return regeneratorRuntime.async(function t$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return regeneratorRuntime.awrap(e());

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                r = _this4._calculateRetryDelay(_context3.t0);

                if (!(0 !== r)) {
                  _context3.next = 13;
                  break;
                }

                _context3.next = 12;
                return regeneratorRuntime.awrap(delay(r));

              case 12:
                return _context3.abrupt("return", t());

              case 13:
                if (!_this4._throwHttpErrors) {
                  _context3.next = 15;
                  break;
                }

                throw _context3.t0;

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, null, null, [[0, 6]]);
      };

      return t;
    }
  }, {
    key: "_fetch",
    value: function _fetch() {
      var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, e;

      return regeneratorRuntime.async(function _fetch$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _iteratorNormalCompletion3 = true;
              _didIteratorError3 = false;
              _iteratorError3 = undefined;
              _context4.prev = 3;
              _iterator3 = this._hooks.beforeRequest[Symbol.iterator]();

            case 5:
              if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                _context4.next = 12;
                break;
              }

              e = _step3.value;
              _context4.next = 9;
              return regeneratorRuntime.awrap(e(this._options));

            case 9:
              _iteratorNormalCompletion3 = true;
              _context4.next = 5;
              break;

            case 12:
              _context4.next = 18;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](3);
              _didIteratorError3 = true;
              _iteratorError3 = _context4.t0;

            case 18:
              _context4.prev = 18;
              _context4.prev = 19;

              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }

            case 21:
              _context4.prev = 21;

              if (!_didIteratorError3) {
                _context4.next = 24;
                break;
              }

              throw _iteratorError3;

            case 24:
              return _context4.finish(21);

            case 25:
              return _context4.finish(18);

            case 26:
              return _context4.abrupt("return", timeout(_globalThis.fetch(this._input, this._options), this._timeout));

            case 27:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    }
  }]);

  return Ky;
}();

var createInstance = function createInstance() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!isObject(e) || Array.isArray(e)) throw TypeError("The `defaultOptions` argument must be an object");

  var t = function t(_t2, s) {
    return new Ky(_t2, deepMerge({}, e, s));
  };

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    var _loop2 = function _loop2() {
      var s = _step4.value;

      t[s] = function (t, r) {
        return new Ky(t, deepMerge({}, e, r, {
          method: s
        }));
      };
    };

    for (var _iterator4 = requestMethods[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      _loop2();
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return t.extend = function (e) {
    return createInstance(e);
  }, t;
};

var _default = createInstance();

exports["default"] = _default;