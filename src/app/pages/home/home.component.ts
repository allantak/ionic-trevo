import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor( private router: Router) { }

  call: ICall = {
    title: "vasco",
    priority: "vasco",
    id: "vasco"
  }

  ngOnInit() {

    console.log(localStorage.getItem('token'))
  }

  onClickAddCall(){
    console.log("entrou")
    this.router.navigate(['registry']);
  }

}
