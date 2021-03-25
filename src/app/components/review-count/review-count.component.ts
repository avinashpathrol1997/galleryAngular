import { Component, OnInit } from '@angular/core';

import { ReviewService } from './../../service/review.service';

@Component({
  selector: 'app-review-count',
  templateUrl: './review-count.component.html',
  styleUrls: ['./review-count.component.scss']
})
export class ReviewCountComponent implements OnInit {

  Counts: any=[];
  

  constructor(private ReviewService: ReviewService) { }

  ngOnInit(): void {
    this.ReviewService.GetCounts().subscribe(res=>{
      console.log(res)
      this.Counts=res;
      console.log(this.Counts)
    })
  }

}
