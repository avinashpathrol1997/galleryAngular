import { Component, OnInit } from '@angular/core';

import { ReviewService } from './../../service/review.service';

@Component({
  selector: 'app-list-show',
  templateUrl: './list-show.component.html',
  styleUrls: ['./list-show.component.scss']
})
export class ListShowComponent implements OnInit {

  Reviews:any=[];

  constructor(private ReviewService: ReviewService) { }

  ngOnInit(): void {
    this.ReviewService.Getrr().subscribe(res=> {
      console.log(res)
      this.Reviews=res;
  //    console.log(this.Reviews[0].Reviews[0].rating);
  //    console.log(this.Reviews[1].Reviews[0].rating);
    })
    
  }

}
