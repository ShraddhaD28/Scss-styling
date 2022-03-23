import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterComponent } from './router/router.component';

const routes: Routes = [
  {path:'employee/:id', component:RouterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
