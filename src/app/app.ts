import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{NaviBarHome} from './navi-bar-home/navi-bar-home';
import{MainHome} from './main-home/main-home';
import{FooterHome} from './footer-home/footer-home';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NaviBarHome, MainHome,FooterHome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gradFrontEnd');
}
