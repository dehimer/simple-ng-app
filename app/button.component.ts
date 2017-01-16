import { Component } from '@angular/core';

@Component({
    selector: 'button',
    template: `<ng-content></ng-content>`,
    styles: [
      `
      :host {
        display: flex;
        justify-content: center;
        
        margin: 3px;
        border-radius: 5px;
        background-color: rgba(255,255,255,0.5);
        color: white;
        border: none;
        min-width: 100px;
        font-size: 20px;
      }
      `
    ]
})
export class ButtonComponent {}