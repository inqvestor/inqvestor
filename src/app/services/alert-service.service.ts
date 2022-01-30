import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable } from 'rxjs';
import { ConfigReaderService } from './config-reader.service';

@Injectable({
  providedIn: 'root',
})
export class AlertServiceService {
  constructor(
    private httpClient: HttpClient,
    private configReaderService: ConfigReaderService
  ) {}

  getAlerts(): Observable<any> {
    return this.configReaderService
      .getConfigItem('apiServer')
      .pipe(mergeMap((url) => this.httpClient.get(url)));
  }
}
