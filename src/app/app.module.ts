import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }   from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { appInitializer } from './helpers/app.initializer';
import { OwnerService } from './services/owner/owner.service';
import { WelcomeResolver } from './components/resolvers/welcomeResolver';
import { BearerInterceptor } from './interceptors/bearer.interceptor';
import { FakeResponseInterceptor } from './interceptors/fake-response.interceptor';
import { booksReducer, collectionReducer, counterReducer } from './store/reducers/reducer';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';

export class MissingTranslationService implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return `WARN: '${params.key}' is missing in '${params.translateService.currentLang}' locale`;
  }
}

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    SigninComponent,
    NotFoundComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MissingTranslationService },
      useDefaultLang: false,
    }),
    StoreModule.forRoot({ 
      count: counterReducer,
      books: booksReducer, 
      collection: collectionReducer,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BearerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeResponseInterceptor, multi: true },
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [OwnerService] },
    WelcomeResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




