import * as React from 'react';
import { ipcRenderer } from 'electron';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }
  componentDidMount() {
    ipcRenderer.on('message', (ev, data) => {//监听start
      console.log(ev, data)
      this.setState({
        count: data.count
      })
    })
  }
  handleIncrement = () => {
    ipcRenderer.send('message', {count: this.state.count + 1})
  }
  handleDecrement = () => {
    ipcRenderer.send('message', {count: this.state.count - 1})
  }
  render() {
    const { count } = this.state
    return (
      <div className="App">
        <div>{count}</div>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default App;
