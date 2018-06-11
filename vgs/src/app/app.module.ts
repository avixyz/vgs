import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import 'hammerjs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { FactoryComponent } from './factory/factory.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';

import { FormsModule} from '@angular/forms';
import { CurrentmenuService } from './currentmenu.service';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';


const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumboComponent,
    ProductsComponent,
    AboutComponent,
    QualitiesComponent,
    FactoryComponent,
    FooterComponent,
    AboutusComponent,
    HomeComponent,
  
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
    

  ],
  providers: [CurrentmenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
