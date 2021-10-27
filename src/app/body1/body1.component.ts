// alperen


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.scss']
})
export class Body1Component implements OnInit {
  
  bos:any;
  
  body1=[
    {
      language:"tr",
      body1Title:"Dijital hayaller şimdi gerçekler!",
      body1Text:"Netger dijital reklam ajansı işinizi büyütmeniz ve geliştirmeniz için dijital çözümler üretir."
    },
    {
      language:"en",
      body1Title:"Digital dreams are now facts!",
      body1Text:"Netger digital advertising agency provides digital solutions to grow and develop your business. This makes your brands even stronger!"
    }


  ]
  
 
  lang="";
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(res=>{
      if (res instanceof NavigationEnd ){
        this.lang=res.url
      }
      if(this.lang=="/en"){
        this.bos=this.body1.find(x=> x.language == "en")
      }
      else{
          this.bos=this.body1.find(x=> x.language == "tr")
      }
    
    })
    
  }

}
