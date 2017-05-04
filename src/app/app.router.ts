import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { MeditationComponent} from './meditation/meditation.component';
import { StoryComponent} from './story/story.component';
import { AboutComponent} from './about/about.component';
import { CommunityComponent} from './community/community.component';



export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'meditation', component: MeditationComponent },
  { path: 'story', component: StoryComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'about', component: AboutComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
