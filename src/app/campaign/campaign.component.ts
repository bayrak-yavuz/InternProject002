import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  campaign: any
  cmp: any
  head: any
  header = [
    {
      language: "en",
      header: {
        data: [{

          title: "Campaign",

        },
        ],
      },
    },
    {
      language: "tr",
      header: {
        data: [{

          title: "Kampanyalar",

        }]
      }
    },
  ]
  camp = [
    {
      src: "/assets/kampanya-3.jpg",

    },
    {
      src: "/assets/kampanya.jpg",

    },

    {
      src: "/assets/kampanya-2.jpg",
    },
  ]
  camp2 = [
    {
      language: "en",
      camp2: {
        data: [{
          head: "Corporate Web Design",
          text: "Have a website tailored for your company!",
        },]
      }
    },
    {
      language: "tr",
      camp2: {
        data: [{
          head: "Kurumsal Web Tasarım",
          text: "Firmanıza özel hazırlanmış bir internet siteniz olsun!",
        },]
      }
    }
    //  {
    //     head: "Netger Avukat ürününde %20 indirim Fırsatı",
    //    text: "Ofisini son 1 yıl içinde açan avukatlara özel!",
    //   },
    //  {
    //     head: "Netger Doktor ürününde %20 İndirim Fırsatı",
    //     text: "Özel muayenehanesini son 1 yıl içinde açan doktorlara özel!",
    //   }
  ]
  camp3 = [
    {
      language: "en",

      camp3: {
        data: [{
          text: " more information ",
          icon: "fas fa-arrow-right",
          url: "https://netger.net/"
        },
        ],
      },
    },
    {
      language: "tr",

      camp3: {
        data: [{
          text: " daha fazla bilgi ",
          icon: "fas fa-arrow-right",
          url: "https://netger.net/"
        },
        ],
      },
    }
  ]
  camp4 = [
    {
      src: "/assets/kampanya-3-m.jpg",

    },
    {
      src: "/assets/kampanya-m.jpg",

    },

    {
      src: "/assets/kampanya-2-m.jpg",
    },
  ]

  constructor(private route: ActivatedRoute, private router: Router) { }

  lang = "";
  ngOnInit(): void {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        this.lang = res.url
      }
      // if (this.lang == "/") {
      //   this.header = this.iconss.find(x => x.language == "tr")
      // }
      if (this.lang == "/en") {
        this.campaign = this.camp2.find(x => x.language == "en")
        this.cmp = this.camp3.find(x => x.language == "en")
        this.head = this.header.find(x => x.language == "en")


      }
      else {
        this.campaign = this.camp2.find(x => x.language == "tr")
        this.cmp = this.camp3.find(x => x.language == "tr")
        this.head = this.header.find(x => x.language == "tr")


      }

    })

  }

}
