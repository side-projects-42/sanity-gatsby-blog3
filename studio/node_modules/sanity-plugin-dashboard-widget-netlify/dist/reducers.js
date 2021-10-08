"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stateReducer$ = void 0;

var _operators = require("rxjs/operators");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stateReducer$ = (0, _operators.scan)((state, action) => {
  switch (action.type) {
    case 'setSites':
      return _objectSpread(_objectSpread({}, state), {}, {
        sites: action.sites || []
      });

    case 'deploy/started':
      return _objectSpread(_objectSpread({}, state), {}, {
        sites: state.sites.map(site => {
          if (action.site && site.id === action.site.id) {
            return _objectSpread({}, site);
          }

          return site;
        })
      });

    case 'deploy/failed':
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error
      });

    case 'deploy/completed':
      return _objectSpread(_objectSpread({}, state), {}, {
        sites: state.sites.map(site => {
          if (action.site && site.id === action.site.id) {
            return _objectSpread(_objectSpread({}, site), {}, {
              error: action.error
            });
          }

          return site;
        })
      });

    default:
      return state;
  }
});
exports.stateReducer$ = stateReducer$;
//# sourceMappingURL=reducers.js.map