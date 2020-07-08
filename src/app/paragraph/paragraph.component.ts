import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  seeParagraph = false;
  laps = [];
  lap = 0;

  constructor() { }

  ngOnInit(): void {
  }

  displayParagraph(){
    this.lap++;
    this.seeParagraph = !this.seeParagraph;
    this.laps.push(this.lap);
  }

  
  
}
