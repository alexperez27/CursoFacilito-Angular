import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public userSubscribed : boolean = false;

  subscriptionChanged(evento : any){
    console.log('Usuario suscrito:'+evento);
  }
}
