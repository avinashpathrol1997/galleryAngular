import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder ,Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {


  forgotForm : FormGroup;


  constructor( public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private toastr: ToastrService)
    { 
      this.forgotForm = this.formBuilder.group({
        email: [''],
        password: ['']
      })
    }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.updatePass(this.forgotForm.value)
    .subscribe(() => {
   //   this.toastr.success("Hello, I'm the toastr message.")
        console.log('Password Changed successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/login'))
      }, (err) => {
        console.log(err);
    });
  }



}
