// alperen


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.scss']
})
export class Body1Component implements OnInit {
  body1Title="Dijital hayaller şimdi gerçekler!"
  body1Text="Netger dijital reklam ajansı işinizi büyütmeniz ve geliştirmeniz için dijital çözümler üretir."

  constructor() { }

  ngOnInit(): void {
  }

}
