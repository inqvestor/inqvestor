import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alert } from 'src/app/models/alert';

export interface DialogData {
  alert: Alert;
}

@Component({
  selector: 'app-alert-edit',
  templateUrl: './alert-edit.component.html',
  styleUrls: ['./alert-edit.component.scss'],
})
export class AlertEditComponent implements OnInit {
  editMode = false;
  title = 'Create New Alert';

  constructor(
    public dialogRef: MatDialogRef<AlertEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    if (this.data.alert !== undefined) {
      this.editMode = true;
      this.title = 'Edit Alert';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
