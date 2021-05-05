import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  Profile:any = [];
  
  constructor(private crudService: CrudService, private router: Router,
    private ngZone: NgZone,) { }
  ngOnInit(): void {
    this.crudService.GetProfile().subscribe(res => {
      console.log(res)
      this.Profile =res;
    });    
    
  }

  navigate(){
    
    this.ngZone.run(() => this.router.navigateByUrl('/pedit'))
  }


  
}
