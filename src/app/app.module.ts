import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { BowlScheduleComponent } from './bowl-schedule/bowl-schedule.component';
import { MyPicksComponent } from './my-picks/my-picks.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'bowl-schedule', component: BowlScheduleComponent},
      { path: 'my-picks', component: MyPicksComponent},
      { path: 'leaderboard', component: LeaderboardComponent}
    ])
   
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BowlScheduleComponent,
    MyPicksComponent,
    LeaderboardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
