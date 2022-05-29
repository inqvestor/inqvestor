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
  @Input() isDarkMode = false;

  constructor() {}

  ngOnInit() {
    console.log();
  }

  ngAfterViewInit() {
    const objNativeElement: HTMLObjectElement = this.objElement.nativeElement;
    //  this.svgURL='../../../assets/print.svg';
    const svgURL = `../../../assets/svg/${this.iconName}.svg`;
    //this.svgURL='../../../../node_modules/ionicons/dist/svg/open.svg';
    objNativeElement.data = svgURL;
    objNativeElement.setAttribute('isDarkMode', this.isDarkMode.toString());
    objNativeElement.addEventListener('load', this.onSvgLoad, false);
    console.log(objNativeElement);
  }


  onSvgLoad(_evt: Event) {
    const htmlObj = _evt.currentTarget as HTMLObjectElement;
    console.log('=============', htmlObj.getAttribute('isDarkMode'));
    // const color = htmlObj.style.color;
    const isDarkMode = htmlObj.getAttribute('isDarkMode');
    // const color = isDarkMode==='true'? 'white':'darkgray';
    const color = htmlObj.parentElement
      ? getComputedStyle(htmlObj?.parentElement).getPropertyValue(
          '--primary-text'
        )
      : 'red';
    const svgDoc = htmlObj?.contentDocument;
    const style = svgDoc?.createElementNS(
      'http://www.w3.org/2000/svg',
      'style'
    );
    if (style && svgDoc) {
      style.textContent =
        '   .ionicon { color: #3498DB;   fill:none; stroke:currentColor;stroke-width:12px; }';
      svgDoc.documentElement?.appendChild(style);
    }
  }


  onSvgLoad2(_evt: Event) {
    const htmlObj = _evt.currentTarget as HTMLObjectElement;
    const svgDoc = htmlObj?.contentDocument;

    if (svgDoc) {
      const linkElm = svgDoc.createElementNS(
        'http://www.w3.org/1999/xhtml',
        'link'
      );
      linkElm.setAttribute('href', '../../style.css');
      linkElm.setAttribute('type', 'text/css');
      linkElm.setAttribute('rel', 'stylesheet');
      svgDoc.documentElement?.appendChild(linkElm);
    }
  }

}
