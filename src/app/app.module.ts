import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PointTableComponent } from './components/point-table/point-table.component';
import { PlayMatchComponent } from './components/play-match/play-match.component';
import { MatchComponent } from './components/match/match.component';
import { ClubService } from './services/club.service';
import { HttpClientModule } from '@angular/common/http';
import { MatchService } from './services/match.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PointTableComponent,
    PlayMatchComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [ClubService, MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
