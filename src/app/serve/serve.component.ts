//alperen

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.scss']
})
export class ServeComponent implements OnInit {
  serveTitle1="Hizmetlerimiz"
  serveText1="Netger'in uzman ekibiyle işinizi daha ileriye taşıyacağımız hizmetlerimiz!"
  bos:any
  lang=""
  
  icons=[
    {
      language:"tr",
      serveTitle1:"Hizmetlerimiz",
      serveText1:"Netger'in uzman ekibiyle işinizi daha ileriye taşıyacağımız hizmetlerimiz!",
      icon:"",

    },
    {
    language:"tr",
    icon:"fab fa-adversal",
    text:" Dijital Pazarlama",
  },
    {
      language:"tr",

      icon:"fas fa-laptop-code",

      text:" Web Tasarım",

    },
    {
      language:"tr",

      icon:"fas fa-hashtag",

      text:" Sosyal Medya Danışmanlığı",
    },
    {
      language:"tr",

      icon:"fas fa-mobile-alt",

      text:" Mobil Uygulama Geliştirme",

    },
    {
      language:"tr",

      icon:"fas fa-camera",

      text:" Fotograf ve Video Çekimi",

    },
    
]

// {
//   language:"en",
//   serveTitle1:"Our Services",
//   serveText1:"Our services of with Netger's expert team will take your business further!",
//   icon:"",

// },
// {
// language:"en",
// icon:"fab fa-adversal",
// text:" Digital Marketing",
// },
// {
//   language:"en",

//   icon:"fas fa-laptop-code",

//   text:" Web Design",

// },
// {
//   language:"en",

//   icon:"fas fa-hashtag",

//   text:" Social Media Consultacy",
// },
// {
//   language:"en",

//   icon:"fas fa-mobile-alt",

//   text:" Mobile App Development",

// },
// {
//   language:"en",

//   icon:"fas fa-camera",

//   text:" Photo and Video Shooting",

// }

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
        this.bos=this.icons.find(x=> x.language == "en")
        console.log(this.lang)
      }
      else{
          this.bos=this.icons.find(x=> x.language == "tr")
      }
    
    })
  }

}
