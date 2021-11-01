import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header: any;
  iconss = [
    {
      language: "en",
      iconss: {
        data: [{
          icon: "fas fa-search",
          text: " Search",
          url: "",

        },
        {
          icon: "",
          text: " Corporate",
          url: "",

        },
        {
          icon: " ",
          text: "Human Resources",
          url: "",
        },
        {
          icon: "",
          text: " Communication",
          url: "",
        },
        {
          icon: " ",
          text: " Blog",
          url: "",
        },
        {
          icon: " ",
          text: " Paying bills",
          url: "",
        },
        {
          icon: " ",
          text: " Campaigns",
          url: "",

        },
        {
          icon: "fas fa-globe",
          text: " EN",
          url: "",

        },
        ],
      },
    },
    {
      language: "tr",
      iconss: {
        data: [{
          icon: "fas fa-search",
          text: " Ara",
          url: "",

        },
        {
          icon: "",
          text: " Kurumsal",
          url: "",

        },
        {
          icon: " ",
          text: "İnsan Kaynakları",
          url: "",
        },
        {
          icon: "",
          text: " İletişim",
          url: "",
        },
        {
          icon: " ",
          text: " Blog",
          url: "",
        },
        {
          icon: " ",
          text: " Fatura Ödeme",
          url: "",
        },
        {
          icon: " ",
          text: " Kampanyalar",
          url: "",
        },
        {
          icon: "fas fa-globe",
          text: " EN",
          url: "",
        },
        ],
      },
    },
  ]
  icons = [{
    icon: "fas fa-phone-alt",
    text: "    444 8 908",
    url: "tel:4448908",
 

  },
  {
    icon: "fas fa-envelope ",
    text: "    info@netger.net",
    url: "mailto:info@netger.net",
 
  },
  {
    icon: "fab fa-facebook ",
    text: "",
    url: "https://www.facebook.com/netgerajans/",
 
  },

  {
    icon: "fab fa-twitter ",
    text: "",
    url: "https://www.twitter.com/netgerajans/",
 
  },

  {
    icon: "fab fa-linkedin ",
    text: "",
    url: "https://tr.linkedin.com/organization-guest/company/netger",
 
  },

  {
    icon: "fab fa-instagram  ",
    text: "",
    url: "https://www.instagram.com/netgerturkiye/",
 
  },

  {
    icon: "fab fa-youtube ",
    text: "",
    url: "https://www.youtube.com/channel/UCXNS9S51ajlTsrBv8YK7gvw",
 
  },
  ]

  constructor(private route: ActivatedRoute, private router: Router) { }

  lang = "";
  ngOnInit(): void {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        this.lang = res.url
      }
     
      if (this.lang == "/en") {
        this.header = this.iconss.find(x => x.language == "en")
      }
      else {
        this.header = this.iconss.find(x => x.language == "tr")

       }

    })

  }
}

