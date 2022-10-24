import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'article',
    loadChildren: () => import('./article-detail/article-detail.module').then(m => m.ArticleDetailModule)
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./article-list/article-list.module').then(m => m.ArticleListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
