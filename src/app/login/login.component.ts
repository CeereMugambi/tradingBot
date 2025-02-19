import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  Title = 'NgTradingbot | Login';
  secondaryMessage = 'Securely login to trade with Alpaca';
  clientId = 'your-client-id-here'; // Replace with environment variable or service
  redirectUri = 'your-redirect-uri-here'; // Replace with environment variable or service
  isAuth = false; // Replace with actual authentication logic

  constructor() {}

  ngOnInit(): void {
    // Check authentication status here if using a service
  }
}

