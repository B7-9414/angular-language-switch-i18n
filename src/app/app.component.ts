import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // you shoud move this to the servicses => ng g s translate-page 
  constructor(public translate: TranslateService) {
    translate.addLangs(['en','ar']);
    translate.setDefaultLang('ar');
      const browserLang= translate.getBrowserLang();
      translate.use(browserLang.match(/ar|ar/)? browserLang:'ar')
  }
}
