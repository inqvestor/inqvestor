import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

 @Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit,AfterViewInit  {

  @ViewChild('objSVG') objElement!: ElementRef ;
  svgURL!:string;

  constructor() { }

  ngOnInit() {

    // const objSVGEl: HTMLDivElement = this.objSVG.nativeElement;
      console.log('');

  }

  ngAfterViewInit() {
    console.log(this.objElement);
    const objNativeElement: HTMLObjectElement = this.objElement.nativeElement ;
   //  this.svgURL='../../../assets/print.svg';
   this.svgURL='../../../assets/svg/open.svg';
    //this.svgURL='../../../../node_modules/ionicons/dist/svg/open.svg';
    objNativeElement.data =  this.svgURL;
    objNativeElement.addEventListener('load', function(){
      const svgDoc = objNativeElement.contentDocument;
      const style = svgDoc?.createElementNS("http://www.w3.org/2000/svg", "style");
      if(style && svgDoc ){
        style.textContent = ".ionicon { fill:none; stroke: green;stroke-width:32px; }";
        svgDoc.documentElement?.appendChild(style);
      }
    });


    console.log(objNativeElement);


  }

}
