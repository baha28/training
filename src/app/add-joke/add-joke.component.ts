import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.css']
})
export class AddJokeComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();
  constructor() { }

  ngOnInit() {
  }

  public createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
