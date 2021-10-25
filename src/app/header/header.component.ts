import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  leftSide=true
  icons = [{
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
  
  },
  ]
  iconss=[
     
  {
    icon: "fas fa-search",
    text: " Ara",
    url: "",
    leftSide:false,
    index:7
  },
  {
    icon: "",
    text: " Kurumsal",
    url: "",
    leftSide:false,
    index:8
  },
  {
    icon: " ",
    text: "İnsan Kaynakları",
    url: "",
    leftSide:false,
    index:9
  },
  {
    icon: "",
    text: " İletişim",
    url: "",
    leftSide:false,
    index:10
  },
  {
    icon: " ",
    text: " Blog",
    url: "",
    leftSide:false,
    index:11
  },
  {
    icon: " ",
    text: " Fatura Ödeme",
    url: "",
    leftSide:false,
    index:12
  },
  {
    icon: " ",
    text: " Kampanyalar",
    url: "",
    leftSide:false,
    index:13
  },
  {
    icon:"fas fa-globe",
    text: " EN",
    url: "",
    leftSide:false,
    index:14
  },
 
  ]
  constructor() { }
 
 
  ngOnInit(): void {
  }

}
