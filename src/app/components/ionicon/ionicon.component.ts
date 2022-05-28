import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ionicon',
  templateUrl: './ionicon.component.html',
  styleUrls: ['./ionicon.component.scss']
})
export class IoniconComponent implements OnInit,AfterViewInit {
  @Input() iconName='alert-circle-outline';
  @Input() widthInPixel=20;
  @ViewChild('objSVG') objElement!: ElementRef;
  @Input() isDarkMode =false;



  constructor() { }

  ngOnInit() {
     console.log();
  }

  ngAfterViewInit() {
     const objNativeElement: HTMLObjectElement = this.objElement.nativeElement;
    //  this.svgURL='../../../assets/print.svg';
    const svgURL = `../../../assets/svg/${this.iconName}.svg`;
    //this.svgURL='../../../../node_modules/ionicons/dist/svg/open.svg';
    objNativeElement.data = svgURL;
    objNativeElement.addEventListener('load', function () {
      const svgDoc = objNativeElement.contentDocument;
      const style = svgDoc?.createElementNS(
        'http://www.w3.org/2000/svg',
        'style'
      );

      if (style && svgDoc) {
         style.textContent =
          '   .ionicon {  color:red; fill:none; stroke:currentcolor;stroke-width:32px; }';
        svgDoc.documentElement?.appendChild(style);
      }
    });

    console.log(objNativeElement);
  }

}
