import { Component } from '@angular/core';
import { AlertServiceService } from './services/alert-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'broader';
  constructor(private alertServiceService: AlertServiceService) {}

  ngOnInit(): void {
    this.alertServiceService
      .getAlerts()
      .subscribe((alerts: any) => console.log(alerts));
  }
}
