import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder ,Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide : boolean = true;


  loginForm : FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['']
    })
  }


  ngOnInit(): void {
  }


  myFunction() {
    this.hide = !this.hide;
  }

  onSubmit(): any {
    this.crudService.Login(this.loginForm.value)
    .subscribe(() => {
        console.log('Login successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/company-list'))
      }, (err) => {
        console.log(err);
    });
  }


}
