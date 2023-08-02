import { Component, Input } from '@angular/core';
import { HistoricalTexts } from '../home/interfaces/historicalTexts.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {

  @Input() 
  public textsList: HistoricalTexts[] = []
}
