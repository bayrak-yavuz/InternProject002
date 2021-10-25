import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.scss']
})
export class Footer1Component implements OnInit {

  data=[{
    head:"Ürünler",
    text:""
  },
  {
    head:"",
    text:"Netger Avukat"
  },
  {
    head:"",
    text:"Netger Doktor"
  },
  {
    head:"Hizmetlerimiz",
    text:""
  },
  {
    head:"",
    text:"Dijital Pazarlama"
  },
  {
    head:"",
    text:"Web Tasarım"
  },
  ]
  data2=[
    {
      head:"Bağlantılar",
      text:""
    },
    {
    
      head:"",
      text:"Refeanslar"
    },{
      head:"",
      text:"Kampanyalar"
    },{
      head:"",
      text:"Netger Baskı"
    },{
      head:"",
      text:"Blog"
    },{
      head:"",
      text:"Kurumsal"
    },
    {
      head:"",
      text:"İnsan Kaynakları"
    },
    {
      head:"",
      text:"İletişim"
    },
    {
      head:"",
      text:"Fatura Ödeme"
    },

  ]

  data3=[{
    
      head:"Yasal",
      text:""
    },
   
    {
    
      head:"",
      text:"Mesafeli Satış Sözleşmesi"
    },
    {
    
      head:"",
      text:"Ön Bilgilendirme Formu"
    },
    {
    
      head:"",
      text:"Kişisel Verilerin Korunması"
    },
    {
    
      head:"",
      text:"Gizlilik Politikası"
    },
    {
    
      head:"",
      text:"Kullanım Koşulları"
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
