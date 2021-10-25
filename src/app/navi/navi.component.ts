import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {

  icon = [{
    icon: "fas fa-phone-alt",
    text: "Sizi Arayalım",
    url: ""
  }]
  


    text1:String="Ürünler"
    

  
    text2:String="Hizmetler"
  


dropdownUrunler=[
  {
    text:"Dijital Pazarlama"
  },
  {
    text:"Web Tasarım"
  },
  {
    text:"Sosyal Medya Danışmanlığı"
  },
  {
    text:"Mobil Uygulama Geliştirme"
  },
  {
    text:"Fotoğraf Ve Video Çekimi"
  },
]
dropdownHizmetler=[
  {
    text:"Netger Avukat",
  },
  {
    text:"Netger Doktor",
  }
  
]

  
 navbar=[{
   text:"Kurumsal Web Tasarım",
   
 },
 {
  text:"Netger Baskı"
},
{
  text:"Referanslar"
},]

 



  headers = [{
    icon: "",
    head: "Ürünler",
    text:"Netger Avukat, Netger Doktor",
    url: ""
  },
  {
    icon: " ",
    head: "Hizmetler",
    text: "Dijital Pazarlama, Web Tasarım, Sosyal Medya Danışmanlığı, Mobil Uygulama Geliştirme, Fotoğraf ve Video Çekimi",
    url: ""
  },

  {
    icon: " ",
    head: "Baskı",
    text: "Kartvizit,Broşür,İlan,Antetli Kağıt,Zarf,Kalem,Bayrak",
    url: ""
  },

  {
    icon: " ",
    head: "Referanslar",
    text: "",
    url: ""
  },

  {
    icon: " ",
    head: "Blog",
    text: "",
    url: ""
  },
  {
    icon: " ",
    head: "Kurumsal",
    text: "",
    url: ""
  },
  {
    icon: " ",
    head: "İletişim",
    text: "",
    url: ""
  },
  {
    icon: " ",
    head: "",
    text: "Kampanyalar",
    url: ""
  },
  {
    icon: " ",
    head: "",
    text: "İnsan Kaynakları",
    url: ""
  },
  {
    icon: " ",
    head: "",
    text: "Fatura Ödeme",
    url: ""
  },

  
  
  ]

  
  constructor() {
    
   }

  ngOnInit(): void {
    
  }
 



  public showFirst:boolean=true;
  openNav(){
    this.showFirst=!this.showFirst;

  }

}
