//alperen

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss']
})
export class Footer2Component implements OnInit {
  footer1="Netger A.Ş. © Copyright 2020"
  footer2="EN"
  constructor() { }

  ngOnInit(): void {
  }

}
