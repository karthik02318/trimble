import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http} from '@angular/http';

@Injectable()
export class $http {
  constructor(private http: Http) {
  }

  post(apiURL: string, data: any) {

    let postData = data;
    return this.http.post(apiURL, postData);
  }

  get(apiURL: string, data: any) {
    //data.gdt = Date.now();
    let queryString = this.convertToJsonToParam(data);
    return this.http.get(apiURL + '?' + queryString);
  }

  convertToJsonToParam(data: Object) {
    let recursiveDecoded = decodeURIComponent($.param(data));
    return recursiveDecoded;
  }
}
