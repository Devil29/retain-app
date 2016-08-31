import { Component } from '@angular/core';
import { AppBar } from '../ui';

@Component({
  selector: 'main-container',
  directives:[
  	AppBar
  ],
  template: `
    <div>
      <main class="main">
      	<app-bar></app-bar>
      	Content will go here
      </main>
    </div>
  `
})
export class Main {}
