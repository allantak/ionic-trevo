import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/login', icon: 'mail' },
    { title: 'Outbox', url: '/login', icon: 'paper-plane' },
    { title: 'Favorites', url: '/login', icon: 'heart' },
    { title: 'Archived', url: '/login', icon: 'archive' },
    { title: 'Trash', url: '/login', icon: 'trash' },
    { title: 'Spam', url: '/login', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
