import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  show = true;
  turn: string = 'X';
  nOsquares = Array(9).fill(null); //folosit doar la iterare
  records = Array<string>(9).fill(null); //stocheaza istoria punctelor marcate
  winner = null;
  constructor() { }

ngOnInit() { }

makeMove(index: number){
  if(!this.records[index]){
    this.records.splice(index, 1, this.turn);
    this.turn === 'O' ? this.turn = 'X' : this.turn = 'O';
    this.winner = this.calculateWinner();
  }
}

resetGame(){
  setTimeout(() => {
    this.show = false;
    setTimeout(() => this.show = true, 30)
  }, 30);
  this.records = new Array<string>(9).fill(null);
  this.turn = 'X';
  this.winner = null;
}

calculateWinner(){
  if(this.winner)
  return this.winner;

  const lines = [[0,1,2],[3,4,5],
  [6,7,8], [0,3,6],[1,4,7],
  [2,5,8],[0,4,8],[2,4,6]];

  for(let i = 0; i < lines.length; i++){
    const [a,b,c] = lines[i];
    if(
      this.records[a] &&
      this.records[a] === this.records[b] &&
      this.records[a] === this.records[c]
    ) {
      return this.records[a]
    }
  }
  return null;
}

}
