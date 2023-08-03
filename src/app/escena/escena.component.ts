import { Component, Input } from '@angular/core';
import { StoryTexts } from '../home/interfaces/storyTexts.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {

  @Input()
  public textsList: StoryTexts[] = []

  public currentSentence: number = 0;

  prev(): void {
    if (this.currentSentence > 0) {
      this.currentSentence--;
    }
  }

  next(): void {
    if (this.currentSentence < (this.textsList.length - 1)) {
      this.currentSentence++;
    }
  }
}

