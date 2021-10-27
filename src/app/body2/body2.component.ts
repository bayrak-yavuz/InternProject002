import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.scss']
})
export class Body2Component implements OnInit {
  mahmut:any;

  data=[
    {
    language:"en",
    page:{
      head:"All Platforms One Solution",
      button:"Call"
    },
    bold:'<p class="aciklama">Your website will look awesome on all devices.</p>'
    },


    {
      language:"tr",
      page:{
        head:"Tüm Platformlar Tek Çözüm",
        button:"Sizi Arayalım"
      },
      bold:'<p class="aciklama">Netger internet sitenizi tüm platformlarda<br> <b>en iyi</b> görüntülenecek şekilde tasarlar.</p>'
      }
  ]
 

  bold:String='<p class="aciklama">Netger internet sitenizi tüm platformlarda<br> <b>en iyi</b> görüntülenecek şekilde tasarlar.</p>'
  
  page={
    head:"Tüm Platformlar Tek Çözüm",
   button:"Sizi Arayalım"
   }


  constructor(private route: ActivatedRoute, private router:Router  ) {}
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
