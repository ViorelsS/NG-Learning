import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './componenti/signup/signup.component';
import { SigninComponent } from './componenti/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/homepage',
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'homepage',
    component: HomeComponent,
  },
  {
    path: 'contatti',
    component: ContattiComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [{ path: ':id', component: ContattoComponent }],
  },
  {
    path: '404',
    component: NotfoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
