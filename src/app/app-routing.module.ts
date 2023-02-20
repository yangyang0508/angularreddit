import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: 'sign-up', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
  bootstrap: [SignupComponent],
})
export class AppRoutingModule { }
