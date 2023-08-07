import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ICall } from 'src/app/types/call';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  listCall: Array<ICall> = [];

  constructor( private router: Router, private apiService: ApiService) { }

  call: ICall = {
    title: "vasco",
    priority: "vasco"
  }

  ngOnInit() {


    console.log(localStorage.getItem('token'))
    this.apiService.listCall().subscribe(listCall => this.listCall = listCall);

  }

  onClickAddCall(){
    console.log("entrou")
    this.router.navigate(['registry']);
  }

}
