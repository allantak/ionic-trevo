import { Component, Input, OnInit } from '@angular/core';
import '../../types/call';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() callData!: ICall

  constructor() { }

  ngOnInit() {}

}
