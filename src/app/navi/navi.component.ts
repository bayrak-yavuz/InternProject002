import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    
  }
 
  public showFirst:boolean=true;
  openNav(){
    this.showFirst=!this.showFirst;

  }

}
