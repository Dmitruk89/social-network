
import './App.scss';
import 'antd/dist/antd.css';
import Page from './pages/Page';
import {BrowserRouter as Router} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderContainer />
        <Page />
      </div>
    </Router>
  );
}

export default App;