import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';


class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };
  constructor(props) {
    super(props);
    this.state = {
      nrows: 5,
      ncols: 5,
      hasWon: false,
      board: this.createBoard(),
    };
  }

  createBoard() {
    let board = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn)
      }
      board.push(row);
    }
    return board
  }

  flipCellsAround(coord) {
    console.log(coord);
    let ncols = this.state.ncols;
    let nrows = this.state.nrows;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    // Flip the initial Cell
    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);

    let hasWon = board.every(row => row.every(cell => !cell));
    this.setState({ board, hasWon });
  }


  render() {
    if (this.state.hasWon) {
      return <h1>YOU WON!!!</h1>
    }

    let tblBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        let coord = `${y}-${x}`
        row.push(<Cell
          key={coord}
          isLit={this.state.board[y][x]}
          flipCellsAroundMe={() => this.flipCellsAround(coord)} />)
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <div>
        <h1>LIGHTS OUT</h1>
        <table className="Board">
          <tbody>
            {tblBoard}
          </tbody>
        </table>
      </div>

    )
  }
}


export default Board;
