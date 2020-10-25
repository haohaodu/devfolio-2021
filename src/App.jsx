import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectsScreen from "./screens/ProjectsScreen.jsx";
import AboutScreen from "./screens/AboutScreen.jsx";
import WorkScreen from "./screens/WorkScreen";
import WritingScreen from "./screens/WritingScreen";
import ExtraScreen from "./screens/ExtraScreen";
import cuHacking from "./screens/projects/CuHacking";
import iContribute from "./screens/projects/iContribute";
import "./App.css"
import SideBar from './components/SideBar';


const App = (props) => {


  return (
    <Router>
      <div className="site-container">
        <SideBar />
        <Switch>
          <Route path="/" exact component={ProjectsScreen} />
          <Route path="/projects" exact component={ProjectsScreen} />
          <Route path="/icontribute" exact component={iContribute} />
          <Route path="/cuHacking" exact component={cuHacking} />
          <Route path="/work" exact component = {WorkScreen} />
          <Route path="/about" exact component = {AboutScreen} />
          <Route path="/writing" exact component = {WritingScreen} />
          <Route path="/clubs" exact component = {ExtraScreen} />
          {/* <Route path="/work" exact component={NonProfitScreen} />
          <Route path="/blog" exact component={OurTeamScreen} />
          <Route path="/moments" exact component={AboutScreen} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
