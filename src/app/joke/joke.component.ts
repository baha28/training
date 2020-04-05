import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
})
export class JokeComponent {
  @Input('joke') data: Joke;
}
