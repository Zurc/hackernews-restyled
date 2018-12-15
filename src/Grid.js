import React, { Component }  from 'react';
import Cell from './Cell';
import './index.css'

class Grid extends Component {
  state = {
    cells: []
  };

  componentWillMount() {
    const baseUrl = 'https://hacker-news.firebaseio.com/v0/';

    fetch(baseUrl + '/askstories.json')
    .then((res)=>res.json())
    .then((data)=> {
      data.forEach((item)=>{
        fetch(baseUrl + '/item/' + item + '.json')
          .then((res)=>res.json())
          .then((item)=> {
            const joined = this.state.cells.concat(item);
            this.setState({ cells: joined })
          })
      })
    })
  }
  
  render() {
    const cells = this.state.cells.map((cell) =>
      <Cell key={cell.id} cell={cell} />
    );

    return (
      <section className="se-grid">
        {cells}
      </section>
    );
  }
}

export default Grid;