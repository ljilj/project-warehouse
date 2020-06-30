import { Doc } from './../../model/doc';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wo-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() doc: Doc;
  @Output() record = new EventEmitter<Doc>();

  constructor() { }

  ngOnInit() {
  }

  recordDocument() {
    this.doc.status = "recorded";
    this.doc.dateOfRecording = new Date().toISOString();
    this.record.emit(this.doc);
  }

}
