import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { appInitializer } from './helpers/app.initializer';
import { OwnerService } from './services/owner/owner.service';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    SigninComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [OwnerService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
