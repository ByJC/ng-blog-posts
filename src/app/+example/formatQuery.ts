export class formatQuery {
  size: any;
  aggs: any;
  constructor(data) {
    this.size = 0;
    this.aggs = {
      "group_by_type": {
        "terms": {
          "field": data
        }
      }
    };
  }
}