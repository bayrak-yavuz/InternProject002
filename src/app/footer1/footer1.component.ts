import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.scss']
})
export class Footer1Component implements OnInit {
  mahmut:any;
  googleImg="/assets/img-footer1/logo-foot2.png"
  page=[
  {
    language:"en",
    page:{
      data:[{
        head:"Products",
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
        head:"Our Services",
        text:""
      },
      {
        head:"",
        text:"Digital Marketing"
      },
      {
        head:"",
        text:"Web Design"
      },
      ],
      datas:[
        {
          head:"Links",
          text:""
        },
        {
          head:"",
          text:"Portfolio"
        },{
          head:"",
          text:" Campaigns"
        },{
          head:"",
          text:"Netger Baskı"
        },{
          head:"",
          text:"Blog"
        },{
          head:"",
          text:"Corporate"
        },
        {
          head:"",
          text:"Human Resources"
        },
        {
          head:"",
          text:"Communication"
        },
        {
          head:"",
          text:"Paying Bills"
        },
    
      ],
      data3:[{
          head:"Legal",
          text:""
        },
        {
          head:"",
          text:"Distance Sales Agreement"
        },
        {
          head:"",
          text:"Preliminary Information Form"
        },
        {
          head:"",
          text:"Kişisel Verilerin Korunması"
        },
        {
          head:"",
          text:"Privacy Policy"
        },
        {
          head:"",
          text:"Terms of Use"
        },
      ]
    }
  },
  {
    language:"tr",
    page:{
      data:[{
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
      ],
      datas:[
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
      ],
      data3:[{
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
    }
  }
  ]
  icons=[{
    icon: "fab fa-facebook ",
    text: "",
    url: "https://www.facebook.com/netgerajans/",
    img:"",
    leftSide:true,
  },
  {
    icon: "fab fa-twitter ",
    text: "",
    url: "https://www.twitter.com/netgerajans/",
    img:"",
    leftSide:true,
  },
  {
    icon: "fab fa-linkedin ",
    text: "",
    url: "https://tr.linkedin.com/organization-guest/company/netger",
    img:"",
    leftSide:true,
  },
  {
    icon: "fab fa-instagram  ",
    text: "",
    url: "https://www.instagram.com/netgerturkiye/",
    img:"",
    leftSide:true,
   
  },
  {
    icon: "fab fa-youtube ",
    text: "",
    url: "https://www.youtube.com/channel/UCXNS9S51ajlTsrBv8YK7gvw",
    img:"",
    leftSide:true,
    
  },
  {
    icon:"",
    img:"",
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
  constructor(private route: ActivatedRoute, private router:Router ) { }

  lang="";
  ngOnInit(): void {
    this.router.events.subscribe(res=>{
      if (res instanceof NavigationEnd){
       this.lang=res.url
      }
      if(this.lang=="/"){
        this.mahmut=this.page.find(x => x.language == "tr")
      }
      else if(this.lang=="/en"){
        this.mahmut=this.page.find(x => x.language == "en")
      }
      console.log(this.lang)
      
    })
    console.log(this.lang)
  }
}
