import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProjectDetailsService {


  result: any;
  constructor(private _http: Http) { }

  getProjectDetails() {
    return this._http.get('/api/projectDetails')
      .map(result => this.result = result.json().data);
  }

}
