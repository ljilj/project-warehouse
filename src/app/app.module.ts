import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ListViewComponent } from './documents/list-view/list-view.component';
import { DetailViewComponent } from './documents/detail-view/detail-view.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { PanelComponent } from './documents/detail-view/panel/panel.component';
import { ItemListComponent } from './documents/detail-view/item-list/item-list.component';
import { ItemFormComponent } from './documents/detail-view/item-form/item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListViewComponent,
    DetailViewComponent,
    HomeComponent,
    AboutComponent,
    PanelComponent,
    ItemListComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
