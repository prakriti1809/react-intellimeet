/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import InputBox from './form';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemList : []
    }

  }

  add (item) {
    this.setState({
      itemList: [...this.state.itemList, item]
    })
  }
  render() {


    return (
      <div>
        <InputBox addItem={this.add.bind(this)}/>
        <ul>
          { this.state.itemList.map(item => <li> {item.name}</li>) }
        </ul>
      </div>
    )
  }

}

