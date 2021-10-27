import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi3',
  templateUrl: './navi3.component.html',
  styleUrls: ['./navi3.component.scss']
})
export class Navi3Component implements OnInit {
  mahmut:any;
  constructor(private router:Router) { }
  data=[
    {
    language:"en",
    page:{
     call:"Call You",
     mail:"info@netger.net",
    },
    },
    {
      language:"tr",
      page:{
        call:"Sizi Arayalım",
        mail:"info@netger.net",
      },
      }
  ]
  lang="";
  ngOnInit(): void {
    this.router.events.subscribe(res=>{
      if (res instanceof NavigationEnd){
       this.lang=res.url
      }
      if(this.lang=="/"){
        this.mahmut=this.data.find(x => x.language == "tr")
      }
      else if(this.lang=="/en"){
        this.mahmut=this.data.find(x => x.language == "en")
      }
      console.log(this.lang)
    })
    console.log(this.lang)
  }
}
