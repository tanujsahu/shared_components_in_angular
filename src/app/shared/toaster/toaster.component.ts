import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  @Input() message: string = 'Something went wrong';
  @Input() toaster_type: string = 'Success';
  @Input() toaster_duation: number = 0

  cls_toast: string = ''

  ngOnInit(): void {
    this.toaster();
    console.log(this.message, this.toaster_type, this.toaster_duation)
  }

  toaster() {
    console.log('toaster')
    this.cls_toast = 'show'
    setTimeout(() => {
      this.cls_toast = this.cls_toast.replace("show", "");
    }, this.toaster_duation * 1000);
  }
}
