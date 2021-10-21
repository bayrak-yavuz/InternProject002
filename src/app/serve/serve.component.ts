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
  constructor() { }

  ngOnInit(): void {
  }

}
