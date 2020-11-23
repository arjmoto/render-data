import React, { Component} from 'react';
import Item from './Item';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

    render(){
        const items = this.props.items;
        console.log(items);
        const elmItem = items.map((item, index) =>{
          return (
            <Item 
            key = {index} 
            item = {item} 
            index = {index}/>
          );
        })
        return(
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
      
        ) 
    }
}

export default List;