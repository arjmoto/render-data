import React, { Component} from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render(){
      const {item} = this.props;
      const {index} = this.props;
        return(
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{item.company}</td>
                <td className="text-center">{item.contact}</td>
                <td className="text-center">{item.country}</td>
              </tr>
        ) 
    }
   
}

export default Item;