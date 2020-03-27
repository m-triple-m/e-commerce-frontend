import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

import { faBoxOpen, faRupeeSign, faTrashAlt, faDice } from '@fortawesome/free-solid-svg-icons';

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
  description = [];

  delete = faTrashAlt;
  box = faBoxOpen;
  dice = faDice;
  money = faRupeeSign;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.productForm = this.formBuilder.group({
      name : ['', Validators.required],
      price : ['', Validators.required],
      category : ['', Validators.required]
    })
  }

  formSubmit(formdata){
    if(this.productForm.invalid){
      alert('invalid form')
      return;
    }
    formdata.image = this.prodImg;
    formdata.description = this.description;
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

  addDescription(){
    this.description.push(['', '']);
    console.log(this.description);
  }

  removeDescription(index){
    this.description.splice(index, 1);
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

  getControl(){
    return this.productForm.controls;
  }

}
