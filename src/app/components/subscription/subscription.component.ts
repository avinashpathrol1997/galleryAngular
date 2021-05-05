import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  toggle:boolean = false;
  toggle1:boolean = false;
  toggle2:boolean = false;
  

  constructor(  private router: Router,
    private ngZone: NgZone,) { }

  ngOnInit(): void {
  }
  doToggle():void{
    this.toggle = !this.toggle;
   // this.ngZone.run(() => this.router.navigateByUrl(''))

    // Do some other stuff needed
  }

  doToggle1():void{
    this.toggle1 = !this.toggle1;
   // this.ngZone.run(() => this.router.navigateByUrl(''))

    // Do some other stuff needed
  }
  doToggle2():void{
    this.toggle2 = !this.toggle2;
   // this.ngZone.run(() => this.router.navigateByUrl(''))

    // Do some other stuff needed
  }
}
