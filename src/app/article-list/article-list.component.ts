import { Component, OnInit } from '@angular/core';
import {ArticlesQuery} from "../core/store/articles.query";
import {Observable} from "rxjs";

import {ArticlesModel} from "../core/store/model/articles.model";
import {ArticlesService} from "../core/store/articles.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  constructor(private _articlesQuery: ArticlesQuery, private _articleService: ArticlesService) { }
  articles$!: Observable<ArticlesModel[]>;
  image = 'https://picsum.photos/200/300';
  perPage = 15;

  page: number = 1;


  ngOnInit(): void {
    this.articles$ = this._articlesQuery.getArticles();
  }

  getMore() {
    this.page++;
    this._articleService.getArticles(this.page).toPromise();
  }

}
