import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksListComponent } from './components/books-list/books-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewCountComponent } from './components/review-count/review-count.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-book' },
  { path: 'add-book1',component: AddReviewComponent },
  { path: 'review-list',component: ReviewListComponent },
  { path: 'review-count',component: ReviewCountComponent },
  
  { path: 'books-list', component: BooksListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book/:id', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
