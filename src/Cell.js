import React, { Component, Fragment } from 'react';
import {addEllipsis} from './helpers';
import './cell.css'

class Cell extends Component {
  state = {
    isCollapsed: true
  }

  toggleDetails = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  render() {
    const { score, title, by, text } = this.props.cell;
    let collapsed = this.state.isCollapsed;
    
    return (
  
      <div className={`se__cell ${collapsed ? '' : 'is-expanded'}`} onClick={this.toggleDetails}>    
          {
            collapsed  
              ? (<Fragment>  
                  <header className="title">{addEllipsis(title,60)}</header>
                  <main className="content" dangerouslySetInnerHTML={{__html: addEllipsis(text, 120)}}></main>
                  <footer>
                    <p className="score">{score}</p>
                    <span className="author">By <strong>{by}</strong></span>
                  </footer>
                </Fragment>)
              : (<Fragment>  
                  <header className="title">{addEllipsis(title,200)}</header>
                  <main className="content" dangerouslySetInnerHTML={{__html: addEllipsis(text, 1200)}}></main>
                  <footer>
                    <p className="score">{score}</p>
                    <span className="author">By <strong>{by}</strong></span>
                  </footer>
                </Fragment>)
          }
      </div>
    )
  }
};

export default Cell;