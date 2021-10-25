import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi2',
  templateUrl: './navi2.component.html',
  styleUrls: ['./navi2.component.scss']
})
export class Navi2Component implements OnInit {
  list=[

        { 
        icon: "fas fa-mouse-pointer",
        text: "    Site Yaptır",
        url: "https://netger.net/",        
      },
      {
        icon: "fas fa-ad ",
        text: "  Reklam Ver",
        url: "https://netger.net/",
        
      },
      {
        icon: "fas fa-table",
        text: " Bize Ulaşın",
        url: "https://netger.net/",
        
      },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
