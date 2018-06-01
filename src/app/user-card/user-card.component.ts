import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public name : string;
  public username : string;
  public avatar : string;

  @Output() subscribed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
      this.name="Alex";
      this.username="aperez";
      this.avatar="../favicon.ico";

      setTimeout(()=> this.subscribed.emit(true), 3000);
  }

  changing(event : any){
    this.username=event.target.value;
  }

}
