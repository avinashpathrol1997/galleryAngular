import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  
  Profile:any = [];
  toggle:boolean = false;

  constructor(private crudService: CrudService,
    private router: Router,
    private ngZone: NgZone,
   ) { }
  ngOnInit(): void {
    this.crudService.GetProfile().subscribe(res => {
      console.log(res)
      this.Profile =res;
    });    
    
  }
  onSubmit(): any {
        console.log('Redirected to subscription successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/subscription'))
      }
     
      doToggle():void{
        this.toggle = !this.toggle;
        this.ngZone.run(() => this.router.navigateByUrl('/subscription'))
   
        // Do some other stuff needed
      }
}
