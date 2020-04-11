import React from 'react';
// import axios from 'axios';
import { validateFile } from './validate.js';
function App() {
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
  function fileSelectHandle(e) {
    var validate_file_result = validateFile(e);
    console.log('validate_file_result: ' + validate_file_result);
    if (validate_file_result === 'success') {
      console.log("In success");
    } else {
      console.log(validate_file_result);
    }
  }
  return (
    <form onSubmit={uploadImage}>
      <h3>Upload file</h3>
      <input type='file' onChange={fileSelectHandle} name='fileName' />
      <br />
      <br />
      <button type='submit'>Upload</button>
    </form>
  );
}

export default App;
