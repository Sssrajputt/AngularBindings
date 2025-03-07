import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Hello from BridgeLabz';
  imgUrl: string = 'assets/BL_logo_square_jpg.jpg'; // Path to the logo

  onClick(): void {
    window.open('https://www.bridgelabz.com', '_blank'); // Opens site in a new tab
  }
}
