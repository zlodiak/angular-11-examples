import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCheckGuard } from './auth-check.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { WelcomeResolver } from './components/resolvers/welcomeResolver';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: '', component: Page1Component, canActivate: [AuthCheckGuard]},
  { 
    path: 'page1', 
    component: Page1Component, 
    canActivate: [AuthCheckGuard],
    resolve: { welcomeResolver: WelcomeResolver },
  },
  { path: 'page2', component: Page2Component, canActivate: [AuthCheckGuard]},
  { path: 'page3', component: Page3Component, canActivate: [AuthCheckGuard]},
  { path: 'signin', component: SigninComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
