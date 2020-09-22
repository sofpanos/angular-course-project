import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute = '';
  routeChanged(route: string): void {
    this.currentRoute = route;
  }
}
