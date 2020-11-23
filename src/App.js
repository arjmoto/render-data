
import React, { Component} from 'react';
import Title from './components/Title';
import List from './components/List';

class App extends Component {
  state = {
    items: [
      {
        company:"Alfreds Futterkiste",
        contact:"Maria Anders",
        country:"Germany"
      },
      {
        company:"Centro comercial Moctezuma",
        contact:"Francisco Chang	",
        country:"Mexico"
      },
      {
        company:"Ernst Handel",
        contact:"Roland Mendel",
        country:"Austria"
      },
      {
        company:"Island Trading",
        contact:"Helen Bennett",
        country:"UK"
      }
    ],
 }

  constructor(props) {
    super(props)
  }

  render(){

    return(
      <div>
        <Title/>
        <List 
          items = {items}/>
      </div>
    ) 
}
}

export default App;
