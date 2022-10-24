import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleListRoutingModule } from './article-list-routing.module';
import { ArticleListComponent } from './article-list.component';


@NgModule({
  declarations: [
    ArticleListComponent
  ],
  imports: [
    CommonModule,
    ArticleListRoutingModule
  ]
})
export class ArticleListModule { }
