import React, { Component } from 'react';

class TodoSearch extends Component{
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state ={
      text:""
    };
  }

  search(){
    const query = Object.freeze({text:this.state.text});
    if (this.props.onSearch){
      this.props.onSearch(query)
    }
  }

  handleChange(event){
    this.setState({text: event.target.value});
  }

  render(){
    return (
      <form>
      <input onChange = {this.handleChange} value = {this.state.text}/>
      <button onClick = {this.search} type ="button">Search!</button>
      </form>
    );
  }
}


export default TodoSearch;
