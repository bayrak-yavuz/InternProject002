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
      text:"Teklif Al??n",
      phone:"444 0 908",
      language:"EN",
      callLong:"Sizi Arayal??m",
      call:"Ara",
      text1:"??r??nler",  
      text2:"Hizmetler"
    },
    dropdownUrunler:[
      {
        text:"Dijital Pazarlama"
      },
      {
        text:"Web Tasar??m"
      },
      {
        text:"Sosyal Medya Dan????manl??????"
      },
      {
        text:"Mobil Uygulama Geli??tirme"
      },
      {
        text:"Foto??raf Ve Video ??ekimi"
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
      text:"Kurumsal Web Tasar??m",  
    },
    {
     text:"Netger Bask??"
   },
   {
     text:"Referanslar"
   },],
   headers: [{
    icon: "",
    head: "??r??nler",
    text:"Netger Avukat, Netger Doktor",
    url: ""
  },
  {
    icon: " ",
    head: "Hizmetler",
    text: "Dijital Pazarlama, Web Tasar??m, Sosyal Medya Dan????manl??????, Mobil Uygulama Geli??tirme, Foto??raf ve Video ??ekimi",
    url: ""
  },

  {
    icon: " ",
    head: "Bask??",
    text: "Kartvizit,Bro????r,??lan,Antetli Ka????t,Zarf,Kalem,Bayrak",
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
    head: "??leti??im",
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
    text: "??nsan Kaynaklar??",
    url: ""
  },
  {
    icon: " ",
    head: "",
    text: "Fatura ??deme",
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
