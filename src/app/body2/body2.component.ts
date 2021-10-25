import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.scss']
})
export class Body2Component implements OnInit {

  bold:String='<p class="aciklama">Netger internet sitenizi tüm platformlarda<br> <span style="font-weight:bolder;" >en iyi</span> görüntülenecek şekilde tasarlar.</p>'

  page={
    head:"Tüm Platformlar Tek Çözüm",
    
  }
  constructor() { }

  ngOnInit(): void {
  }
  htmlStr:String=""
}
