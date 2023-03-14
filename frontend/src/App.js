import React, { useState, useEffect } from 'react';

import './App.css';
import axios from 'axios';

function App() {

  const url = process.env.REACT_APP_PROD_URL || "http://127.0.0.1:8000/";

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get(url)
    .then(res => setDatas(res.data))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <pre className='json'>{JSON.stringify(datas,null, 2)}</pre>
      <h1>HI!</h1>
    </div>
  );
}

export default App;