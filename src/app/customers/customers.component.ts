//alperen

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  bos:any
  lang=""
  body1=[
    {
      language:"tr",
      titleClient:"Müşterilerimiz",
      textClient:"Dijital hizmetlerde tercihini Netger'den yana kullanan bazı müşterilerimiz!"



    },
    {
      language:"en",
      titleClient:"Our Clients",
      textClient:"List of some our customers preferring Netger for their digital services!"


    }
  ]
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }


  images=[
    {
    src:"../../assets/img-customers/ref-1.jpg",
  
  },
    {

    
      src:"../../assets/img-customers/ref-2jpg.jpg",}
      ,
    {

    
      src:"../../assets/img-customers/ref-3.jpg",
    },
 
      {

    
      src:"../../assets/img-customers/ref-4.jpg",
    },
 
      {

    
      src:"../../assets/img-customers/ref-5.jpg",
    },
 
      {

    
      src:"../../assets/img-customers/ref-6.jpg",
    },
 
      {

    
      src:"../../assets/img-customers/ref-7.jpg",
    },
 
      {

    
      src:"../../assets/img-customers/ref-8.jpg",
    },
 
      {

    
      src:"../../assets/img-customers/ref-9.jpg",
    },
 
      {

    
      src:"../../assets/img-customers/ref-10.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-11.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-12.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-13.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-14.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-15.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-16.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-17.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-18.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-19.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-20.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-21.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-22.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-23.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-24.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-25.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-26.jpg",
    },

      {

    
      src:"../../assets/img-customers/ref-27.jpg",
    },

      

  ]

  ngOnInit(): void {
    this.router.events.subscribe(res=>{
      if (res instanceof NavigationEnd ){
        this.lang=res.url
      }
      if(this.lang=="/en"){
        this.bos=this.body1.find(x=> x.language == "en")
      }
      else{
          this.bos=this.body1.find(x=> x.language == "tr")
      }
    
    })
  }

}
