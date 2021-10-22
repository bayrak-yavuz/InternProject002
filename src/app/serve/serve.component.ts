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
  buton1Text="Dijital Pazarlama"
  buton2Text="Web Tasarım"
  buton3Text="Sosyal Medya Danışmanlığı"
  buton4Text="Mobil Uygulama Geliştirme"
  buton5Text="Fotograf ve Video Çekimi"

  constructor() { }

  ngOnInit(): void {
  }

}
