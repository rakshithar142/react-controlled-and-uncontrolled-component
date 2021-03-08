import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import FormValidation from './components/controlled_uncontrolled_component/FormValidation';
import FormValidation2 from './components/controlled_uncontrolled_component/FormValidation2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>***********************************************************************</p>
        <Counter />
        <p>**********************************************************************</p>
        <FormValidation />
        <p>**********************************************************************</p>
        <FormValidation2 />
      </header>
    </div>
  );
}

export default App;
