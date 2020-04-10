import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [fileName, setFileName] = useState('');

  function uploadImage(e) {
    e.preventDefault();
    const data = new FormData();
    const URL = 'http://localhost:3000/src/pics';
    console.log(fileName);
    data.append('image', fileName);
    console.log(data);
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('not worked', err);
      });
    if (fileName !== '') {
      console.log(fileName);
    }
  }
  function validateFile(e) {
    const fullType = e.target.files[0].type.split('/');
    let type = fullType[1].toUpperCase();
    let size = e.target.files[0].size;
    console.log(type, size);
    if ((type === 'JPEG' || 'PNG') && size <= 4000000) {
      setFileName(e.target.files[0]);
    } else if (type === 'MP4' && size <= 20000000) {
      setFileName(e.target.files[0]);
      let mime = e.target.files[0].type;
      let rd = new FileReader();
      rd.onload = function (e) {
        console.log('Onload function');
        console.log(mime, rd);
        console.log(e.target.result);
        var blob = new Blob([e.target.result], { type: mime }), // create a blob of buffer
          url = URL.createObjectURL(blob), // create o-URL of blob
          video = document.createElement('video');
        video.preload = 'metadata';
        video.addEventListener('loadedmetadata', function () {
          // when enough data loads
          console.log(Math.round(video.duration) + 's');
        });
        video.src = url;
        console.log(video.src);
      };
      rd.readAsArrayBuffer(e.target.files[0]);
    } else {
      alert('Large Size');
      e.target.value = '';
    }
  }
  function fileSelectHandle(e) {
    validateFile(e);
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
