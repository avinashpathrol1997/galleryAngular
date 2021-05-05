import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  companyForm: FormGroup;



 constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.companyForm = this.formBuilder.group({
      cid: [''],
      name: [''],
   //   description: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.AddCompany(this.companyForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/company-list'))
      }, (err) => {
        console.log(err);
    });
  }


}
