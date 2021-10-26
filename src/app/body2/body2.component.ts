import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private route: ActivatedRoute ) {  }

  ngOnInit(): void {
    const lang=this.route.snapshot.paramMap.get('id');
    console.log(lang)
    if(lang==null){
      this.mahmut=this.data.find(x => x.language == "tr")
    }
    else if(lang=="en"){
      this.mahmut=this.data.find(x => x.language == "en")
    }
    
    
  }
  
}
