import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from "./data-binding/data-binding";
import { NgIfComponent } from './ng-if/ng-if';
import { NgFor } from "./ng-for/ng-for";
import { FruitList } from "./fruit-list/fruit-list";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Admin, User, DataBinding, NgIfComponent, NgFor, FruitList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angularTutorial');
}
