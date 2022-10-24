import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ArticlesModel} from "../core/store/model/articles.model";

import {ArticlesService} from "../core/store/articles.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleDetailResolver implements Resolve<ArticlesModel> {


  constructor(private _articleService: ArticlesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArticlesModel> {
    return this._articleService.getArticle(route.queryParamMap.get('link'));
  }
}
