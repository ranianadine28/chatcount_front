import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../SharedModule/shared.module';
import { SettingsComponent } from './settings.component';
import { SettingsService } from './setting.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    data: { animation: 'stock' }
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatSnackBarModule
  ],
  declarations: [SettingsComponent],
  providers: [SettingsService, provideAnimations(),
    provideToastr(),
    
  ],
})
export class SettingsManagementModule { }
