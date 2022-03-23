import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
courseForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formValues();
  }

  formValues()
  {
  this.courseForm = new FormGroup({
  'courseName': new FormControl(null, Validators.required),
  'courseDesc' : new FormControl(null),
   'courseAmt' : new FormControl([Validators.required, Validators.minLength(5)]),
   'skills':new FormArray([
     new FormControl(null,[Validators.required])
   ])
  });
  }

  onSubmit(){
    console.log(this.courseForm.value); 
  }

  onClear() {
    this.courseForm.reset();
    }

    onAdd(){
      (<FormArray>this.courseForm.get('skills')).push(new FormControl(null))
    }
  
}
