import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'internetbanking';

  constructor(public dialog: MatDialog) { }

  /*
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  */

}
