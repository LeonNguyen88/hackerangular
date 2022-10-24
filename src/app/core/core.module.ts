import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ArticlesQuery} from "./store/articles.query";
import {ArticlesStore} from "./store/articles.store";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ArticlesStore,
    ArticlesQuery
  ]
})
export class CoreModule { }
