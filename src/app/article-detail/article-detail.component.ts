import { Component, OnInit } from '@angular/core';
import {ArticlesQuery} from "../core/store/articles.query";
import {ArticlesModel} from "../core/store/model/articles.model";

import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  constructor(private _articleQuery: ArticlesQuery,
              private _route: ActivatedRoute) { }
  url!: string | null;
  article$!: Observable<ArticlesModel | undefined>;


  ngOnInit(): void {
    this.url = this._route.snapshot.queryParamMap.get('link');

    this.article$ = this._articleQuery.getArticle(this.url);
  }

}
