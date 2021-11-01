import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-referances',
  templateUrl: './referances.component.html',
  styleUrls: ['./referances.component.scss']
})
export class ReferancesComponent implements OnInit {
  icon = false;
  head: any
  image:any
  txt:any
  btn:any
  header = [
    {
      language: "en",
      header: {
        data: [{

          title: "References",

        },
        ],
      },
    },
    {
      language: "tr",
      header: {
        data: [{

          title: "Referanslar",

        }]
      }
    },
  ]
  text = [
    {
      language: "en",
      text: {
        data: [{

          text: "Some of the projects we have completed within the scope of our service areas!",

        },
        ],
      },
    },
    {
      language: "tr",
      text: {
        data: [{

          text: "Hizmet alanlarımız kapsamında tamamladığımız projelerden bazıları!",

        }]
      }
    },
  ]
  images = [
    {
      language: "en",
      images: {
        data: [{
          src: "/assets/uyafa.webp",
          text: "Uyafa",
          url: "https://www.uyafa.com/",
        },
        {
          src: "/assets/akselimoglu.webp",
          text: " Akselimoğlu Food",
          url: "https://www.akselimoglu.com/",

        },
        {
          src: "/assets/tuze.webp",
          text: "Tüze Law Office",
          url: "https://tuzeavukatlik.com/",

        },
        {
          src: "/assets/erkamkomurcu.webp",
          text: "Doç.Dr. Erkam KÖMÜRCÜ",
          url: "https://www.erkamkomurcu.com/",

        },
        ],
      },
    },
    {
      language: "tr",
      images: {
        data: [{
          src: "/assets/uyafa.webp",
          text: "Uyafa",
          url: "https://www.uyafa.com/",
        },
        {
          src: "/assets/akselimoglu.webp",
          text: " Akselimoğlu Gıda",
          url: "https://www.akselimoglu.com/",

        },
        {
          src: "/assets/tuze.webp",
          text: "Tüze Hukuk Bürosu",
          url: "https://tuzeavukatlik.com/",

        },
        {
          src: "/assets/erkamkomurcu.webp",
          text: "Doç.Dr. Erkam KÖMÜRCÜ",
          url: "https://www.erkamkomurcu.com/",

        },
        ],
      },
    }
  ]
  button = [
    {
      language: "en",

      button: {
        data: [{
          text: " Show all of them ",
          icon: "fas fa-arrow-right",
          url: "https://netger.net/"
        },
        ],
      },
    },
    {
      language: "tr",

      button: {
        data: [{
          text: " Tümünü Göster ",
          icon: "fas fa-arrow-right",
          url: "https://netger.net/"
        },
        ],
      },
    }
  ]

  constructor(private route: ActivatedRoute, private router: Router) { }

  lang = "";
  ngOnInit(): void {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        this.lang = res.url
      }

      if (this.lang == "/en") {
        //this.campaign = this.camp2.find(x => x.language == "en")
         this.image = this.images.find(x => x.language == "en")
        this.head = this.header.find(x => x.language == "en")
        this.txt = this.text.find(x => x.language == "en")
        this.btn = this.button.find(x => x.language == "en")


      }
      else {
        // this.campaign = this.camp2.find(x => x.language == "tr")
         this.image = this.images.find(x => x.language == "tr")
        this.head = this.header.find(x => x.language == "tr")
        this.txt = this.text.find(x => x.language == "tr")
        this.btn = this.button.find(x => x.language == "tr")


      }

    })

  }
}
