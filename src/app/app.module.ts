import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NaviComponent } from './navi/navi.component';
import { Body1Component } from './body1/body1.component';
import { Navi2Component } from './navi2/navi2.component';
import { Body2Component } from './body2/body2.component';
import { ServeComponent } from './serve/serve.component';
import { CampaignComponent } from './campaign/campaign.component';
import { ReferancesComponent } from './referances/referances.component';
import { CustomersComponent } from './customers/customers.component';
import { Navi3Component } from './navi3/navi3.component';
import { Footer1Component } from './footer1/footer1.component';
import { Footer2Component } from './footer2/footer2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NaviComponent,
    Body1Component,
    Navi2Component,
    Body2Component,
    ServeComponent,
    CampaignComponent,
    ReferancesComponent,
    CustomersComponent,
    Navi3Component,
    Footer1Component,
    Footer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
