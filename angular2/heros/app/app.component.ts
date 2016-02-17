import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>Heros</h1>'
})
export class AppComponent {
    public title = 'Tour of Heroes';
    public hero = 'Windstorm';
}
