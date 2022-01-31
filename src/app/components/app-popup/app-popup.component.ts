import { Component, HostBinding, Input, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './app-popup.component.html',
  styleUrls: ['./app-popup.component.scss'],
})
export class AppPopupComponent implements OnInit {
  //  @HostBinding('style.background') backgroundColor = 'gray';
  //@HostBinding('attr.ngDraggable') ngDraggable='';
  // @HostBinding('style.color') get textColor() {
  //   return 'white';
  // }

  @Input() show:boolean = false;
  public hide:boolean = false;

  @Input() heightInPx: number = 200;
  @Input() widthInPx: number = 400;

  @Input() show$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  height!: string;
  width!: string;
  marginTop!: string;
  marginLeft!: string;

  constructor() {}


  ngOnChanges(changes: SimpleChanges) {

   console.log('val changes--------', changes);
   if( changes['show']){
     this.hide=false;
   }

}


  ngOnInit(): void {

    this.show$.subscribe( showFlg=> this.show=showFlg);
  //  this.show=true;
     this.hide = !this.show;
    this.height = `${this.heightInPx.toString()}px`;
    this.width = `${this.widthInPx.toString()}px`;
    this.marginTop = `${(-1 * this.heightInPx) / 2}px`;
    this.marginLeft = `${(-1 * this.widthInPx) / 2}px`;
  }

  public hideModal() {
    console.log('---------------------');
    this.show = false;
    this.hide = true;
}
}
