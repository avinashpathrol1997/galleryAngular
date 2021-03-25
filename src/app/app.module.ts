// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksListComponent } from './components/books-list/books-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddReviewComponent } from './components/add-review/add-review.component';
//import { ReviewComponent } from './service/review/review.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewCountComponent } from './components/review-count/review-count.component';
//import { ReviewCountComponent } from './components/review-count/review-count.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookDetailComponent,
    BooksListComponent,
    AddReviewComponent,
    ReviewListComponent,
    ReviewCountComponent,
   // ReviewCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }