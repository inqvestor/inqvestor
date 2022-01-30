import { AfterViewInit, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlertServiceService } from './services/alert-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'broader';
  constructor(private alertServiceService: AlertServiceService) {}
  loading = true;

  displayedColumns: string[] = ['alertId', 'alert', 'actions'];
  //  dataSource$!: Observable<CdkTableDataSourceInput<unknown>>; //= new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    //  this.dataSource$ = this.alertServiceService.getAlerts();
    this.alertServiceService
      .getAlerts()
      .subscribe((alerts: any) => console.log(alerts));
  }

  ngAfterViewInit() {
    this.alertServiceService.getAlerts().subscribe((alerts: any) => {
      this.dataSource.data = alerts;
      this.loading=false;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
