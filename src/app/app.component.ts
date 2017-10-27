import {Component, animate, transition, style, state, trigger} from "@angular/core";
import "rxjs/add/operator/map";
import {Routes} from "@angular/router";

const routes : Routes = [
  {
    path: ''
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';

}
