
import { CrudService } from './../../service/crud.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


 public bookForm: any;



    //public id: Number;
  public source : any;
  public sid :any;
  public text1 :any;
  url: any; //Angular 11, for stricter type
  url1:any;
  url2:any;
	msg = "";
  Books:any = [];

  
  
  constructor(private crudService: CrudService,
    public formBuilder: FormBuilder,
    
    private router: Router,
    private ngZone: NgZone,) {
      
      this.createShopForm();
   

    
 // console.log(' href => ' + window.location.href);
  console.log('href =>' + window.location.href);
  const url = window.location.href
 console.log(url);
  const id = url.split('/gallery').pop();
  console.log(id);
  this.sid = id;
  if(this.sid ==1) {
    this.text1="Subsription 1 !!"
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

   createShopForm() {
    this.bookForm = this.formBuilder.group({
      name:[''],
      comment: [''],
    })
  }

   ngOnInit(): void {
    this.crudService.GetComments().subscribe(res => {
      console.log(res)
      this.Books =res;
    });    
    
  }

show(){
  this.crudService.GetComments().subscribe(res => {
    console.log(res)
    this.Books =res;
  }); 
}

	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
    // this.crudService.GetComments().subscribe(res => {
    //   console.log(res)
    //   this.Books =res;
    // }); 

    
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
			this.msg = "Caption - Hi guys i just bought a new car!!"
      this.url = reader.result;
		}
	
  }

  onSubmit(): any {
    
    this.crudService.AddBook(this.bookForm.value)
    .subscribe(() => {
        console.log('Data added successfully!' )
     //   location.reload();
        this.ngZone.run(() => this.router.navigateByUrl('/gallery1'))
      }, (err) => {
        console.log(err);
    });
  }

 
}
