import { Component, Input } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() pokes: Pokemon[] = [];
  alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

  countByLetter(letter:string):number{
    return this.pokes.filter(poke => poke.name.startsWith(letter)).length;
  }
}
