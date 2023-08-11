import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'urgente':
        return '#eb445a';
      case 'media':
        return '#E68324';
      case 'baixa':
        return '#ffc409';
      default:
        return '#747474';
    }
  }

}
