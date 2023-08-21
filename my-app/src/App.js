import React, {useState} from 'react';
import './styles/App.css';
import PostItem from './components/PostItem';

function App() {
  const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ');


  return (
    <div className="App">
      <PostItem/>
    </div>
  );
}

export default App;
