import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
  title = 'curso-angular';

  itemStringLeft = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado',
  ];

  itemStringRight = ['Mr.0', 'Tomato'];


}