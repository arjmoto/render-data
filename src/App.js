
import React, { Component} from 'react';
import Title from './components/Title';
import Item from './components/Item';
class App extends Component {
  constructor(){
    super();
    this.items= [
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
    ]
  }

  render(){
    const items = this.items;
    const elmItem = items.map((item, index) =>{
      return (
        <Item 
        key = {index} 
        item = {item} 
        index = {index}/>
      );
    })
    return(

      <div>
        <Title/>
        <div className="panel panel-success">
          <div className="panel-heading">List Item</div>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th style={{width: '10%'}} className="text-center">#</th>
                <th>Company</th>
                <th style={{width: '25%'}} className="text-center">Contact</th>
                <th style={{width: '25%'}} className="text-center">Country</th>
              </tr>
            </thead>
            <tbody>
            {elmItem}
              
            </tbody>
          </table>
        </div>
      </div>
    ) 
}
}

export default App;
