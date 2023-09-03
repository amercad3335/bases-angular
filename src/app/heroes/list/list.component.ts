import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Ironman', 'Spiderman', 'Thor', 'Capitan America', 'Hulk'];
  public heroDelete?: string;

  removeLastHero(): void {
    this.heroDelete = this.heroNames.pop();
  }

}
