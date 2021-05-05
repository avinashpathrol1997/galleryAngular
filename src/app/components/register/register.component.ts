import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide : boolean = true;


  registerForm : FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.registerForm = this.formBuilder.group({
      name: [''],
      email:[''],
      age: [''],
      password: [''],
   //   subscription:['']
    })
  }
  ngOnInit(): void {
  }

  myFunction() {
    this.hide = !this.hide;
  }

  onSubmit(): any {
    this.crudService.Register(this.registerForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/login'))
      }, (err) => {
        console.log(err);
    });
  }


}
