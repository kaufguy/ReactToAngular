"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hello = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hello = exports.Hello = function (_React$Component) {
  _inherits(Hello, _React$Component);

  function Hello() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Hello);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hello.__proto__ || Object.getPrototypeOf(Hello)).call.apply(_ref, [this].concat(args))), _this), _this.state = { date: new Date() }, _this.tick = function () {
      _this.setState({ date: new Date() });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hello, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
            "React Component"
        ),
        React.createElement(
          "h3",
          null,
          "Hello, ",
          this.props.name
        ),
        React.createElement(
          "h3",
          null,
          "It is ",
          this.state.date.toLocaleTimeString(),
          " inside React."
        ),
        React.createElement(
          "button",
          {
            ref: function ref(el) {
              return _this2.updateButton = el;
            },
            onClick: this.tick },
          "Update time in React state"
        )
      );
    }
  }]);

  return Hello;
}(React.Component);

