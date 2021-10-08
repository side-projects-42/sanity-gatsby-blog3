"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAbortController = void 0;

var _abortController = _interopRequireDefault(require("abort-controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createAbortController = () => {
  if (!('AbortController' in window)) {
    return new _abortController.default();
  }

  return new AbortController();
};

exports.createAbortController = createAbortController;
//# sourceMappingURL=createAbortController.js.map