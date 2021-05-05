import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder ,Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pedit',
  templateUrl: './pedit.component.html',
  styleUrls: ['./pedit.component.scss']
})
export class PeditComponent implements OnInit {

  editForm : FormGroup;


  constructor( public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private toastr: ToastrService)
    { 
      this.editForm = this.formBuilder.group({
        name: [''],
        email: [''],
        age: [''],
        password: ['']
      })
    }


  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.updateProfile(this.editForm.value)
    .subscribe(() => {
   //   this.toastr.success("Hello, I'm the toastr message.")
        console.log('Password Changed successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/login'))
      }, (err) => {
        console.log(err);
    });
  }



}
