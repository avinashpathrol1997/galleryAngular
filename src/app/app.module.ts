// app.module.ts
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from 
    '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddBookComponent } from './components/add-book/add-book.component';
//import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksListComponent } from './components/books-list/books-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddReviewComponent } from './components/add-review/add-review.component';
//import { ReviewComponent } from './service/review/review.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewCountComponent } from './components/review-count/review-count.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { ListComponent } from './components/list/list.component';
import { ListShowComponent } from './components/list-show/list-show.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { Sub1Component } from './components/sub1/sub1.component';
import { Sub2Component } from './components/sub2/sub2.component';
import { Sub3Component } from './components/sub3/sub3.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { Gallery2Component } from './components/gallery2/gallery2.component';
import { Gallery3Component } from './components/gallery3/gallery3.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { PeditComponent } from './components/pedit/pedit.component';
import { AddGComponent } from './components/add-g/add-g.component';
//import {MatIconModule} from '@angular/material/icon';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatFormFieldModule} from '@angular/material//icon';
//import { ReviewCountComponent } from './components/review-count/review-count.component';

@NgModule({
  declarations: [
  //  MatIconModule,
    AppComponent,
    AddBookComponent,
    BooksListComponent,
    AddReviewComponent,
    ReviewListComponent,
    ReviewCountComponent,
    AddCompanyComponent,
    CompanyListComponent,
    ListComponent,
    ListShowComponent,
    RegisterComponent,
    LoginComponent,
    Sub1Component,
    Sub2Component,
    Sub3Component,
    ProfileComponent,
    SubscriptionComponent,
    GalleryComponent,
    Gallery2Component,
    Gallery3Component,
    ForgotComponent,
    PeditComponent,
    AddGComponent,
    // BrowserAnimationsModule
   // ReviewCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
   // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }