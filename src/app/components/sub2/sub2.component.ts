import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
//import { reader } from 'fs';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.scss']
})
export class Sub2Component implements OnInit {

  urls :  any[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  name = 'Angular 4';
  
  

  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < 5; i++) {
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


