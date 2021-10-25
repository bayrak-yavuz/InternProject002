//alperen

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.scss']
})
export class ServeComponent implements OnInit {
  serveTitle1="Hizmetlerimiz"
  serveText1="Netger'in uzman ekibiyle işinizi daha ileriye taşıyacağımız hizmetlerimiz!"
  
  
  icons=[{
    icon:"fab fa-adversal",
    text:" Dijital Pazarlama",
  },
    {
      icon:"fas fa-laptop-code",

      text:" Web Tasarım",

    },
    {
      icon:"fas fa-hashtag",

      text:" Sosyal Medya Danışmanlığı",
    },
    {
      icon:"fas fa-mobile-alt",

      text:" Mobil Uygulama Geliştirme",

    },
    {
      icon:"fas fa-camera",

      text:" Fotograf ve Video Çekimi",

    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
