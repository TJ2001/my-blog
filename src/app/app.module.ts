import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import {Ng2PageScrollModule} from 'ng2-page-scroll';


import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SplashComponent } from './splash/splash.component';
import { BoxesComponent } from './boxes/boxes.component';
import { TestComponent } from './test/test.component';
import { ContactComponent } from './contact/contact.component';
import { FeatureComponent } from './feature/feature.component';
import { MeditationComponent } from './meditation/meditation.component';
import { StoryComponent } from './story/story.component';
import { CommunityComponent } from './community/community.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    NavbarComponent,
    SplashComponent,
    BoxesComponent,
    TestComponent,
    ContactComponent,
    FeatureComponent,
    MeditationComponent,
    StoryComponent,
    CommunityComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
