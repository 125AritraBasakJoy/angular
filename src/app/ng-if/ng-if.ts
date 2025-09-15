import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: true,       
  templateUrl: './ng-if.html',
  styleUrls: ['./ng-if.css']
})
export class NgIfComponent {
  userStatus: string = 'active';
}