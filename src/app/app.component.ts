import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng Cli App!';
  highlight = 'highlight directive';
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
}
