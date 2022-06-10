import { Component } from '@angular/core';
import { wordList } from './words';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  wordList;
  wordTarget;

  targetArray;
  guessArray;

  firstGuess = "trace";


  guessNumber = 1;

  async ngOnInit(): Promise<void> {
    await this.getWords();



  }

  getWords() {
    this.wordList = wordList.split('\n');
    const rndInt = Math.floor(Math.random() * this.wordList.length) + 1;
    this.wordTarget = this.wordList[rndInt];
    this.targetArray = this.wordTarget.split('\n');
    this.guessArray = this.firstGuess.split('\n');
  }

  makeGuess(){

    for(let i=0;i<4;i++){
      if(this.guessArray[i] == this.targetArray)
    }

    

    })
  }
}
