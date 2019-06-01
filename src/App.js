import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { open: false }
  }

  componentDidMount() {
    this.myComponentRef.addEventListener("move", (e) => {
      this.setState({ open: !this.state.open })
    });
  }

  getWrapperClass = () => {
    return this.state.open ? 'open' : 'closed'
  }

  render() {
    return (
    <div className={this.getWrapperClass()}>
      <p>Component should appear below</p>
      <my-component 
        ref={elem => this.myComponentRef = elem}
        first="Stencil"
        last="'Don't call me a framework' JS" />
    </div>
    );
  }
}

export default App;
