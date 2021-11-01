import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navi2',
  templateUrl: './navi2.component.html',
  styleUrls: ['./navi2.component.scss']
})
export class Navi2Component implements OnInit {
  lists: any
  list = [
    {
      language: "en",
      list: {
        data: [{

          icon: "fas fa-mouse-pointer",
          text: "  Build a Site",
          url: "https://netger.net/",
        },
        {
          icon: "fas fa-ad ",
          text: "  Advertise",
          url: "https://netger.net/",

        },
        {
          icon: "fas fa-table",
          text: " Contact us",
          url: "https://netger.net/",

        },]
      },
    },
    {
      language: "tr",
      list: {
        data: [{

          icon: "fas fa-mouse-pointer",
          text: "    Site Yaptır",
          url: "https://netger.net/",
        },
        {
          icon: "fas fa-ad ",
          text: "  Reklam Ver",
          url: "https://netger.net/",

        },
        {
          icon: "fas fa-table",
          text: " Bize Ulaşın",
          url: "https://netger.net/",

        },
      ],
      },
    },

  ]
  constructor(private route: ActivatedRoute, private router: Router) { }
  lang = ""

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        this.lang = res.url
      }
      if (this.lang == "/en") {
        this.lists = this.list.find(ress=> ress.language == "en")
      }
      else {
        this.lists = this.list.find(ress => ress.language == "tr")
      }
    })
  }
}
