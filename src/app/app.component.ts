import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {NavComponent} from './nav/nav.component';
import { appService } from './app.service';
import {RecentComponent} from './recent/recent.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [appService],


})
export class AppComponent {



 }
