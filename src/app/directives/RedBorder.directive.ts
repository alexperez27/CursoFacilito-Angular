import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[redBorder]'
})

export class RedBorder{
  constructor(private el : ElementRef){ }

  @Input() redBorder : string;
  @Input() classElement : string;

  ngOnInit(){
    this.el.nativeElement.classList.add(this.classElement);
  }

  @HostListener("mouseover") applyBorder(){
    this.el.nativeElement.style.border = `solid 2px ${this.redBorder}`;
  }

  @HostListener("mouseout") removerBorder(){
    this.el.nativeElement.style.border = "none";
  }
}
