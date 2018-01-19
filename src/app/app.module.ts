import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { appService } from './app.service';
import { AppComponent } from './app.component';
import {SearchComponent} from './search/search.component';
import {HeaderComponent } from './header/header.component';
import {NavComponent} from './nav/nav.component';
import {RecentComponent} from './recent/recent.component';
import {MainComponent} from './main/main.component';
import {MovieComponent} from './movie/movie.component';
import {SearchPipe}    from './app.objectfilter';
import { HttpModule }    from '@angular/http';
import {FormatPipe}    from './recent/recent.filter';
import { RouterModule, Routes } from '@angular/router';
import {MovieDetailsComponent} from './movieDetails/movieDetails.component';
import {MovieComponent} from './movieDetails/movieDetails.component';
const appRoutes: Routes = [
   { path: 'home', component: MainComponent },
   { path: 'home/:id', component: MovieDetailsComponent},
   { path: '', redirectTo: '/home',pathMatch:'full' },
   { path: 'Featured', component: MainComponent },
   { path: 'Featured/:id', component: MovieDetailsComponent},
   { path: 'HollyWood', component: MainComponent },
   { path: 'HollyWood/:id', component: MovieDetailsComponent},
   { path: 'BollyWood', component: MainComponent },
   { path: 'BollyWood/:id', component: MovieDetailsComponent},
   { path: 'Tamil', component: MainComponent },
   { path: 'Tamil/:id', component: MovieDetailsComponent},
   { path: 'Telugu', component: MainComponent },
   { path: 'Telugu/:id', component: MovieDetailsComponent},
   { path: 'Malayalam', component: MainComponent },
   { path: 'Malayalam/:id', component: MovieDetailsComponent},
   { path: 'Dvdrip', component: MainComponent },
   { path: 'Dvdrip/:id', component: MovieDetailsComponent},
   { path: 'other', component: MainComponent },
   { path: 'other/:id', component: MovieDetailsComponent},


];


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,SearchComponent,NavComponent,MainComponent,RecentComponent,SearchPipe,FormatPipe,
    MovieComponent,MovieDetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
