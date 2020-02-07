import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  prodImg;
  selectedFile;
  productForm;
  imgURL;
  message: string;
  avatarName: any;
  imagePath: any;
  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.productForm = this.formBuilder.group({
      name : ['', Validators.required],
      price : ['', Validators.required],
      category : ['', Validators.required],
    })
  }

  formSubmit(formdata){
    formdata.image = this.prodImg;
    this.productService.addProduct(formdata).subscribe(response => {
      console.log(response.message);
    })
  }

  onFileChanged(event){
    let formData = new FormData();
    this.selectedFile = event.target.files[0];
    this.prodImg = this.selectedFile.name;
    this.preview(event.target.files);
    formData.append('product', this.selectedFile, this.selectedFile.name);
    this.productService.uploadImage(formData).subscribe(response => {
      console.log(response.message);
      
    });
  }

  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
  }

}
