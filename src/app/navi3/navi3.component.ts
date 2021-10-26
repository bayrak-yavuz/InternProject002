import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi3',
  templateUrl: './navi3.component.html',
  styleUrls: ['./navi3.component.scss']
})
export class Navi3Component implements OnInit {

  constructor() { }

  
  text1:String="Sizi Arayalım";

  text2:String="info@netger.net"
  ngOnInit(): void {
  }

}
