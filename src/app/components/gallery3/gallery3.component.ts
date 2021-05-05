import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-gallery3',
  templateUrl: './gallery3.component.html',
  styleUrls: ['./gallery3.component.scss']
})
export class Gallery3Component implements OnInit {
  urls :  any[] = [];
    //public id: Number;
    public source : any;
    public sid :any;
    public text1 :any;
    url: any; //Angular 11, for stricter type
    url1:any;
    url2:any;
    msg = "";
    constructor(private crudService: CrudService) {
      
  
      
   // console.log(' href => ' + window.location.href);
    console.log('href =>' + window.location.href);
    const url = window.location.href
   console.log(url);
    const id = url.split('/gallery').pop();
    console.log(id);
    this.sid = id;
    if(this.sid ==1) {
      this.text1="Subsription 1 "
    }
    if(this.sid ==2) {
      this.text1="Subsription 2 "
  
    }
    if(this.sid ==3) {
      this.text1="Subsription 3 "
  
    }
    this.crudService.getSub(id).subscribe(response =>{
      this.source = response;
    console.log(response);
    })
     }
  
  ngOnInit(): void {
  }

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
