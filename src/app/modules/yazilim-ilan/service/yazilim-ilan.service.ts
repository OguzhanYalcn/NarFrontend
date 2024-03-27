import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YazilimIlanService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  yazilimIlanVer(ilanVer: any):Observable<any> {
    return this.httpClient.post<any>('/yazilimIlanVer', ilanVer);
  }
}
