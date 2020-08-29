import React from 'react';
import './App.css'; 
import {hot} from 'react-hot-loader';//disable this before to run : npm rebuild
class App extends React.Component {
  render() {
    return (
      <div className="app"> React App !!</div>
    );
  }
}
export default hot(module)(App);
//export default App;//uncomment this line before to run: npm run rebuild