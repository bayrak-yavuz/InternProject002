import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {
mahmut:any;
data=[
  {
  language:"en",
  page:{
    buttons : {
      text:"Get An Offer",
      phone:"444 0 908",
      language:"EN",
      callLong:"Call You",
      call:"Call",
      text1:"Products",
      text2:"Services"
    },
    dropdownUrunler:[
      {
        text:"Digital Marketing"
      },
      {
        text:"Web Design"
      },
      {
        text:"Social Media Information"
      },
      {
        text:"Mobile App Development"
      },
      {
        text:"Photo and Video Capture"
      },
    ],
    dropdownHizmetler:[
      {
        text:"Netger Lawyer",
      },
      {
        text:"Netger Doctor",
      }
    ],
    navbar:[{
      text:"Corporote Web Design",
    },
    {
     text:"Netger Oppression"
   },
   {
     text:"Referances"
   },],
   headers :[{
    icon: "",
    head: "Products",
    text:"Netger Lawyer, Netger Doctor",
    url: ""
  },
  {
    icon: " ",
    head: "Services",
    text: "Digital Marketing, Web Design, Social Media Consulting, Mobile Application Development, Photo and Video Shooting",
    url: ""
  },
  {
    icon: " ",
    head: "oppression",
    text: "Business Card, Brochure, Advertisement, Letterhead, Envelope, Pen, Flag",
    url: ""
  },
  {
    icon: " ",
    head: "Referances",
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
    head: "Corporte",
    text: "",
    url: ""
  },
  {
    icon: " ",
    head: "Communication",
    text: "",
    url: ""
  },
  {
    icon: " ",
    head: "",
    text: "Campaigns",
    url: ""
  },
  {
    icon: " ",
    head: "",
    text: "Human Resources",
    url: ""
  },
  {
    icon: " ",
    head: "",
    text: "Paying bills",
    url: ""
  },
  ]   
  }
},
{
  language:"tr",
  page:{
    buttons : {
      text:"Teklif Alın",
      phone:"444 0 908",
      language:"EN",
      callLong:"Sizi Arayalım",
      call:"Ara",
      text1:"Ürünler",  
      text2:"Hizmetler"
    },
    dropdownUrunler:[
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
    ],
    dropdownHizmetler:[
      {
        text:"Netger Avukat",
      },
      {
        text:"Netger Doktor",
      }
    ],
    navbar:[{
      text:"Kurumsal Web Tasarım",  
    },
    {
     text:"Netger Baskı"
   },
   {
     text:"Referanslar"
   },],
   headers: [{
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
  }
}
]
  constructor(private router:Router) {  
   }
   lang="";
  ngOnInit(): void {  
    this.router.events.subscribe(res=>{
      if (res instanceof NavigationEnd){
       this.lang=res.url
      }
      if(this.lang=="/"){
        this.mahmut=this.data.find(x => x.language == "tr")
      }
      else if(this.lang=="/en"){
        this.mahmut=this.data.find(x => x.language == "en")
      } 
    })  
  }
  public showFirst:boolean=true;
  openNav(){
    this.showFirst=!this.showFirst;

  }

}
