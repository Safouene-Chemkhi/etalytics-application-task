import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
    ]),
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
