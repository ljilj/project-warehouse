import { Item } from './../model/item';
import { DocumentsService } from './../services/documents.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from './../model/article';
import { Doc } from './../model/doc';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wo-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  document: Doc;
  items: Item[];
  articles: Article[];

  constructor(
    private route: ActivatedRoute,
    private documentsService: DocumentsService
    ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.documentsService.get(id).subscribe(data => this.document = data);
    this.documentsService.getAllArticles().subscribe(data => {
      this.articles = data.results;
      this.documentsService.getItems(id).subscribe(data => {
        this.items = data.results.map(item => {
          return this.mapArticle(item);
        });
      });
    });
  }
  
  newItem(item) {
    item.documents = this.document._id;
    this.documentsService.saveItem(item).subscribe(i => this.items.push(this.mapArticle(i)));
  }

  recordDocument(document) {
    this.documentsService.recordDocument(document).subscribe(doc => this.document = doc);
  }

  private mapArticle(item: Item): Item {
    for(let i = 0; i < this.articles.length; i++) {
      if(this.articles[i]['code'] == item.article) {
        item.article = this.articles[i]['name'];
        return item;
      }
    }
  }

}
