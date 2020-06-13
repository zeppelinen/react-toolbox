'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal(props) {
    _classCallCheck(this, Portal);

    var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));

    _this._portalContainerNode = document.createElement('div');
    return _this;
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      getContainer(this.props.container).appendChild(this._portalContainerNode);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      getContainer(this.props.container).removeChild(this._portalContainerNode);
    }
  }, {
    key: 'render',
    value: function render() {
      var portalRender = _react2.default.createElement(
        'div',
        { className: this.props.className },
        this.props.children
      );

      return _reactDom2.default.createPortal(portalRender, this._portalContainerNode);
    }
  }]);

  return Portal;
}(_react.Component);

Portal.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  container: _propTypes2.default.node
};


function getContainer(container) {
  var _container = typeof container === 'function' ? container() : container;
  return _reactDom2.default.findDOMNode(_container) || document.body;
}

exports.default = Portal;