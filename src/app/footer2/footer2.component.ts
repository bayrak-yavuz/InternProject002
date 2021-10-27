//alperen

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss']
})
export class Footer2Component implements OnInit {
  footer1="Netger A.Ş. © Copyright 2020"
  bos:any
  lang=""
  langBool=true
  body1=[
    {
      language:"tr",
      footer2:"EN"




    },
    {
      language:"en",
      footer2:"TR"



    }
  ]
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}



    
  
  ngOnInit(): void {
    this.router.events.subscribe(res=>{
      if (res instanceof NavigationEnd ){
        this.lang=res.url
      }
      if(this.lang=="/en"){
        this.bos=this.body1.find(x=> x.language == "en")
        this.langBool=false
        console.log(this.langBool)
      }
      else{
          this.bos=this.body1.find(x=> x.language == "tr")
          console.log(this.lang)
          this.langBool=true
          console.log(this.langBool)

      }
    
    })
}
}