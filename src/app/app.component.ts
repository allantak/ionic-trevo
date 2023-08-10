import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router, private menu: MenuController) {}

  routing(route: string) {
    if(route === '/'){
      localStorage.removeItem('token')
      console.log(localStorage.getItem('token'))
    }
    this.router.navigateByUrl(route);
    this.menu.close();
  }
}
