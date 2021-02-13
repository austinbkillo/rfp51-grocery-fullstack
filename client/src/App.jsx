import React from 'react';
import $ from 'jquery';

import GroceryList from './GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groceries: []
    }
  }
  render() {
    return (
      <div>
        this is my App
        <input></input>
        <GroceryList state={this.state}/>
      </div>
    )
  }
  componentDidMount() {
    $.ajax({
      url: 'http://localhost:8080/groceries',
      type: 'GET',
      success: (result)=>{
        console.log('Component did mount success')
        this.setState({groceries: result})
      },
      error: ()=>{
        console.log('COMPONENT DIDNT MOUNT')
      }
    })
  }
}
export default App;