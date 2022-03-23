import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent implements OnInit {

  constructor(private active:ActivatedRoute) { }

  ngOnInit(): void {

  // Router params

    this.active.paramMap.subscribe(param=>{
      console.log(param.get('id'))
      let pid = +param.get('id') // (+) it will convert string to number
    });

  // Router Query Params 

  this.active.queryParamMap.subscribe(res=>{
   console.log(res.get('editMode'));

  });

  //Router Fragment 

  this.active.fragment.subscribe(res=>{
    console.log(res);
  });

}


}
