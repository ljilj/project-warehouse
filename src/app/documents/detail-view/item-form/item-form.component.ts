import { Item } from './../../model/item';
import { Article } from './../../model/article';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wo-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  @Input() articles: Article[];
  @Output() addItem = new EventEmitter<Item>();
  newItem = new Item();

  constructor() {}

  ngOnInit() {
  }

  saveItem() {
    this.addItem.emit(this.newItem);
    this.newItem = new Item();
  }

}
