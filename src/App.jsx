import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProjectsScreen from "./screens/ProjectsScreen";
import Project1 from "./screens/projects/CuHacking";
import "./App.css"
import SideBar from './components/SideBar';


const App = (props) => {
  return (
    <Router>
      <div className="site-container">
        <SideBar />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/project" exact component={ProjectsScreen} />
          <Route path="/cuHacking" exact component={Project1} />
          {/* <Route path="/work" exact component={NonProfitScreen} />
          <Route path="/blog" exact component={OurTeamScreen} />
          <Route path="/moments" exact component={AboutScreen} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
