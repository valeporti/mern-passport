import React from 'react';
import PropTypes from 'prop-types';

function Button(props, context) {
  return (
    <div>
      <button onClick={props.action}>
        {props.content}
      </button>
    </div>
  );
}

Button.propTypes = {
};

export default Button;
