import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import SelectType from './pages/SelectType';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/select-type' component={SelectType} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
