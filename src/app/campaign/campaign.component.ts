import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

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
      
      head: "Kurumsal Web Tasarım",
      text: "Firmanıza özel hazırlanmış bir internet siteniz olsun!",
    },
    //  {
    //     head: "Netger Avukat ürününde %20 indirim Fırsatı",
    //    text: "Ofisini son 1 yıl içinde açan avukatlara özel!",
    //   },
    //  {
    //     head: "Netger Doktor ürününde %20 İndirim Fırsatı",
    //     text: "Özel muayenehanesini son 1 yıl içinde açan doktorlara özel!",
    //   }
  ]
  camp3=[
    { 
      text:" daha fazla bilgi ",
      icon:"fas fa-arrow-right",
      url:"https://netger.net/"
     
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
  constructor() { }

  ngOnInit(): void {
  }

}
