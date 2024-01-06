import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends React.Component {
  pageSize=6;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            {/* Define routes using the Route component */}
            <Route exact  path="/newsapp.github.io/" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/newsapp/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/newsapp/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/newsapp/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/newsapp/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/newsapp/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/newsapp/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/newsapp/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}