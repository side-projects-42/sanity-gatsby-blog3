"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deploy = deploy;

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _statusCodeRequest = require("../http/statusCodeRequest");

function deploy(site) {
  if (!site.buildHookId) {
    return (0, _rxjs.of)(new Error('Site missing buildHookId'));
  }

  return (0, _statusCodeRequest.statusCodeRequest)("https://api.netlify.com/build_hooks/".concat(site.buildHookId), {
    method: 'POST'
  }).pipe((0, _operators.map)(result => ({
    result,
    site
  })));
}
//# sourceMappingURL=deploy.js.map