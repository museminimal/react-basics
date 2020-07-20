import React from 'react';
import Navigation from './components/navigation/Navigation';
// import Cat from './components/cat/Cat';
import Blog from './components/blog/Blog';
import Greating from './components/greating/Greating';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.firstBlogItems = [
      {
        title: "first item (1)",
        description: "first item (1) description"
      },
      {
        title: "second item (1)",
        description: "second item (1) description"
      }
    ];

    this.secondBlogItems = [
      {
        title: "first item (2)",
        description: "first item (2) description"
      },
      {
        title: "second item (2)",
        description: "second item (2) description"
      }
    ];
  }

  render() {
    return (
      <div className="App">
        <p>
          hello
        </p>

        <Navigation />
        <Blog title="First Blog Title!" items={this.firstBlogItems} />
        <Blog title="Second Blog Title!" items={this.secondBlogItems} />
        <Greating name="Cat" />
      </div>
    );
  }
}

export default App;
