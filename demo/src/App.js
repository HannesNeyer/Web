import logo from './logo.svg';
import './App.css';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        hello
        <Button name="Hans" age="17"/>
        <Button name="Sepp"/>
        <Button name="Peter"/>
      </header>
    </div>
  );
}

props = {name: "hans", age:17}

export default App;
