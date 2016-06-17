import React, { Component, PropTypes, Children, cloneElement } from 'react';
import Radium from 'radium';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, theme, children } = this.props;
    let childrenWithProps = Children.map(children, (child) => {
      return cloneElement(child, { theme: theme });
    });
    if (!open) { return null; }


    return (
      <aside className="sidebar" style={[ styles.base, styles[theme] ]}>
        { childrenWithProps }
      </aside>
    );
  }
}

SideBar.propTypes = {
  open: PropTypes.bool,
  theme: PropTypes.oneOf(['light', 'dark'])
};

SideBar.defaultProps = {
  theme: 'light'
};

var styles = {
  base: {
    boxShadow: '0 1px 6px rgba(0, 0, 0,.12), 0 1px 4px rgba(0, 0, 0, .12)',
    color: '#444',
    display: 'block',
    height: '100%',
    overflow: 'hidden',
    minWidth: '240px',
    maxWidth: '240px',
    position: 'fixed',
    top: '65px',
    width: '240px',
    zIndex: 5
  },

  light: {
    backgroundColor: 'white'
  },
  dark: {
    backgroundColor: '#29292F',
    color: '#DEDEDE'
  }
};

SideBar = Radium(SideBar);
export default SideBar;
