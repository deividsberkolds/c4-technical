import './App.css';
import BeersPage from './components/BeersPage/BeersPage';
import BeersPageDetails from './components/BeersDetailsPage/BeersDetailsPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const NoMatchRoute = () => <div>404 page</div>;
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={BeersPage} />
        <Route path="/beer/:beerId" component={BeersPageDetails} />
      </Switch>
    </Router>
  );
}

export default App;