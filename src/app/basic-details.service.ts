import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class BasicDetailsService {
  _basicDetails: any;
  constructor(private _http: Http) { }

  getBasicDetails() {
    return this._http.get('/api/basicData')
      .map(_basicDetails => this._basicDetails = _basicDetails.json().data);
  }

}

