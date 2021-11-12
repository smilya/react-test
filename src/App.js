import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';
import Content from './components/Content';

import initialContent from './redux/initialContent';

function App() {
  const [content, setContent] = useState(initialContent);
  const [path, setPath] = useState('');
  const [newValue, setNewValue] = useState('');

  function getNewContent(oldContent, codeString) {
    const content = [...oldContent];
    eval(codeString)
    return content;
  }

  return (
    <div className="App">
      <div className="header">
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
          const codeString = `${path}=${newValue}`;
          const newContent = getNewContent(content, codeString);
          setContent(newContent)
        }} />
      </div>
      <div className="content">
        <Content content={content} />
      </div>
    </div>
  );
}

export default App;
