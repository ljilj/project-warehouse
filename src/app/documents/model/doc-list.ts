import { Doc } from './doc';

export class DocList {
  count: number;
  results: Doc[];

  constructor(obj?: any) {
    this.count = obj && obj.count || 0;
    this.results = obj && obj.results.map(elem => { return new Doc(elem); }) || [];
  }
}