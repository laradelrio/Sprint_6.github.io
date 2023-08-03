import { Component, OnInit } from '@angular/core';
import storyTextsData from '../../../assets/storyTexts.json'
import { StoryTexts } from '../interfaces/storyTexts.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public storyTextsHome: StoryTexts[] = storyTextsData.storyTexts;
  public isShownEscena: boolean = false;

  showEscena(): void {
    this.isShownEscena = true;
  }

  ngOnInit(): void {

  }
}
