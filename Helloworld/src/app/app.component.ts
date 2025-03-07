import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Hello from BridgeLabz'; // Optional title
  imgUrl: string = 'assets/BL_logo_square_jpg.jpg'; // Path to the BridgeLabz logo
}
