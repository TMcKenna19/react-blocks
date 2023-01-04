import './App.css';
import Advertisment from './components/Advertisment';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import SubContents from './components/SubContents';

function App() {
  return (
    <div className="Container" style={{

      width: "95%",
      backgroundColor: "#dddddd",
      padding: "20px",
      margin: "20px",
      border: "3px solid #000"
    }}>
      <div className="App">
        <Header />
        <Navigation  />
        <Main>
          <SubContents />
          <SubContents />
          <SubContents />
          <Advertisment />
        </Main>
      </div>
    </div>

  );
}

export default App;
