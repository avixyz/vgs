import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { FactoryComponent } from './factory/factory.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const appRoutes:Routes=[
  {path:'', component:JumboComponent},
  {path:'aboutus', component:AboutusComponent}
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
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
