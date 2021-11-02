import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AboutPage } from "./about/AboutPage";
import { HomePage } from "./home/HomePage";
import { CreateRecipe } from "./recipies/CreateRecipe";
export const App = () => {
  debugger;
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/recipies/new" component={CreateRecipe} />
      </div>
    </Router>
  );
};
