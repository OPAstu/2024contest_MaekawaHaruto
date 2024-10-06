import logo from './OPA_grow_skill.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>オンリーワンプログラミングアカデミー</code> 
        </p>
        <a
          className="App-link"
          href="https://opa.terakoya.tokyo.jp/school/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn https://opa.terakoya.tokyo.jp/school/
        </a>
      </header>
    </div>
  );
}

export default App;