import { Component } from '@angular/core';
import { map, mergeMap } from 'rxjs';
import { ConfigReaderService } from './services/config-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'broader';
  constructor(private configServer: ConfigReaderService) {}

  ngOnInit(): void {
    // this.configServer.getJSON('../../assets/configs').subscribe( p=> console.log(p['apiServer']));
    this.configServer
      .getConfigItem('apiServer')
      .subscribe((v) => console.log(v));

    const data$ = this.configServer
      .getConfigItem('apiServer')
      .pipe(map((apiURL) => this.configServer.getJSON(apiURL)));

    data$.subscribe((data$) => {
      data$.subscribe((data) =>
        console.log('-----------111----------------', data)
      );
    });

    const data2$ = this.configServer
      .getConfigItem('apiServer')
      .pipe(mergeMap((apiURL) => this.configServer.getJSON(apiURL)));

    data2$.subscribe((data2) => {
      console.log('---------2222------------', data2);
    });
  }
}
