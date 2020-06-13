'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dialogFactory = exports.Dialog = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _identifiers = require('../identifiers.js');

var _ActivableRenderer = require('../hoc/ActivableRenderer.js');

var _ActivableRenderer2 = _interopRequireDefault(_ActivableRenderer);

var _Button = require('../button/Button.js');

var _Button2 = _interopRequireDefault(_Button);

var _Overlay = require('../overlay/Overlay.js');

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factory = function factory(Overlay, Button) {
  var Dialog = function Dialog(props) {
    var actions = props.actions.map(function (action, idx) {
      var className = (0, _classnames4.default)(props.theme.button, _defineProperty({}, action.className, action.className));
      return _react2.default.createElement(Button, _extends({ key: idx }, action, { className: className }));
    });

    var className = (0, _classnames4.default)([props.theme.dialog, props.theme[props.type]], _defineProperty({}, props.theme.active, props.active), props.className);

    var bodyClassName = props.disableScrolling ? props.theme.body : (0, _classnames4.default)(props.theme.body, props.theme.scroll);

    return _react2.default.createElement(
      Overlay,
      {
        active: props.active,
        onClick: props.onOverlayClick,
        onEscKeyDown: props.onEscKeyDown,
        onMouseDown: props.onOverlayMouseDown,
        onMouseMove: props.onOverlayMouseMove,
        onMouseUp: props.onOverlayMouseUp
      },
      _react2.default.createElement(
        'div',
        { 'data-react-toolbox': 'dialog', className: className },
        _react2.default.createElement(
          'section',
          { role: 'body', className: bodyClassName },
          props.title ? _react2.default.createElement(
            'h6',
            { className: props.theme.title },
            props.title
          ) : null,
          props.children
        ),
        actions.length ? _react2.default.createElement(
          'nav',
          { role: 'navigation', className: props.theme.navigation },
          actions
        ) : null
      )
    );
  };

  Dialog.propTypes = {
    actions: _propTypes2.default.array,
    active: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    disableScrolling: _propTypes2.default.bool,
    onEscKeyDown: _propTypes2.default.func,
    onOverlayClick: _propTypes2.default.func,
    onOverlayMouseDown: _propTypes2.default.func,
    onOverlayMouseMove: _propTypes2.default.func,
    onOverlayMouseUp: _propTypes2.default.func,
    theme: _propTypes2.default.shape({
      active: _propTypes2.default.string,
      body: _propTypes2.default.string,
      button: _propTypes2.default.string,
      dialog: _propTypes2.default.string,
      navigation: _propTypes2.default.string,
      scroll: _propTypes2.default.string,
      title: _propTypes2.default.string
    }),
    title: _propTypes2.default.string,
    type: _propTypes2.default.string
  };

  Dialog.defaultProps = {
    actions: [],
    active: false,
    disableScrolling: false,
    type: 'normal'
  };

  return (0, _ActivableRenderer2.default)()(Dialog);
};

var Dialog = factory(_Overlay2.default, _Button2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.DIALOG)(Dialog);
exports.Dialog = Dialog;
exports.dialogFactory = factory;