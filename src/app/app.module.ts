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

const appRoutes: Routes = [ 
   { path: 'home', component: MainComponent,
     children:[
        {path: 'page/:id', component: MainComponent},
       {path: '', redirectTo: '/home',pathMatch:'full' }


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
     {path: 'page/:id', component: MainComponent}
   ]
    },
   { path: 'Dvdrip', component: MainComponent,
    children:[
     {path: 'page/:id', component: MainComponent}
   ]
    },
   { path: 'Geners', component: MainComponent,
   children:[
     {path: 'page/:id', component: MainComponent}
   ]
    },
   { path: 'other', component: MainComponent,
   children:[
     {path: 'page/:id', component: MainComponent}
   ]
     },
   { path: ':id',component: MovieDetailsComponent},
   { path: '', redirectTo: '/home',pathMatch:'full' }



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
