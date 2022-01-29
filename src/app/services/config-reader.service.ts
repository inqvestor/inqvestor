import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, take } from 'rxjs';

export interface configs {
  apiServer: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigReaderService {
  constructor(private http: HttpClient) {}

  getJSON(file: string): Observable<any> {
    return this.http.get(file + '.json');
  }

  getConfigItem(item: string): Observable<string> {
    return this.getJSON('../../assets/configs').pipe(
      map((p) => {
        return p[item];
      })
    );
  }
}
