import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  exampleTextField = 'fluent-web-components';

  onClick(value : string | null) {
    alert('Hello ' + value);
  }
}
