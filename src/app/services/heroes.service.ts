import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Hero} from '../classes/hero';

@Injectable()
export class HeroesService {

  constructor(private http: Http) { }

  getHeroList(): Observable<Hero[]> {
    return this.http.get('../../assets/dota2\ data/herodata.json')
    .map((response: Response) => response.json())
    .catch(this.handleError);
  }

  private handleError(error: any) {

    // tslint:disable-next-line:max-line-length
    const errMsg = (error.message) ? error.message : error.status ? `${error.status}  - ${error.statustext} ${ 'this is a error' }` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
