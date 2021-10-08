"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonRequest = void 0;

var _rxjs = require("rxjs");

var _createAbortController = require("./utils/createAbortController");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var jsonRequest = (input, init) => {
  return new _rxjs.Observable(subscriber => {
    var controller = (0, _createAbortController.createAbortController)();

    var onResponse = res => {
      subscriber.next(res);
      subscriber.complete();
    };

    var onError = err => {
      if (err.name === 'AbortError') {
        subscriber.complete();
      } else {
        subscriber.error(err);
      }
    };

    fetch(input, _objectSpread(_objectSpread({}, init), {}, {
      signal: controller.signal
    })).then(res => {
      if (res.status < 200 || res.status > 299) {
        throw new Error("HTTP Error ".concat(res.status, ": ").concat(res.statusText));
      }

      return res.json();
    }).then(onResponse, onError);
    return () => {
      controller.abort();
    };
  });
};

exports.jsonRequest = jsonRequest;
//# sourceMappingURL=jsonRequest.js.map