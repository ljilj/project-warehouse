import { DocList } from './../model/doc-list';
import { DocumentsService } from './../services/documents.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wo-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  docs: DocList;
  params = {
    page: 1,
    pageSize: 10,
    sort: 'dateOfCreation',
    sortDirection: 'desc'
  }

  columns = {
    "dateOfCreation": true,
    "dateOfRecording": true,
    "transactionType": true,
    "status": true,
    "businessPartner": true,
    "businessPartnerLocation": true,
    "year": true
  };
  showSettings = false;

  constructor(private docService: DocumentsService) { }

  ngOnInit() {
    this.updateDocuments();
  }

  changePage(newPage) {
    this.params.page = newPage;
    this.updateDocuments();
  }

  changeSort(newSort) {
    if(this.params.sort == newSort) {
      this.params.sortDirection = this.params.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.params.sort = newSort;
      this.params.sortDirection = 'desc';
    }
    this.updateDocuments();
  }

  updateDocuments() {
    this.docService.getAll(this.params).subscribe(data => this.docs = data);
  }

}
