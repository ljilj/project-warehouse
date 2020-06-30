import { ItemList } from './../model/item-list';
import { DocList } from './../model/doc-list';
import { Doc } from './../model/doc';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item';
import { ArticleList } from '../model/article-list';

const serverUrl = "http://localhost:3000/api/documents";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {


  constructor(private http: HttpClient) { }

  getAll(params?) {
    let queryString = {};

    if(params) {
      queryString = {
        params: new HttpParams()
          .set("page", params.page || '1')
          .set("pageSize", params.pageSize || '10')
          .set("sort", params.sort || '')
          .set("sortDirection", params.sortDirection || '')
      };
    }

    return this.http.get(serverUrl, queryString).pipe(map(response => {
      return new DocList(response);
    }));
  }

  get(id: number): Observable<Doc> {
    return this.http.get(serverUrl + "/" + id).pipe(map(res => {
      return new Doc(res);
    }));
  }

  recordDocument(document: Doc): Observable<Doc> {
    return this.http.put(serverUrl + "/" + document._id, document).pipe(map(res => {
      return new Doc(res);
    }));
  }

  getItems(id: number): Observable<ItemList> {
   return this.http.get(serverUrl + "/" + id + "/items").pipe(map(res => {
      return new ItemList(res);
    })); 
  }

  saveItem(item: Item): Observable<Item> {
    return this.http.post(serverUrl + "/" + item.documents + "/items", item).pipe(map(res => {
      return new Item(res);
    }));
  }

  getAllArticles(): Observable<ArticleList> {
    return this.http.get("http://localhost:3000/api/articles").pipe(map(res => {
      return new ArticleList(res);
    }));
  }
}
