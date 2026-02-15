import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting.jsx';
import { Message } from './Message.jsx';
import { Button } from './Button.jsx';

const name = "Danil";
const text = "Lorem ipsum";
const onClick = (e) => {
  e.preventDefault();
  console.log("Button is pressed");
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="aaa"></a>
        <Greeting name={name}/>
        <Message text={text}></Message>
        <Button onClick={onClick} className="btn"></Button>
      </header>
    </div>
  );
}

export default App;
