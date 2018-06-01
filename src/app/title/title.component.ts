import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate,state } from '@angular/animations';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  animations:[
    trigger('showUp',[
      state('0',style({
        backgroundColor:'blue'
      })),
      state('1',style({
        backgroundColor:'red'
      })),
      transition('0 => 1',animate('0.4s ease-out',style({
        transform : 'scale(1.2)',
        border: 'solid 1px'
      }))),
      transition('1 => 0',animate ('0.8s ease-out'))
    ])
  ]
})
export class TitleComponent implements OnInit {
  public name : string;
  public edad : number;
  public edades : number[];
  public isAvailable : boolean = false;

  public moreInformation : boolean = false;
  public launchDate : Date;
  public price : number;
  public duration : number;

  public css_classes : string[] = ['active','shadow'];
  public topics : string[] ;
  public category : string;//mobile, web, other

  @Input() subscribed : boolean;

  constructor() { }

  ngOnInit() {
    this.name='Alexander';
    this.edad=21;

    this.launchDate = new Date();
    this.price = 25;
    this.duration = 3800;

    setTimeout(() => this.name = 'Alexander Pérez', 3000 )
    setTimeout(() => this.isAvailable = true, 3000 )

    setTimeout(() => this.css_classes = ['shadow'], 3000 )

    this.topics=[
      'Introducción a la Programación',
      'Programación I',
      'Programación II'
    ];
    this.category='web';
  }

  getEdadNombre() : string{
    return `${this.name} : ${this.edad}`;
  }

  toggleMoreInformation(){
    this.moreInformation=!this.moreInformation;
  }

}
