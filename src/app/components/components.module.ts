import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports:[CardComponent],
})
export class ComponentsModule { }
