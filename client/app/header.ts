import {Component} from 'angular2/angular2';
declare var user: any;

@Component({
    selector: 'app-header',
    templateUrl: 'templates/app-header.html'
})
export class AppHeader {
    public loggedInUser = user;    
 }
