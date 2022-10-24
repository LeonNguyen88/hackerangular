import {Injectable} from "@angular/core";
import {Apollo, gql} from "apollo-angular";
import {tap} from "rxjs";

import {ArticlesStore} from "./articles.store";
@Injectable({
  providedIn: 'root'
})

export class ArticlesService {
  constructor(private _apollo: Apollo,
              private _articlesStore: ArticlesStore) {}
  getArticleQuery = gql`
    query GetArticle($url: String!) {
      article(url: $url) {
        content,

        coverImageUrl,
        description,
        subtitle,
        title,
        url
      }
    }
  `;

  getArticlesQuery = gql`
    query GetArticles($pageNumber: Int!) {
      articles(pageNumber: $pageNumber) {
        content,
        coverImageUrl,
        description,
        subtitle,

        title,
        url
      }
    }
  `;

  getArticles(page: number) {
    return this._apollo.watchQuery({

      query: this.getArticlesQuery,
      variables: {
        pageNumber: page
      }
    })
      .valueChanges.pipe(

        tap((data: any) => this._articlesStore.add(data.data.articles))
      )
  }

  getArticle(url: string | null) {
    return this._apollo.watchQuery({
      query: this.getArticleQuery,
      variables: {
        url: url
      }
    })
      .valueChanges.pipe(
      tap((data: any) => this._articlesStore.upsert(data.data.article.url, (oldState) => {

        if (!Object.keys(oldState).length) {
          oldState = {...data.data.article};
        }
        return ({
          ...oldState,
          coverImageUrl: data.data.article.coverImageUrl,
          content: data.data.article.content,
          description: data.data.article.description
        });
      }, (id: any, newState: any) => ({id, ...newState}))
    ));
  }
}
