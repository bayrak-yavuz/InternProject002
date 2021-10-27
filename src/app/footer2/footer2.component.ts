//alperen

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss']
})
export class Footer2Component implements OnInit {
  footer1="Netger A.Ş. © Copyright 2020"
  footer2="EN"

  
  constructor() {}
  lang:any
  setLanguages():void{
    if (this.lang=="EN"){
      this.lang="TR"
      this.footer2="EN"

    }
    else {
      this.lang="EN"
      this.footer2 ="TR"

    }

  }


    
    
  ngOnInit(): void {
  }

}
