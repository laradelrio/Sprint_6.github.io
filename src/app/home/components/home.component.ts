import { Component, OnInit } from '@angular/core';
import historicalTextsData from '../../../assets/historicalTexts.json'
import { HistoricalTexts } from '../interfaces/historicalTexts.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public historicalTexts:  HistoricalTexts[] = historicalTextsData.historicalTexts;
  public isShownEscena: boolean = false;
  
  showEscena(): void{
    this.isShownEscena = true;
  }
  
  ngOnInit(): void {
  
  }
 
}
