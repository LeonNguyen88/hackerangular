import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleDetailComponent} from "./article-detail.component";

import {ArticleDetailResolver} from "./article-detail.resolver";


const routes: Routes = [{
  path: '',
  component: ArticleDetailComponent,
  resolve: {
    article: ArticleDetailResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleDetailRoutingModule { }
