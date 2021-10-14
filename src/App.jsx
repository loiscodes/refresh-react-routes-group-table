import "./App.css";
import GroupTableComponent from "./components/group-table.component";
import GroupDetailsComponent from "./components/group-details.component";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={GroupTableComponent} />
        <Route exact path="/:groupId" component={GroupDetailsComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
