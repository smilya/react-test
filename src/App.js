import React, { useState } from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Content from './components/Content';

import initialContent from './redux/initialContent';

function App() {
  const [content, setContent] = useState(initialContent);
  const [path, setPath] = useState('');
  const [newValue, setNewValue] = useState('');

  function getNewContent(oldContent, path, newValue) {
    const clearPath = path.replace(/['"]/g, '');
    const codeString = `${clearPath}=${newValue}`;
    const content = [...oldContent];
    eval(codeString)
    return content;
  }

  return (    
    <div className="App">
      <Inputs />
      {/* <div className="header">
        <InputField
          label="Путь"
          onChange={e => {
            setPath(e.target.value);
          }}
        />
        <InputField
          label="Новое значение"
          onChange={e => {
            setNewValue(e.target.value);
          }}
        />
        <Button caption="Применить" onClick={() => {
          const newContent = getNewContent(content, path, newValue);
          setContent(newContent)
        }} />
      </div> */}
      <div className="content">
        <Content content={content} />
      </div>
    </div>
  );
}

export default App;
