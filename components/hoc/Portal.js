import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Portal extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    container: PropTypes.node
  }

  constructor (props) {
    super(props);
    this._portalContainerNode = document.createElement('div');
  }

  componentDidMount () {
    getContainer(this.props.container).appendChild(this._portalContainerNode);
  }

  componentWillUnmount () {
    getContainer(this.props.container).removeChild(this._portalContainerNode);
  }

  render () {
    const portalRender = (
      <div className={this.props.className}>{this.props.children}</div>
    );

    return ReactDOM.createPortal(portalRender, this._portalContainerNode);
  }
}

function getContainer (container) {
  const _container = typeof container === 'function' ? container() : container;
  return ReactDOM.findDOMNode(_container) || document.body;
}

export default Portal;
