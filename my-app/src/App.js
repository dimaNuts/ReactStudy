import React, {useState} from 'react';


function App() {
  const [count, setCount] = useState(5);

  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={() => likes += 1}>
       Increment
      </button>
      <button onClick={() => likes -= 1}>
       Decrement
      </button>
    </div>
  );
}

export default App;
