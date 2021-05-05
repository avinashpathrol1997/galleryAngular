import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sub3',
  templateUrl: './sub3.component.html',
  styleUrls: ['./sub3.component.scss']
})
export class Sub3Component implements OnInit {

  urls :  any[] = [];

 constructor(private http: HttpClient) { }
      
 ngOnInit(): void {
}

name = 'Angular 4';
  
  

onSelectFile(event:any) {
  if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < 10; i++) {
              var reader = new FileReader();

              reader.onload = (event:any) => {
                console.log(event.target.result);
                 this.urls.push(event.target.result); 
              }

              reader.readAsDataURL(event.target.files[i]);
      }
  }
}
}