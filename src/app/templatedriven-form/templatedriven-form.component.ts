import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven-form',
  templateUrl: './templatedriven-form.component.html',
  styleUrls: ['./templatedriven-form.component.scss']
})
export class TemplatedrivenFormComponent implements OnInit {

  @ViewChild ('myForm') courseForm:NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
  console.log("Course Name is : " + form.value.courseName);
	console.log("Course Desc is : " + form.value.courseDesc);
	console.log("Course Amount is : " + form.value.courseAmount); 
  }


  onClear(){
  this.courseForm.reset();
  }

}
