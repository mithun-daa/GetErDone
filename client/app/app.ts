import {bootstrap, Component} from 'angular2/angular2';
import {AppHeader} from './header';
import {ActiveWorkflows} from './active-workflows';

@Component({
    selector: 'get-er-done',
    templateUrl: 'templates/get-er-done.html',
    directives: [AppHeader, ActiveWorkflows]
})
class AppComponent { }
bootstrap(AppComponent);

