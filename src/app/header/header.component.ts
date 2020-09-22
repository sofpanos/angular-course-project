import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() routeChange = new EventEmitter<string>();

  recipesSelected = false;
  shoppingListSelected = false;

  constructor() {
  }


  ngOnInit(): void {
  }

  onSelect(selection: string) {
    this.recipesSelected = selection === 'recipes';
    this.shoppingListSelected = selection === 'shopping-list';
    this.routeChange.emit(selection);
  }

}
