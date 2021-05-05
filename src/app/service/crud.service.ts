import { Injectable } from '@angular/core';
import { Book } from './Book';
import { Review } from '../service/Review';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Company } from './Company';
import { Register } from './Register';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // Node/Express API
  REST_API: string = 'http://localhost:8080';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Add
  AddBook(data: Comment): Observable<any> {
    let API_URL = `${this.REST_API}/comment`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Add
  AddCompany(data: Company): Observable<any> {
    let API_URL = `${this.REST_API}/add-comment`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Add
  Register(data: Company): Observable<any> {
    let API_URL = `${this.REST_API}/register`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }


  
  // Add
  Login(data: Company): Observable<any> {
    let API_URL = `${this.REST_API}/login`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

    //update
    public getSub(id : any){
      return this.httpClient.get(`${this.REST_API}/fetchsubs` );
   //   let headers = new HttpHeaders()
    //   console.log("service--------- id and data " +id , +data);
      }


  // Add
  AddReview(data: Review): Observable<any> {
    let API_URL = `${this.REST_API}/add-review`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  
  // Add
  rr(data: Review): Observable<any> {
    let API_URL = `${this.REST_API}/findAllReviews`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Get all objects
  GetBooks() {
    return this.httpClient.get(`${this.REST_API}/AllCompanyDetails`);
  }
  // Get all objects
  GetComments() {
    return this.httpClient.get(`${this.REST_API}/get-comment`);
  }
  // Get all objects
  GetCompany() {
    return this.httpClient.get(`${this.REST_API}/AllCompanyDetails`);
  }

  GetProfile(){
    return this.httpClient.get(`${this.REST_API}/fetch`);
  
  }




  // Get single object
  GetBook(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/read-book/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  // Update
  updatePass(data:Register): Observable<any> {
    let API_URL = `${this.REST_API}/forgot`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }


    // Update
    updateProfile(data:Register): Observable<any> {
      let API_URL = `${this.REST_API}/pedit`;
      return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
        .pipe(
          catchError(this.handleError)
        )
    }

  // Delete
  deleteBook(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-book/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }


  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
