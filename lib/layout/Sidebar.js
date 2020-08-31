'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      pinned = _ref.pinned,
      scrollY = _ref.scrollY,
      theme = _ref.theme,
      width = _ref.width;

  var wrapperClasses = (0, _classnames4.default)(theme.sidebar, theme['width-' + width], _defineProperty({}, theme.pinned, pinned), className);

  var innerClasses = (0, _classnames4.default)(theme.sidebarContent, _defineProperty({}, theme.scrollY, scrollY));

  return _react2.default.createElement(
    'div',
    { 'data-react-toolbox': 'sidebar', className: wrapperClasses },
    _react2.default.createElement(
      'aside',
      { 'data-react-toolbox': 'sidebar-content', className: innerClasses },
      children
    )
  );
};

Sidebar.propTypes = {
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  pinned: _propTypes2.default.bool,
  scrollY: _propTypes2.default.bool,
  theme: _propTypes2.default.shape({
    pinned: _propTypes2.default.string,
    scrollY: _propTypes2.default.string,
    sidebar: _propTypes2.default.string,
    sidebarContent: _propTypes2.default.string
  }),
  width: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25, 33, 50, 66, 75, 100])
};

Sidebar.defaultProps = {
  className: '',
  pinned: false,
  scrollY: false,
  width: 5
};

exports.default = (0, _reactCssThemr.themr)(_identifiers.LAYOUT)(Sidebar);
exports.Sidebar = Sidebar;