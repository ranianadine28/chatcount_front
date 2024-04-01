import { Component } from '@angular/core';
import { EnvironmentService } from '../enviroment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  baseHref: string | undefined;
  constructor(private environmentService: EnvironmentService) {}

  ngOnInit() {
    this.baseHref = this.environmentService.getBaseHref();
  }
}
