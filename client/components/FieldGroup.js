import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

function FieldGroup(props, context) {
  return (
    <FormGroup controlId={props.id} validationState={props.validationState}>
      <ControlLabel>{props.label}</ControlLabel>
      <FormControl {...props} />
      {props.help && <HelpBlock>{props.help}</HelpBlock>}
    </FormGroup>
  );
}

FieldGroup.propTypes = {
};

export default FieldGroup;
