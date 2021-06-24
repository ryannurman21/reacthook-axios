
import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios'; 

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(res => {setData(res.data);
  });
});  
  
  return (
    <div>
      
      <h1>REACT HOOK & GET API</h1>
        <section>
          <ul>
            {data.map(item => (
              <li>{item.title}</li>
            ))}
          </ul>
        </section>
    </div>
  );
}

export default App;
