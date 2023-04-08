import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonsComponent } from './shared/buttons/buttons.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shared_module';
  /**
    * @comment call card component set title and content
    */
  currentItem = [{ title: 'title one', content: 'content one' }];

  /**
   * @comment call button
   */
  text = 'submit';

  /**
   * @comment call table pass heading and dataList
   */
  dataList: {}[] = [{
    company: 'ds', contact: 'support@ds', country: 'india',
    action: { edit: 'edit' }
  }];
  heading: {}[] = ['Company', 'Contact', 'Country', 'Action'];

  /***
   * @param call submit method
   */
  submit() {
    console.log('submit method call')
  }

  /**
   * @comments call toaster component with specific message and type
   */
  message: string = 'Thanks for using our service';
  toaster_type: string = 'Success';
  toaster_duation: number = 10;
  toaster_call: boolean = false;

  toaster_call_fn() {
    this.toaster_call = this.toaster_call ? false : true
    console.log('call toaster app')
  }

}
