import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  @Output() emitNavButtonClick = new EventEmitter<{ buttonName: string }>();
  collapsed = true;
  buttonName: string;

  onNavButtonClick = (event) => {
    console.log('onNavButtonClick', event.target.textContent);
    this.buttonName = event.target.textContent;
    this.emitNavButtonClick.emit({ buttonName: event.target.textContent });
  };
}
