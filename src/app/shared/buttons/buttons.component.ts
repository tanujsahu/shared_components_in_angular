import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  @Input() btn_text: string = 'Submit';
  @Input() btn_type: string = 'Primary'
}
