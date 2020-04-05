import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke',
  template: `
<div class="card card-block">
    <ng-content></ng-content>
<!--  <h4 class="card-title">{{data.setup}}</h4>-->
  <p class="card-text"
     [hidden]="data.hide">{{data.punchline}}</p>
  <a (click)="data.toggle()"
     class="btn btn-warning">Tell Mee
  </a>
</div>
  `
})
export class JokeComponent {
  @Input('joke') data: Joke;
}
