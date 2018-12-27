import React from 'react';
import PropTypes from 'prop-types';

import styles from './Menu.css';

function Menu(props, context) {

  const activeMenu = props.activeMenu;
  let activeMenuClass = styles.menu;
  //console.log(styles);
  (activeMenu) ? activeMenuClass = styles.menu : activeMenuClass = '';

  return (
    <div className={!activeMenu && styles.menu || styles.menuactive }>
      <span onClick={props.toggleActiveMenu}>
        <i></i>
        <i></i>
        <i></i>
      </span>
      <div className={styles.menuContent}>
        <ul>
          <li><a href="/#LogIn">Log In</a></li>
        </ul>
      </div>
    </div>
  );
}

Menu.propTypes = {
};

export default Menu;
