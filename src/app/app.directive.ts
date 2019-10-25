import { ElementRef, Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLigth]'
})
export class HighLigthDirective{

    constructor(private elementRef:ElementRef){
        
    }

// Se hace referencia a ElementRef para inyectar una referencia al Host del elemento del DOM
    
    @HostListener('mouseleave')
    onMouseLeave(){
        this.highlight(null);
    }

    @HostListener('mouseenter')
    onMouseEnter(){
        this.highlight('red');
    }

   private highlight(color: String){
        this.elementRef.nativeElement.style.backgroundColor = color;
   }

}