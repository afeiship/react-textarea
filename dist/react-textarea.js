!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("autosize"),require("classnames"),require("noop"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","autosize","classnames","noop","prop-types"],t):"object"==typeof exports?exports.ReactTextarea=t(require("react"),require("autosize"),require("classnames"),require("noop"),require("prop-types")):e.ReactTextarea=t(e.react,e.autosize,e.classnames,e.noop,e["prop-types"])}(this,function(e,t,r,o,n){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=o(n);t.default=a.default},function(t,r){t.exports=e},function(e,t,r){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=r(1),d=r(6),y=o(d),b=r(4),x=o(b),h=r(5),v=o(h),m=r(3),O=o(m),_=(c=s=function(t){function r(){return a(this,r),u(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return i(r,t),p(r,[{key:"componentDidMount",value:function(){var e=this.props.autosize;e&&(0,O.default)(this.textarea)}},{key:"render",value:function(){var t=this,r=this.props,o=(r.autoSize,r.className),a=n(r,["autoSize","className"]);return e.createElement("textarea",f({ref:function(e){return t.textarea=e},className:(0,x.default)("react-textarea",o)},a))}}]),r}(l.Component),s.propTypes={className:y.default.string,autosize:y.default.bool,onChange:y.default.func,value:y.default.string},s.defaultProps={autosize:!0,onChange:v.default},c);t.default=_}).call(t,r(1))},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=n}])});
//# sourceMappingURL=react-textarea.js.map