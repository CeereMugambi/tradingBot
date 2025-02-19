import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DonationComponent } from './donation/donation.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DonationComponent,
    DisclaimerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DonationComponent,
    DisclaimerComponent
  ]
})
export class ComponentsModule { }
