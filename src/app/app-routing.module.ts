import { RouterModule, Route, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWoroldProfileComponent } from './hello-worold-profile/hello-worold-profile.component';
import { HelloWoroldContactComponent } from './hello-worold-contact/hello-worold-contact.component';
import { DateComponent } from './date/date.component';
import { LunchCheckerComponent } from './lunch-checker/lunch-checker.component';
import { ViewComponent } from './view/view/view.component';
import { ErrorComponent } from './error/error.component';

export const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'hello', component: HelloWorldComponent, children: [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path:'profile', component:  HelloWoroldProfileComponent},
    { path:'contact', component:  HelloWoroldContactComponent},
    { path: '**', component: ErrorComponent }
  ]},
  { path: 'date', component: DateComponent },
  { path: 'lunch', component: LunchCheckerComponent },
  { path: 'view', component: ViewComponent },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
