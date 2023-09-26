import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showFeature: string = '';

  onNavButtonClicked(data: { buttonName: string }) {
    console.log('onNavButtonClicked', data.buttonName);
    // this.showFeature = data.buttonName.toLowerCase();
  }
}
