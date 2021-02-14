import React from 'react';
import $ from 'jquery';

import GroceryList from './GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groceries: [],
      textbox: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <input type="text"/>
        <input type="submit"/>
        <GroceryList groceries={this.state.groceries}/>
      </div>
    )
  }
  handleChange(){
    this.setState()
  }
  handleSubmit() {
    $.ajax({
      url: 'http://localhost:8080/groceries',
      type: 'POST',
      success: ()=>{}
    })
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