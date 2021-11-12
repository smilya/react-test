import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';
import Content from './components/Content';

import initialContent  from './redux/initialContent';

function App() {
  return (
    <div className="App">
      <div className="header">
        <InputField label="Путь" />
        <InputField label="Новое значение" />
        <Button caption="Применить"></Button>
      </div>
      <div className="content">
        <Content content={initialContent} />
       </div>
    </div>
  );
}

export default App;
