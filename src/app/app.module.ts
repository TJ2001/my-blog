import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BoxesComponent } from './boxes/boxes.component';
import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './contact/contact.component';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './home/home.component';
import { MeditationComponent } from './meditation/meditation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { SplashComponent } from './splash/splash.component';
import { StoryComponent } from './story/story.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BoxesComponent,
    CommunityComponent,
    ContactComponent,
    FeatureComponent,
    HomeComponent,
    MeditationComponent,
    NavbarComponent,
    SliderComponent,
    SplashComponent,
    StoryComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
