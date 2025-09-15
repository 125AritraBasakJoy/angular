// ng-if.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  template: `<p *ngIf="show">Hello Angular!</p>`
})
export class NgIfComponent {
  show = true;
}
