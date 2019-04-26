import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation  } from '../app/components/animations/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [ fadeAnimation ]
})
export class AppComponent {	}
