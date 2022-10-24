import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleListComponent} from "./article-list.component";

import {ArticleListResolver} from "./article-list.resolver";


const routes: Routes = [{
  path: '',
  component: ArticleListComponent,
  resolve: {
    articles: ArticleListResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleListRoutingModule { }
