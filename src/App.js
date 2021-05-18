
import './App.scss';
import 'antd/dist/antd.css';
import Header from './components/Header/Header';
import Page from './pages/Page';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Page />
      </div>
    </Router>
  );
}

export default App;