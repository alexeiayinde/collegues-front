import { Component } from '@angular/core';
import Collegue from './models/Collegue';
import {collegueMock} from './mock/collegues.mock'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'collegues-front';

  collegue = collegueMock;
}
