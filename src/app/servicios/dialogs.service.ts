import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  loadingDialogConfig = new MatDialogConfig();
  dialogConfig = new MatDialogConfig();

  constructor() {
    this.loadingDialogConfig.backdropClass = 'loadingDialogBackground';
    this.loadingDialogConfig.panelClass = 'loadingDialogPanel';
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
  }
}
