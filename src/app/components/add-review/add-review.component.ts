import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { ReviewService } from './../../service/review.service';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  reviewForm: FormGroup; 

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private reviewService: ReviewService,
    
  )  { 
    this.reviewForm = this.formBuilder.group({
      coid: [''],
      rating: [''],
      comment: ['']
    })
  }

  ngOnInit(): void {
  }


  onSubmit(): any {
    this.reviewService.AddReview(this.reviewForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/review-list'))
      }, (err) => {
        console.log(err);
    });
  }


}
