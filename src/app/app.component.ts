import { Component } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokeProject';

}
// platformBrowserDynamic().bootstrapModule(app.Module).then(r => console.log(r));
