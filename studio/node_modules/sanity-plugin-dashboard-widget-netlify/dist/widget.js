"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPropsStream = require("react-props-stream");

var _operators = require("rxjs/operators");

var _props = require("./props");

var _NetlifyWidget = _interopRequireDefault(require("./components/NetlifyWidget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactPropsStream.streamingComponent)(options$ => options$.pipe((0, _operators.switchMap)(options => (0, _props.props$)(options).pipe((0, _operators.map)(props => {
  return /*#__PURE__*/_react.default.createElement(_NetlifyWidget.default, props);
})))));

exports.default = _default;
//# sourceMappingURL=widget.js.map