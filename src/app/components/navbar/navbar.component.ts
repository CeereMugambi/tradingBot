import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() isAuth: boolean = false;
  @Input() liveMoneyToggle: boolean = false;

  activePage: string = '';

  setActivePage(page: string) {
    this.activePage = page;
  }
}
