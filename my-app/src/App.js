import React, {useState} from 'react';
// import Counter  from './components/Counter';

function App() {
  const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ');


  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>
            JavaScript - язык программирования
          </div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
