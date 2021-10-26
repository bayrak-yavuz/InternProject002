import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.scss']
})
export class Footer1Component implements OnInit {
  icons=[{
    icon: "fab fa-facebook ",
    text: "",
    url: "https://www.facebook.com/netgerajans/",
    leftSide:true,
     
  },

  {
    icon: "fab fa-twitter ",
    text: "",
    url: "https://www.twitter.com/netgerajans/",
    leftSide:true,
  
  },

  {
    icon: "fab fa-linkedin ",
    text: "",
    url: "https://tr.linkedin.com/organization-guest/company/netger",
    leftSide:true,
   
  },

  {
    icon: "fab fa-instagram  ",
    text: "",
    url: "https://www.instagram.com/netgerturkiye/",
    leftSide:true,
   
  },

  {
    icon: "fab fa-youtube ",
    text: "",
    url: "https://www.youtube.com/channel/UCXNS9S51ajlTsrBv8YK7gvw",
    leftSide:true,
  
  },]

  data0=[
    {
      icon:"",
      img:"/assets/img-footer1/logo-footx.png",
    },
    
    {
    icon: "fas fa-phone-alt",
    text: "    444 8 908",
    url: "tel:4448908",
    leftSide:true,
    
    
  },
  {
    icon: "fas fa-envelope ",
    text: "    info@netger.net",
    url: "mailto:info@netger.net",
    leftSide:true,
 
  },
  {
    
    icon: "fas fa-map-marker-alt",
    text: "Manas Bulvarı Adalet Mahallesi Folkart Towers A Kule No:47 B Kat:21 D:2107 Bayraklı/İzmir ",
    url: "",
    leftSide:true,
  },
  
]



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
