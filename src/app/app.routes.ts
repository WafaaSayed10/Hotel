import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'news',component:NewsComponent},
  {path:'details',component:RoomDetailsComponent},
  {path:'checkout',component:CheckoutComponent}
];
