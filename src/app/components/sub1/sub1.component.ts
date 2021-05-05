import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.scss']
})
export class Sub1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //url; //Angular 8
	url: any; //Angular 11, for stricter type
  url1:any;
  url2:any;
	msg = "";
	
	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		//for(let i =0;i<File.length;i++){
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
		}
	
  }
	
}

