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
import {SearchPipe, Safe}    from './app.objectfilter';
import { HttpClientModule } from '@angular/common/http';
import {FormatPipe}    from './recent/recent.filter';
import { RouterModule, Routes } from '@angular/router';
import {MovieDetailsComponent} from './movieDetails/movieDetails.component';

const appRoutes: Routes = [
   { path: 'home', component: MainComponent,
     children:[
       {path: 'page/:id', component: MainComponent}

     ]

    },


   { path: 'Featured', component: MainComponent,
    children:[
     {path: 'page/:id', component: MainComponent}

    ]
    },
   { path: 'HollyWood', component: MainComponent,
     children:[
     {path: 'page/:id', component: MainComponent}

   ]
    },
   { path: 'BollyWood', component: MainComponent,
     children:[
     {path: 'page/:id', component: MainComponent}

   ]
    },
   { path: 'Tamil', component: MainComponent,
     children:[
     {path: 'page/:id', component: MainComponent}

   ]
    },
   { path: 'Telugu', component: MainComponent,
    children:[
     {path: 'page/:id', component: MainComponent}

   ]
    },
   { path: 'Malayalam', component: MainComponent,
    children:[
     {path: 'page/:id', component: MainComponent,}
   ]
    },
   { path: 'Dvdrip', component: MainComponent,
    children:[
     {path: 'page/:id', component: MainComponent}
   ]
    },
    { path: 'Punjabi', component: MainComponent,
    children:[
      {path: 'page/:id', component: MainComponent}
    ]
     },
     { path: 'Bigboss', component: MainComponent,
    children:[
      {path: 'page/:id', component: MainComponent}
    ]
     },
     { path: 'Sports', component: MainComponent,
    children:[
      {path: 'page/:id', component: MainComponent}
    ]
     },
   { path: 'Other', component: MainComponent,
   children:[
     {path: 'page/:id', component: MainComponent}
   ]
     },
     { path: 'Search', component: MainComponent,
     
    },
   { path: ':id',component: MovieDetailsComponent},
   { path: '', redirectTo: '/home',pathMatch:'full' }



];


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,SearchComponent,NavComponent,MainComponent,RecentComponent,SearchPipe,FormatPipe,Safe,
    MovieComponent,MovieDetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
