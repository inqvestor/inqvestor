import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-ionicon',
  templateUrl: './ionicon.component.html',
  styleUrls: ['./ionicon.component.scss'],
})
export class IoniconComponent implements OnInit, AfterViewInit {
  @Input() iconName = 'alert-circle-outline';
  @Input() widthInPixel = 20;
  @ViewChild('objSVG') objElement!: ElementRef;
  @Input() storkedWidthInPx = 12;



  constructor() {}

  ngOnInit() {
    console.log();
  }

  ngAfterViewInit() {
    const objNativeElement: HTMLObjectElement = this.objElement.nativeElement;
    const svgURL = `../../../assets/svg/${this.iconName}.svg`;
    objNativeElement.data = svgURL;
    objNativeElement.setAttribute('storkedWidthInPx', `${this.storkedWidthInPx}px`)
    objNativeElement.addEventListener('load', this.onSvgLoad, false);
  }


  onSvgLoad(_evt: Event) {
    const htmlObj = _evt.currentTarget as HTMLObjectElement;
    const svgDoc = htmlObj?.contentDocument;
    const storkedWidthInPx = htmlObj.getAttribute('storkedWidthInPx');
    const style = svgDoc?.createElementNS(
      'http://www.w3.org/2000/svg',
      'style'
    );
    if (style && svgDoc) {
      style.textContent =
        `.ionicon { color: #3498DB; fill:none; stroke:currentColor;stroke-width:${storkedWidthInPx}; }`;
      svgDoc.documentElement?.appendChild(style);
    }
  }


}
