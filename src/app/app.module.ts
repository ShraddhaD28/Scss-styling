import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariableNestingComponent } from './variable-nesting/variable-nesting.component';
import { ExtendsComponent } from './extends/extends.component';
import { FunctionsComponent } from './functions/functions.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoopsComponent } from './loops/loops.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplatedrivenFormComponent } from './templatedriven-form/templatedriven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterComponent } from './router/router.component';

@NgModule({
  declarations: [
    AppComponent,
    VariableNestingComponent,
    ExtendsComponent,
    FunctionsComponent,
    InterpolationComponent,
    LoopsComponent,
    ReactiveFormComponent,
    TemplatedrivenFormComponent,
    RouterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
