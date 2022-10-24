import { QueryEntity } from '@datorama/akita';
import { ArticlesStore, ArticlesState } from './articles.store';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ArticlesQuery extends QueryEntity<ArticlesState> {

  constructor(protected override store: ArticlesStore) {
    super(store);
  }
  getArticles() {
    return this.selectAll();
  }

  getArticle(url: string | null) {
    return this.selectEntity(url);
  }

}
