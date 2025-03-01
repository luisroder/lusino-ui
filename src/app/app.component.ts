import { Component } from '@angular/core';
import { HlmDatePickerComponent } from '@spartan-ng/ui-datepicker-helm';

@Component({
  selector: 'app-root',
  imports: [HlmDatePickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lusino-ui';
}
