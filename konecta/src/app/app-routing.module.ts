import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailsComponent } from './Components/card-details/card-details.component';
import { CardsContainerComponent } from './Components/cards-container/cards-container.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeGuard } from './Guards/home/home.guard';


const routes: Routes = [
    {
      path: '',
      canActivate: [HomeGuard],
      component: LoginComponent
    },
    {
      path: 'home',
      canActivate: [HomeGuard],
      component: LayoutComponent,
      children: [
        {
          path: '',
          component: CardsContainerComponent
        },
        {
          path: 'article/:id',
          component: CardDetailsComponent
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }