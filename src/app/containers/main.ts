import { Component } from '@angular/core';
import { AppBar } from '../ui';
import { Notes } from './notes';

@Component({
  selector: 'main-container',
  directives:[
  	AppBar,
  	Notes
  ],
  template: `
    <div>
      <main class="main">
      	<app-bar></app-bar>
      	<notes-container></notes-container>
      </main>
    </div>
  `
})
export class Main {}
