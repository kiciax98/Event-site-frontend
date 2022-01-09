import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { MainComponent } from './components/main/main.component';
import { DetailedCardComponent } from './components/detailed-card/detailed-card.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'konkursy-uczelniane/:id', component: DetailedCardComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
