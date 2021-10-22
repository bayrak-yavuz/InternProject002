//alperen

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  titleClient="Müşterilerimiz"
  textClient="Dijital hizmetlerde tercihini Netger'den yana kullanan bazı müşterilerimiz!"
  constructor() { }

  ngOnInit(): void {
  }

}
