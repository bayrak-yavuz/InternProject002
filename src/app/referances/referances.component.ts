import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referances',
  templateUrl: './referances.component.html',
  styleUrls: ['./referances.component.scss']
})
export class ReferancesComponent implements OnInit {
   icon=false;
  images=[
    { 
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
    text: "Dç.Dr. Erkam KÖMÜRCÜ",
    url: "https://www.erkamkomurcu.com/",
    
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
