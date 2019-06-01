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

  getComponentClass = () => {
    return this.state.open ? 'open' : 'closed'
  }

  render() {
    return (
    <div className={this.getComponentClass()}>
      <p>Component should appear below</p>
      <my-component className={ this.getComponentClass()} ref={elem => this.myComponentRef = elem} first="Stencil" last="'Don't call me a framework' JS"></my-component>
    </div>
    );
  }
}

export default App;
