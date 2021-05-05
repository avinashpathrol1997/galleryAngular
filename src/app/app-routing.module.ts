import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListShowComponent } from './components/list-show/list-show.component';
//import { BooksListComponent } from './components/books-list/books-list.component';
import { ListComponent } from './components/list/list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewCountComponent } from './components/review-count/review-count.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import {RegisterComponent} from './components/register/register.component'
import { LoginComponent} from './components/login/login.component'
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
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register' },
  { path: 'register',component: RegisterComponent },
  { path: 'login',component: LoginComponent },
  { path: 'sub1',component: Sub1Component },
  { path: 'profile',component: ProfileComponent },
  { path: 'subscription',component: SubscriptionComponent },
  { path: 'gallery1',component: GalleryComponent },
  { path: 'gallery2',component: Gallery2Component },
  { path: 'gallery3',component: Gallery3Component },
  { path: 'forgot',component: ForgotComponent },
  { path: 'pedit',component: PeditComponent },
  { path: 'addg',component: AddGComponent },
 
  { path: 'sub2',component: Sub2Component },
  { path: 'sub3',component: Sub3Component },
 //{ path: '', pathMatch: 'full', redirectTo: 'add-company' },
  { path: 'add-review',component: AddReviewComponent },
  { path: 'review-list',component: ReviewListComponent },
  { path: 'review-count',component: ReviewCountComponent },
  { path: 'list',component: ListComponent },
  { path: 'list-show',component: ListShowComponent },
  
  { path: 'company-list', component: CompanyListComponent },
  { path: 'books-list', component: BooksListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'edit-book/:id', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
