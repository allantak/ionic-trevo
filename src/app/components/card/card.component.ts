import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ICall } from 'src/app/types/call';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() callData!: ICall
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() updateEvent = new EventEmitter<ICall>();

  constructor(private apiService: ApiService,  private router: Router) { }

  ngOnInit() {}

  onClickDelete(id?: number){
    this.deleteEvent.emit(id);
  };
  onClickUpdate(element: ICall){
    this.updateEvent.emit(element)
  }

}
