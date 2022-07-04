import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { CharactersComponent } from './components/menu/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './components/menu/location/location.component';
import { EpisodeComponent } from './components/menu/episode/episode.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    MenuComponent,
    CharactersComponent,
    LocationComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, MainComponent, NavbarComponent]
})
export class AppModule { }
