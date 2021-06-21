import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Header></Header>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
