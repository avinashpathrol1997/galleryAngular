import { Component, OnInit } from '@angular/core';
import { ReviewService } from './../../service/review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {

  Reviews:any=[];
 //   Counts: any=[];
  

  constructor(private ReviewService: ReviewService) { }

  ngOnInit(): void {
    this.ReviewService.GetReviews().subscribe(res=> {
      console.log(res)
      this.Reviews=res;
  //    console.log(this.Reviews[0].Reviews[0].rating);
  //    console.log(this.Reviews[1].Reviews[0].rating);
    })
    
  }

}
