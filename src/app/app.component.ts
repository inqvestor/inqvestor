import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppPopupComponent } from './components/app-popup/app-popup.component';
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
  showAlertPopup=false;
  displayedColumns: string[] = ['alertId', 'alert', 'actions'];
  //  dataSource$!: Observable<CdkTableDataSourceInput<unknown>>; //= new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource();
  @ViewChild("editAlertPopup" )
  editAlertPopup!: AppPopupComponent;

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

  editAlert(){
    this.showAlertPopup=true;
    console.log(this.editAlertPopup);
    // this.editAlertPopup.show=true;
   // this.editAlertPopup.show$.next(true);
  }
}


