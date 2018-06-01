import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { UserCardComponent } from './user-card/user-card.component';

import {SecondsToTimeFormat} from './pipes/SecondsToTimeFormat.pipe';

import {RedBorder} from './directives/RedBorder.directive';

import {ArticlesService} from './services/articles.services';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FullScreenComponent,
    SecondsToTimeFormat,
    UserCardComponent,
    RedBorder,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
