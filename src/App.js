import React from 'react';
import { validateFile } from './validate.js';
import PropTypes from 'prop-types';
// import axios from 'axios';

/*
1. The props used in this component is of type Object and object name is "formDetails".
2. Props Details are :-
    1. labelClass: Class name for the field tag (Default empty).
    2. labelText: Labe field text name (Default empty).
    3. inputFieldClass: Class name for the input field (Default empty).
    4. aHiddenValue: aria-hidden attribute value for the input field (Default: true).
    5. aRequiredValue: aria-required attribute value for the input field (Default: true).
    6. submitButtonText: Submit button text value (Default: Upload).

*/

function App(props) {
  var submitButtonText = '';

  if (props.formDetails.submitButtonText === '') {
    submitButtonText = 'Upload';
  } else {
    submitButtonText = props.formDetails.submitButtonText;
  }

  function uploadImage(e) {
    e.preventDefault();
    // const data = new FormData();
    // const URL = 'http://localhost:3000/src/pics';
    // console.log(fileName);
    // data.append('image', fileName);
    // console.log(data);
    // axios
    //   .post(URL, data)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log('not worked', err);
    //   });
    // if (fileName !== '') {
    //   console.log(fileName);
    // }
  }

  function fileChangeHandle(e) {
    var validate_file_result = validateFile(e);
    console.log('validate_file_result: ' + validate_file_result);
    if (validate_file_result === 'success') {
      console.log('In success');
    } else {
      console.log(validate_file_result);
    }
  }

  return (
    <form onSubmit={uploadImage}>
      <label htmlFor='file' className={props.formDetails.labelClass}>
        {props.formDetails.labelText}
      </label>
      <input
        type='file'
        onChange={fileChangeHandle}
        name='fileName'
        className={props.formDetails.inputFieldClass}
        aria-hidden={props.formDetails.aHiddenValue}
        aria-required={props.formDetails.aRequiredValue}
      />
      <button type='submit'>{submitButtonText}</button>
    </form>
  );
}
/* PropTypes for the components */
App.propTypes = {
  formDetails: PropTypes.shape({
    className: PropTypes.string,
    labelText: PropTypes.string,
    inputFieldClass: PropTypes.string,
    aHiddenValue: PropTypes.bool.isRequired,
    aRequiredValue: PropTypes.bool.isRequired,
    submitButtonText: PropTypes.string.isRequired,
  }),
};


// Default Value of the required Props : Will only run if Props are not provided

App.defaultProps = {
  formDetails: {
    aHiddenValue: true,
    aRequiredValue: true,
    submitButtonText: 'Upload',
  },
};

// Export Default
export default App;
