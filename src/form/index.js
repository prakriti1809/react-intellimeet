import React, {Component} from 'react';

export default class InputBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  handleSubmit(e){
    e.preventDefault()
    let {text} = this.state;
    let { addItem } = this.props;
    let name = text.split('-')[0]
    let price = text.split('-')[1]
    addItem({name, price, qty: 1})
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={this.state.text} onChange={(e) => {this.setState({text: e.target.value})}} placeholder="enter item name and price separated by hyphen"/>
      </form>
    )
  }
}
