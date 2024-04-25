import { Component, OnInit } from '@angular/core';
import { SettingsService } from './setting.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  labels: any[] = [];
  labels2: any[] = [];
  labels3: any[] = [];
  labels4: any[] = [];
  labels5: any[] = [];
  thresholdToShow = 10;
  showAllLabels1 = false;
  showAllLabels2 = false;
  showAllLabels3 = false;
  showAllLabels4 = false;
  showAllLabels5 = false;
  showLabels1: boolean = false;

  showLabels2: boolean = false;
  showLabels3: boolean = false;
  showLabels4: boolean = false;
  showLabels5: boolean = false;


  newLabelRootId: string = '';
  newLabelName: string = '';

  constructor(private settingsService: SettingsService,
    private _snackBar: MatSnackBar,

  ) { }

  ngOnInit(): void {
  }


  toggleLabels2(): void {
    this.showLabels2 = !this.showLabels2;
    if (this.showLabels2) {
      this.getAllLabels2();
    }
  }
  toggleLabels1(): void {
    this.showLabels1 = !this.showLabels1;
    if (this.showLabels1) {
      this.getAllLabels();
  
    }
  }
  toggleShowAllLabels2(): void {
    this.showAllLabels2 = !this.showAllLabels2;
  }
  toggleShowAllLabels3(): void {
    this.showAllLabels3 = !this.showAllLabels3;
  }

  toggleShowAllLabels4(): void {
    this.showAllLabels4 = !this.showAllLabels4;
  }

  toggleShowAllLabels5(): void {
    this.showAllLabels5 = !this.showAllLabels5;
  }
  resetShowAllLabels(): void {
    this.showAllLabels2 = false;
  }
  toggleLabels4(): void {
    this.showLabels4 = !this.showLabels4;
    if (this.showLabels4) {
      this.getAllLabels4();
    }
  }

  toggleLabels5(): void {
    this.showLabels5 = !this.showLabels5;
    if (this.showLabels5) {
      this.getAllLabels5();
  
    }
  }

  toggleLabels3(): void {
    this.showLabels3 = !this.showLabels3;
    if (this.showLabels3) {
      this.getAllLabels3();
  
    }
  }

  getAllLabels(): void {
    this.settingsService.getAllLabels()
      .subscribe(
        (response) => {
          this.labels = response;
        },
        (error) => {
          console.error('Erreur lors de la récupération des libellés :', error);
          // Gérer l'erreur dans votre application
        }
      );
  }
  getAllLabels2(): void {
    this.settingsService.getAllLabels2()
      .subscribe(
        (response) => {
          this.labels2 = response;
        },
        (error) => {
          console.error('Erreur lors de la récupération des libellés :', error);
          // Gérer l'erreur dans votre application
        }
      );
  }
  getAllLabels3(): void {
    this.settingsService.getAllLabels3()
      .subscribe(
        (response) => {
          this.labels3 = response;
        },
        (error) => {
          console.error('Erreur lors de la récupération des libellés :', error);
          // Gérer l'erreur dans votre application
        }
      );
  }
  getAllLabels4(): void {
    this.settingsService.getAllLabels4()
      .subscribe(
        (response) => {
          this.labels4 = response;
        },
        (error) => {
          console.error('Erreur lors de la récupération des libellés :', error);
          // Gérer l'erreur dans votre application
        }
      );
  }
  getAllLabels5(): void {
    this.settingsService.getAllLabels5()
      .subscribe(
        (response) => {
          this.labels5 = response;
        },
        (error) => {
          console.error('Erreur lors de la récupération des libellés :', error);
          // Gérer l'erreur dans votre application
        }
      );
  }
  addNewLabel(): void {
    if (!this.newLabelRootId || !this.newLabelName) {
      this._snackBar.open('Veuillez saisir la racine et le nom du libellé.', 'Fermer', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      return;
    }
    const newLabelData = {
      rootId: this.newLabelRootId,
      label: this.newLabelName
    };

    this.settingsService.addNewLabel(newLabelData)
      .subscribe(
        (response) => {
          console.log('Libellé ajouté avec succès :', response.message);
          this._snackBar.open('Libellé ajouté avec succès!', 'Ok', {
            panelClass: ['redNoMatch'] ,

            duration: 5000, 
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });   
                 this.getAllLabels();
        },
        (error: HttpErrorResponse) => {
          console.error("File upload error:", error);
          if (error.status === 409) {
            this._snackBar.open('Libellé existe déja!', 'Fermer', {
              duration: 5000, 
            });
          }  else {
              this._snackBar.open('Une erreur inconnue s"est produite .', 'Fermer', {
                duration: 5000, 
              });
            }
          }
      
      );
  }
  addNewLabel2(): void {
    const newLabelData = {
      rootId: this.newLabelRootId,
      label: this.newLabelName
    };

    this.settingsService.addNewLabel2(newLabelData)
      .subscribe(
        (response) => {
          console.log('Libellé ajouté avec succès :', response.message);
          this._snackBar.open('Libellé ajouté avec succès!', 'Ok', {
            panelClass: ['redNoMatch'] ,

            duration: 5000, 
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });   
                 this.getAllLabels2();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du libellé :', error);
          this._snackBar.open('Erreur lors de l\'ajout du libellé!', 'Ok', {
            panelClass: ['redNoMatch'] ,

            duration: 5000, 
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });         }
      );
  }
  addNewLabel3(): void {
    const newLabelData = {
      rootId: this.newLabelRootId,
      label: this.newLabelName
    };

    this.settingsService.addNewLabel3(newLabelData)
      .subscribe(
        (response) => {
          console.log('Libellé ajouté avec succès :', response.message);
          this._snackBar.open('Libellé ajouté avec succès!', 'Ok', {
            panelClass: ['redNoMatch'] ,

            duration: 5000, 
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });   
                 this.getAllLabels3();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du libellé :', error);
          this._snackBar.open('Erreur lors de l\'ajout du libellé!', 'Ok', {
            panelClass: ['redNoMatch'] ,

            duration: 5000, 
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });         }
      );
  }
  addNewLabel4(): void {
    const newLabelData = {
      rootId: this.newLabelRootId,
      label: this.newLabelName
    };

    this.settingsService.addNewLabel4(newLabelData)
      .subscribe(
        (response) => {
          console.log('Libellé ajouté avec succès :', response.message);
          this._snackBar.open('Libellé ajouté avec succès!', 'Ok', {
            panelClass: ['redNoMatch'] ,

            duration: 5000, 
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });   
                 this.getAllLabels4();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du libellé :', error);
          this._snackBar.open('Erreur lors de l\'ajout du libellé!', 'Ok', {
            panelClass: ['redNoMatch'] ,

            duration: 5000, 
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });         }
      );
  }
  addNewLabel5(): void {
    const newLabelData = {
      rootId: this.newLabelRootId,
      label: this.newLabelName
    };

    this.settingsService.addNewLabel5(newLabelData)
      .subscribe(
        (response) => {
          console.log('Libellé ajouté avec succès :', response.message);
          this._snackBar.open('Libellé ajouté avec succès!', 'Ok', {
            panelClass: ['redNoMatch'] ,

            duration: 5000, 
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });   
                 this.getAllLabels5();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du libellé :', error);
          this._snackBar.open('Erreur lors de l\'ajout du libellé!', 'Ok', {
            panelClass: ['redNoMatch'] ,

            duration: 5000, 
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });         }
      );
  }
  updateLabel(labelId: string, newLabelName: string): void {
    const updatedLabelData = {
      label: newLabelName
    };

    this.settingsService.updateLabel(labelId, updatedLabelData)
      .subscribe(
        (response) => {
          console.log('Libellé mis à jour avec succès :', response.message);
          this.getAllLabels();
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du libellé :', error);
        }
      );
  }
}
