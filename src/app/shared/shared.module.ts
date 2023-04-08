import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ToasterComponent } from './toaster/toaster.component';
import { TableComponent } from './table/table.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TimerComponent } from './timer/timer.component';
import { MatCardModule } from '@angular/material/card';


const components = [CardComponent,
  ToasterComponent,
  TableComponent,
  ButtonsComponent,
  InputsComponent,
  RadioButtonsComponent,
  CheckboxComponent,
  TimerComponent]
@NgModule({
  declarations: [components],
  imports: [CommonModule, MatCardModule],
  exports: [components]
})
export class SharedModule { }
