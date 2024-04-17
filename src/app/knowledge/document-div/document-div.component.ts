import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertHandlerService } from '../../SharedModule/alert_handler.service';
import { MatDialog } from '@angular/material/dialog';
import { NewchatComponent } from '../../chat-div/modal/newchat/newchat.component';
import { AddFolderModalComponent } from '../add-folder-modal/add-folder-modal.component';

@Component({
  selector: 'app-document-div',
  templateUrl: './document-div.component.html',
  styleUrl: './document-div.component.css'
})
export class DocumentDivComponent {
  constructor(
    private alertServ: AlertHandlerService,
    private modal: NgbModal,
    @Inject(PLATFORM_ID) private platformId: Object,
    private dialog: MatDialog ,

  ) {}
  addChat() {
    const dialogRef = this.dialog.open(AddFolderModalComponent, {
      width: '100%',
      height: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // addDocument() {
  //   const dialogRef = this.dialog.open(AddFolderModalComponent, {
  //     width: '100%',
  //     height: '100%'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
}
