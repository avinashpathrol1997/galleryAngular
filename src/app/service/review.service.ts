import { Injectable } from '@angular/core';
import { Book } from './Book';
import { Review } from '../service/Review';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

    // Node/Express API
    REST_API: string = 'http://localhost:8080';

    // Http Header
    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  

  constructor(private httpClient: HttpClient) { }

  
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
  Getrr() {
    return this.httpClient.get(`${this.REST_API}/findAllReviews`);
  }

  // Get all objects
  GetReviews() {
    return this.httpClient.get(`${this.REST_API}/Reviews_Company_details`);
  }

// Get all objects
GetCounts() {
  return this.httpClient.get(`${this.REST_API}/rawQuery`);
}
 
//Get all objects
GetList() {
  return this.httpClient.get(`${this.REST_API}/list/1`);
}

// // Get single object
// GetList(coid:any): Observable<any> {
//   let API_URL = `${this.REST_API}/list/${coid}`;
//   return this.httpClient.get(API_URL, { headers: this.httpHeaders })
//     .pipe(map((res: any) => {
//         return res || {}
//       }),
//       catchError(this.handleError)
//     )
// }


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
