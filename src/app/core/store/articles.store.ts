import { EntityState, EntityStore, StoreConfig} from "@datorama/akita";
import {ArticlesModel} from "./model/articles.model";


export interface ArticlesState extends EntityState<ArticlesModel, string | null> {}

@StoreConfig({ name: 'articles', idKey: 'url' })
export class ArticlesStore extends EntityStore<ArticlesState> {
  constructor() {
    super();
  }
}
