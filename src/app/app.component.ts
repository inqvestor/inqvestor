import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlertEditComponent } from './components/alert-edit/alert-edit.component';
import { AppPopupComponent } from './components/app-popup/app-popup.component';
import { Alert } from './models/alert';
import { AlertServiceService } from './services/alert-service.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'broader';
  constructor(private alertServiceService: AlertServiceService,public dialog: MatDialog,private themeService: ThemeService) {}


  get dark() {
    return this.themeService.theme === 'dark';
  }

  set dark(enabled: boolean) {
    this.themeService.theme = enabled ? 'dark' : 'default';
  }


  loading = true;
  showAlertPopup=false;
  displayedColumns: string[] = ['alertId', 'alert', 'actions'];
  //  dataSource$!: Observable<CdkTableDataSourceInput<unknown>>; //= new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.dark=false;
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

  addNewAlert(){
    const dialogRef = this.dialog.open(AlertEditComponent, {
      width: '250px',
    //  panelClass: ['pop1', 'pop2'],
      data: {   },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);

    });
  }

  editAlert(el: any){
    console.log( 'element', el);
    const dialogRef = this.dialog.open(AlertEditComponent, {
      width: '250px',
    //  panelClass: ['pop1', 'pop2'],
      data: { alert:  el as Alert },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);

    });

  }
}


