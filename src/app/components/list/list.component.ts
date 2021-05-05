import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { ReviewService } from './../../service/review.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  
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
    })
  }


  ngOnInit(): void {
  }


  onSubmit(): any {
    this.reviewService.rr(this.reviewForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/list-show'))
      }, (err) => {
        console.log(err);
    });
  }


}
