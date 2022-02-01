import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable } from 'rxjs';
import { Alert } from '../models/alert';
import { ConfigReaderService } from './config-reader.service';

@Injectable({
  providedIn: 'root',
})


export class AlertServiceService {
  constructor(
    private httpClient: HttpClient,
    private configReaderService: ConfigReaderService
  ) {}

  getAlerts(): Observable<Alert[]> {
    return this.configReaderService.getConfigItem('apiServer').pipe(
      mergeMap((baseURL) => {
        const alertURL = `${baseURL}/alerts`;
        return this.httpClient.get(alertURL) as Observable<Alert[]>;
      })
    );
  }
}
