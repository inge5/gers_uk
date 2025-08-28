import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeUsaService {
  public baseUk: string;
  public urlUk: string;

  constructor(public _http: HttpClient) {
    this.baseUk = environment.baseUk;
    this.urlUk = environment.urlUk;
  }

  getHomeUsa(): Observable<any> {
    return this._http.get(`${this.baseUk}/pages/70/`);
  }

  /*
  getProyects(): Observable<any>{
    return this._http.get(`${this.urlUk}/proyectos/`);
  }
  */
}
