import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable, take } from 'rxjs';

export interface configs {
  apiServer: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigReaderService {
  constructor(private http: HttpClient) {}

  getJSON(file: string): Observable<any> {
    return this.http.get(file + '.json?q=' + Math.random() );
  }

  getConfigItem(item: string): Observable<string> {
    return this.getJSON('../../assets/configs').pipe(
      delay(5000),
      map((p:{[p:string]:string}) => {
        return p[item];
      })
    );
  }
}
